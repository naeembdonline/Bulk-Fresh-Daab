import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Helper function to get admin session cookie from request headers
 * This is more reliable than cookies() from next/headers in serverless environments
 */
function getAdminSession(request: NextRequest): string | null {
  const cookieHeader = request.headers.get("cookie");

  if (!cookieHeader) {
    console.log("Quotes API: No cookie header in request");
    return null;
  }

  // Parse cookies from the header manually
  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [name, value] = cookie.trim().split('=');
    acc[name] = value;
    return acc;
  }, {} as Record<string, string>);

  const session = cookies['admin_session'];
  console.log("Quotes API: Session value from header:", session);

  return session || null;
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication using request headers
    const session = getAdminSession(request);

    if (!session) {
      console.log("Quotes API: Unauthorized - no session cookie found");
      return NextResponse.json(
        { success: false, message: "Unauthorized - no session" },
        { status: 401 }
      );
    }

    if (session !== "authenticated") {
      console.log("Quotes API: Unauthorized - invalid session value:", session);
      return NextResponse.json(
        { success: false, message: "Unauthorized - invalid session" },
        { status: 401 }
      );
    }

    console.log("Quotes API: Authentication verified, fetching from database...");

    // Fetch quotes with error handling
    const quotes = await db.quote.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(`Quotes API: Successfully fetched ${quotes.length} quotes`);

    return NextResponse.json({ success: true, data: quotes });
  } catch (error) {
    console.error("Quotes API: Database error:", error);

    // Provide more detailed error information
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch quotes",
        error: errorMessage
      },
      { status: 500 }
    );
  }
}
