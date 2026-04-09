import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const session = cookieStore.get("admin_session");

    if (!session || session.value !== "authenticated") {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const quotes = await db.quote.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ success: true, data: quotes });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch quotes" },
      { status: 500 }
    );
  }
}
