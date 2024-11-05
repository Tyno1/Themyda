import { dbConnect } from "@/app/lib/db";
import { Section } from "@/app/models/section";
import { NextResponse } from "next/server";

export enum Currency {
  LEI = "lei",
  EUR = "eur",
  USD = "usd",
  GBP = "gbp",
}
export enum Status {
  AVAILABLE = "available",
  RESERVED = "reserved",
  OCCUPIED = "occupied",
}

export interface PriceTag {
  amount: number;
  currency: Currency;
}

export interface Seat {
  row: string;
  number: number;
  status: Status;
}

export interface Section {
  name: string;
  seats: Seat[];
  priceTag: PriceTag;
  capacity: number;
  description: string;
}

export async function GET() {
  const con = await dbConnect();
  return new NextResponse("connected");
}

export async function POST(request: any) {
  try {
    const con = await dbConnect();
    const data: Section = await request.json();
    const { name, capacity, priceTag, seats, description } = data;

    const newSection = new Section({
      name,
      seats,
      capacity,
      priceTag,
      description,
    });

    await newSection.save();
    return NextResponse.json(newSection, { status: 201 });
  } catch (error) {
    console.error("Error creating section:", error);
    return NextResponse.json(
      { error: "Error creating section" },
      { status: 500 }
    );
  }
}
