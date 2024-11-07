import { dbConnect } from "@/app/lib/db";
import { SectionType } from "@/app/lib/types";
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
    console.log(data);

    const { name, capacity, priceTag, seats, description, variants } = data;

    const newSection = new Section({
      name,
      seats,
      capacity,
      priceTag,
      description,
      variants,
    });

    await newSection.save();
    return NextResponse.json(newSection, { status: 201 });
  } catch (error) {
    console.error("Error creating section:", error?.message);
    return NextResponse.json(
      { error: "Error creating section" },
      { status: 500 }
    );
  }
}
