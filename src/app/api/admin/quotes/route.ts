import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const session = cookieStore.get("admin_session");

    if (!session || session.value !== "authenticated") {
      console.log("Quotes API: Unauthorized - no valid session");
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log("Quotes API: Fetching quotes from database...");
    const quotes = await db.quote.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(`Quotes API: Found ${quotes.length} quotes`);
    if (quotes.length > 0) {
      console.log("Sample quote:", quotes[0]);
    }

    return NextResponse.json({ success: true, data: quotes });
  } catch (error) {
    console.error("Quotes API: Error fetching quotes:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch quotes" },
      { status: 500 }
    );
  }
}
