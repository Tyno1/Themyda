"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");

  const handleSelectSection = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    if (id === "") return null;
    setIsOpen(true);
    setSelectedSection(id);
  };

  // Sections configuration
  const sections = {
    left: [
      { id: "201", tier: "A" },
      { id: "202", tier: "B" },
      { id: "203", tier: "B" },
      { id: "204", tier: "C" },
      { id: "205", tier: "D" },
    ],
    bottom: [
      { id: "206", tier: "D" },
      { id: "207", tier: "D" },
      { id: "208", tier: "D" },
    ],
    right: [
      { id: "209", tier: "D" },
      { id: "210", tier: "C" },
      { id: "211", tier: "B" },
      { id: "212", tier: "B" },
      { id: "213", tier: "A" },
    ],
  };
  const vipSection = {
    left: [
      { id: "VIP 1", tier: "A" },
      { id: "VIP 2", tier: "B" },
      { id: "VIP 3", tier: "B" },
      { id: "VIP 4", tier: "C" },
    ],
    bottom: [
      { id: "VIP 5", tier: "D" },
      { id: "VIP 6", tier: "D" },
      { id: "VIP 7", tier: "D" },
      { id: "", tier: "A" },
      { id: "VIP 8", tier: "D" },
      { id: "VIP 9", tier: "C" },
      { id: "VIP 10", tier: "B" },
    ],
    right: [
      { id: "VIP 11", tier: "B" },
      { id: "VIP 12", tier: "A" },
      { id: "VIP 13", tier: "A" },
      { id: "VIP 14", tier: "A" },
    ],
  };
  return (
    <div className="w-full h-[calc(100%-3.5rem)] bg-black border-2 border-r-0 border-white rounded-bl-lg flex items-center justify-center">
      <div className="relative w-[42vw] aspect-square rounded-lg flex items-start ">
        <button className="w-1/2 bg-gray-400 h-[8%] rounded-lg text-xs absolute left-1/2 -translate-x-1/2 font-bold ">
          STAGE
        </button>
        {/* Center Section */}
        <div className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[56%] aspect-square bg-[#3A068D] rounded-2xl flex items-center justify-center">
          <span className="text-white text-sm md:text-lg">General Access</span>
        </div>
        <div className="text-sm md:text-lg font-bold relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-b-[100px] flex items-center justify-center">
          {/* Left Section */}
          <div className="z-50 absolute left-0 top-[10%] flex flex-col justify-between h-[90%] w-[15%] gap-[4px] ">
            {sections.left.map((section, index) => (
              <button
                onClick={(e) => handleSelectSection(e, section.id)}
                key={section.id}
                className={`bg-teal-500 w-full flex-1 text-white text-xs flex items-center justify-center rounded-lg text-sm md:text-lg font-bold`}
              >
                {section.id}
              </button>
            ))}
          </div>
          {/* Bottom Section */}
          <div className="z-50 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex w-[68%] h-[30%] gap-[4px]">
            {sections.bottom.map((section, index) => (
              <button
                onClick={(e) => handleSelectSection(e, section.id)}
                key={section.id}
                className={`bg-teal-500 w-[50%] h-[50%] text-white text-xs flex items-center justify-center rounded-lg text-sm md:text-lg font-bold`}
              >
                {section.id}
              </button>
            ))}
          </div>
          {/* Right Section */}
          <div className="z-50 absolute right-0 top-[10%] flex flex-col justify-between h-[90%] w-[15%] gap-[4px] ">
            {sections.right.reverse().map((section, index) => (
              <button
                onClick={(e) => handleSelectSection(e, section.id)}
                key={section.id}
                className={`bg-teal-500 w-full flex-1 text-white text-xs flex items-center justify-center rounded-lg text-sm md:text-lg font-bold`}
              >
                {section.id}
              </button>
            ))}
          </div>

          {/* VIP SECTION */}
          {/* Left Section */}
          <div className="z-50 absolute left-[-4px] top-[10%] -translate-x-full flex flex-col justify-between h-[90%] w-[8%] gap-[4px] ">
            {vipSection.left.map((section, index) => (
              <button
                onClick={(e) => handleSelectSection(e, section.id)}
                key={section.id}
                className={`bg-teal-900 w-full flex-1  flex items-center justify-center rounded-lg text-sm md:text-lg font-bold `}
              >
                <p className="-rotate-90 text-white text-xs">{section.id}</p>
              </button>
            ))}
          </div>

          {/* bottom Section */}
          <div className="z-50 absolute bottom-[-4px] left-1/2 -translate-x-1/2 translate-y-full flex w-full h-[10%] gap-[4px]">
            {vipSection.bottom.map((section, index) => (
              <button
                onClick={(e) => handleSelectSection(e, section.id)}
                key={section.id}
                className={`bg-teal-900 w-full flex-1 flex items-center justify-center rounded-lg text-sm md:text-lg font-bold `}
              >
                <p className=" text-white text-xs">{section.id}</p>
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="z-50 absolute right-[-4px] top-[10%] translate-x-full flex flex-col justify-between h-[90%] w-[8%] gap-[4px] ">
            {vipSection.right.reverse().map((section, index) => (
              <button
                onClick={(e) => handleSelectSection(e, section.id)}
                key={section.id}
                className={`bg-teal-900 w-full flex-1  flex items-center justify-center rounded-lg text-sm md:text-lg font-bold `}
              >
                <p className="-rotate-90 text-white text-xs">{section.id}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Modal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        selectedSection={selectedSection}
      />
    </div>
  );
};

export default Gallery;
