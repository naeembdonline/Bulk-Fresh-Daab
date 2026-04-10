import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    console.log("Login attempt - ADMIN_PASSWORD exists:", !!adminPassword);

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD not configured in environment");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    if (password === adminPassword) {
      // Set cookie using NextResponse headers
      const response = NextResponse.json({ success: true });

      const isProduction = process.env.NODE_ENV === "production";
      const cookieValue = `admin_session=authenticated; HttpOnly; Path=/; Max-Age=${60 * 60 * 24}; SameSite=lax${isProduction ? "; Secure" : ""}`;

      response.headers.set("Set-Cookie", cookieValue);

      console.log("Login successful, cookie set via headers");
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
