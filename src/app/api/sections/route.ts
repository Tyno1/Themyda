import { dbConnect } from "@/app/lib/db";
import { PriceTagType, SectionType } from "@/app/lib/types";
import { PriceTag } from "@/app/models/priceTag";
import { Section } from "@/app/models/section";
import { NextResponse } from "next/server";

export async function GET() {
  const con = await dbConnect();
  return new NextResponse("connected");
}

export async function POST(request: any) {
  try {
    const con = await dbConnect();
    const data: SectionType = await request.json();

    const { name, capacity, priceTag, seats, description, variants } = data;

    // Assuming priceTag is an object with amount and currency
    const existingPriceTag = await PriceTag.findOne({
      "price.amount": priceTag.amount,
      "price.currency": priceTag.currency,
    });

    if (!existingPriceTag) {
      return NextResponse.json(
        { error: "PriceTag not found" },
        { status: 400 }
      );
    }
    
    const newSection = new Section({
      name,
      seats,
      capacity,
      priceTag: existingPriceTag,
      description,
      variants,
    });

    await newSection.save();
    return NextResponse.json(newSection, { status: 201 });
  } catch (error: any) {
    console.error("Error creating section:", error?.message);
    return NextResponse.json(
      { error: "Error creating section" },
      { status: 500 }
    );
  }
}
