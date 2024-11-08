import { dbConnect } from "@/app/lib/db";
import { PriceTagType } from "@/app/lib/types";
import { PriceTag } from "@/app/models/priceTag";
import { NextResponse } from "next/server";

export async function GET() {
  const con = await dbConnect();
  return new NextResponse("connected");
}

export async function POST(request: any) {
  try {
    const con = await dbConnect();
    const data: PriceTagType = await request.json();

    const { price , color, description } = data;

    const newPriceTag = new PriceTag({
      price,
      color,
      description,
    });

    await newPriceTag.save();
    return NextResponse.json(newPriceTag, { status: 201 });
  } catch (error) {
    console.error("Error creating section:", error);
    return NextResponse.json(
      { error: "Error creating section" },
      { status: 500 }
    );
  }
}
