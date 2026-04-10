import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const session = cookieStore.get("admin_session");

    console.log("Quotes API: Checking authentication...");
    console.log("Quotes API: Session cookie exists:", !!session);
    console.log("Quotes API: Session value:", session?.value);

    if (!session) {
      console.log("Quotes API: Unauthorized - admin_session cookie not found in request");
      console.log("Quotes API: Available cookies:", Array.from(cookieStore.getAll()).map(c => c.name));
      return NextResponse.json(
        { success: false, message: "Unauthorized - no session cookie" },
        { status: 401 }
      );
    }

    if (session.value !== "authenticated") {
      console.log("Quotes API: Unauthorized - session value is:", session.value);
      return NextResponse.json(
        { success: false, message: "Unauthorized - invalid session" },
        { status: 401 }
      );
    }

    console.log("Quotes API: Authentication successful, fetching from database...");
    const quotes = await db.quote.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(`Quotes API: Found ${quotes.length} quotes in database`);
    if (quotes.length > 0) {
      console.log("Quotes API: Sample quote:", {
        id: quotes[0].id,
        company: quotes[0].companyName,
        createdAt: quotes[0].createdAt
      });
    }

    return NextResponse.json({ success: true, data: quotes });
  } catch (error) {
    console.error("Quotes API: Database error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch quotes", error: String(error) },
      { status: 500 }
    );
  }
}
