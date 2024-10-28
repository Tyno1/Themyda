import React from "react";

type PricesType = {
  color: string;
  price: { amount: number; currency: string } | string;
};

const PriceHeader: React.FC = () => {
  const Prices: PricesType[] = [
    { color: "#3A068D", price: { amount: 500, currency: "lei" } },
    { color: "#73899B", price: { amount: 800, currency: "lei" } },
    { color: "#376DC4", price: { amount: 1300, currency: "lei" } },
    { color: "#1CB2BC", price: { amount: 1500, currency: "lei" } },
    { color: "#ABC47A", price: { amount: 1800, currency: "lei" } },
    { color: "#77113E", price: { amount: 3000, currency: "lei" } },
    { color: "#4AB3C6", price: { amount: 18000, currency: "lei" } },
    { color: "#11BE85", price: { amount: 30000, currency: "lei" } },
    { color: "#BEBEBE", price: "Indisponibil" },
  ];

  return (
    <div className="w-full h-14 bg-white rounded-tl-lg">
      <div className="w-full h-full flex gap-4 justify-center">
        {Prices.length >= 1 &&
          Prices.map((cost: PricesType, index) => (
            <div key={index} className="flex gap-2 items-center ">
              <div
                style={{
                  backgroundColor: cost.color,
                  borderRadius: "20px",
                }}
                className="w-4 h-4"
              ></div>
              <p className="text-black">
                {typeof cost.price === "string"
                  ? cost.price
                  : `${cost.price.amount} ${cost.price.currency}`}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PriceHeader;
