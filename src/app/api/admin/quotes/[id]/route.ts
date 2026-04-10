import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

/**
 * Helper function to get admin session cookie from request headers
 */
function getAdminSession(request: NextRequest): string | null {
  const cookieHeader = request.headers.get("cookie");

  if (!cookieHeader) {
    return null;
  }

  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [name, value] = cookie.trim().split('=');
    acc[name] = value;
    return acc;
  }, {} as Record<string, string>);

  return cookies['admin_session'] || null;
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = getAdminSession(request);

    if (!session || session !== "authenticated") {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Delete the quote
    await db.quote.delete({
      where: { id: params.id },
    });

    console.log(`Deleted quote: ${params.id}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete quote error:", error);

    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete quote",
        error: errorMessage
      },
      { status: 500 }
    );
  }
}
