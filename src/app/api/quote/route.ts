import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { companyName, contactPerson, phone, email, quantity, eventType, message } = body;

    // Validate required fields
    const errors: Record<string, string> = {};
    if (!companyName || companyName.trim() === "") {
      errors.companyName = "Company name is required";
    }
    if (!contactPerson || contactPerson.trim() === "") {
      errors.contactPerson = "Contact person name is required";
    }
    if (!phone || phone.trim() === "") {
      errors.phone = "Phone number is required";
    }
    if (!email || email.trim() === "") {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!quantity || quantity.trim() === "") {
      errors.quantity = "Quantity is required";
    }
    if (!eventType || eventType.trim() === "") {
      errors.eventType = "Event/shop type is required";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Save to database
    const quote = await db.quote.create({
      data: {
        companyName: companyName.trim(),
        contactPerson: contactPerson.trim(),
        phone: phone.trim(),
        email: email.trim(),
        quantity: quantity.trim(),
        eventType: eventType.trim(),
        message: message?.trim() || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Quote request submitted successfully. We'll contact you within 2 hours.",
        data: { id: quote.id },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
