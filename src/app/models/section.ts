import mongoose from "mongoose";
import { Schema } from "mongoose";

const SeatSchema = new Schema({
  row: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: Number,
    required: true,
    min: 1,
  },
  status: {
    type: String,
    enum: ["available", "reserved", "occupied"],
    default: "available",
  },
});

const PriceSchema = new Schema({
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  currency: {
    type: String,
    required: true,
    enum: ["lei", "eur", "usd", "gbp"],
  },
});

const PriceTagSchema = new Schema({
  price: {
    type: PriceSchema,
    required: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

const SectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    seats: [SeatSchema],
    priceTag: {
      type: PriceTagSchema,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Seat = mongoose.model("Seat", SeatSchema);
const Price = mongoose.model("Price", PriceSchema);
const PriceTag = mongoose.model("PriceTag", PriceTagSchema);
const Section = mongoose.model("Section", SectionSchema);

export { Seat, PriceTag, Price, Section };
