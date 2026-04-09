import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, contactPerson, phone, quantity, message } = body;

    const errors: Record<string, string> = {};
    if (!companyName || companyName.trim() === "") {
      errors.companyName = "Required";
    }
    if (!contactPerson || contactPerson.trim() === "") {
      errors.contactPerson = "Required";
    }
    if (!phone || phone.trim() === "") {
      errors.phone = "Required";
    }
    if (!quantity || quantity.trim() === "") {
      errors.quantity = "Required";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const quote = await db.quote.create({
      data: {
        companyName: companyName.trim(),
        contactPerson: contactPerson.trim(),
        phone: phone.trim(),
        quantity: quantity.trim(),
        message: message?.trim() || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Quote request received. We'll contact you within 2 hours.",
        data: { id: quote.id },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
