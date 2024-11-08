import mongoose from "mongoose";
import { Schema } from "mongoose";

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

const Price = mongoose.models.Price || mongoose.model("Price", PriceSchema);
const PriceTag = mongoose.models.PriceTag || mongoose.model("PriceTag", PriceTagSchema);

export { PriceTag, Price };
