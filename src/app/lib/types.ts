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

export interface Seat {
  row: string;
  number: number;
  status: Status;
}

export interface Price {
  amount: Number;
  currency: Currency;
}

export interface PriceTagType {
  price: Price;
  color: string;
  description: string;
}

export enum SectionVariants {
  VIP = "VIP",
  REGULAR = "regular",
  GENERAL = "general",
}

export interface SectionType {
  name: string;
  variants: SectionVariants;
  seats: Seat[];
  priceTag: Price;
  capacity: number;
  description: string;
}
