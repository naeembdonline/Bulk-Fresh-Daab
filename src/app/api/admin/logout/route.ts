import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({ success: true });

    // Expire the cookie by setting Max-Age=0
    const expiredCookie = "admin_session=; HttpOnly; Path=/; Max-Age=0; SameSite=lax";

    response.headers.set("Set-Cookie", expiredCookie);
    console.log("Logout successful, cookie expired");

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to logout" },
      { status: 500 }
    );
  }
}
