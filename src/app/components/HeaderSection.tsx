import React from "react";
import moment from "moment";
import PriceHeader from "./PriceHeader";

const HeaderSection: React.FC = () => {
  const date = moment().format('Do MMMM YYYY, h:mm:ss a');
  return (
    <div>
      <h4 className="text-black text-center mt-2 text-sm">{date}</h4>
      <PriceHeader />
    </div>
  );
};

export default HeaderSection;
