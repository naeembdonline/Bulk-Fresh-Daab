import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD not configured in environment");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    if (password === adminPassword) {
      const response = NextResponse.json({ success: true });

      // Set cookie with proper production-ready configuration
      const isProduction = process.env.NODE_ENV === "production";
      const maxAge = 60 * 60 * 24; // 24 hours

      // Standard cookie format that works across all environments
      const cookieValue = [
        `admin_session=authenticated`,
        `HttpOnly`,
        `Path=/`,
        `Max-Age=${maxAge}`,
        `SameSite=lax`,
        isProduction ? `Secure` : '',
      ].filter(Boolean).join('; ');

      response.headers.set("Set-Cookie", cookieValue);
      console.log("Login successful, cookie set");

      return response;
    }

    console.log("Login failed: invalid password");
    return NextResponse.json(
      { success: false, message: "Invalid password" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
