"use client";

import { useSelector } from "react-redux";
import Gallery from "./components/Gallery";
import PriceHeader from "./components/PriceHeader";
import { RootState } from "./state/store";
import axios from "axios";
import { Currency, SectionType, SectionVariants, Status } from "./lib/types";
import { useEffect } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const sections = useSelector((state: RootState) => state.sections);

  const createSection = async (newSection: SectionType) => {
    try {
      const response = await axios.post(`${apiUrl}/sections`, newSection);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to create section");
    }
  };

  const newSection: SectionType = {
    name: "VIP 1",
    variants: "VIP" as SectionVariants,
    seats: [{ row: "A", number: 1, status: "available" as Status }],
    priceTag: { amount: 500, currency: "lei" as Currency },
    capacity: 200,
    description: "vip seat",
  };

  useEffect(() => {
    createSection(newSection);
  }, []);

  return (
    <div className="min-h-screen">
      <main className="w-[100vw] h-[100vh] flex mx-auto my-auto p-8">
        <div className="w-[80%] h-full">
          <PriceHeader />
          <Gallery />
        </div>
        <div className="w-[20%] h-full border-2 border-white rounded-r-lg flex flex-col justify-between p-2">
          <div className="w-full h-32 bg-white rounded-lg pl-8 ">
            <div className="w-[36%] h-full flex flex-col items-start justify-center text-sm">
              <p className="text-[#AAB1BA]">Nici un loc selectat</p>
              <p className="text-[#AAB1BA]">0 bilete</p>
            </div>
          </div>
          <div className="w-full h-40 bg-white rounded-lg p-8 flex flex-col items-center justify-between">
            <p className="text-2xl font-bold text-black">0 l.</p>
            <button className="py-4 px-6 bg-[#F3F4F7] w-full text-medium text-[#0F172A] uppercase flex items-center justify-center rounded-xl">
              cumpăra
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
