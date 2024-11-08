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

const SectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    variants: {
      type: String,
      enum: ["general", "regular", "VIP"],
      required: true,
    },
    seats: [SeatSchema],
    priceTag: {
      type: Schema.Types.ObjectId,
      ref: "PriceTag",
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

const Seat = mongoose.models.Seat || mongoose.model("Seat", SeatSchema);
const Section = mongoose.models.Section || mongoose.model("Section", SectionSchema);

export { Seat, Section };
