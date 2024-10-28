import React, { useEffect } from "react";
import { TabsProps } from "./Modal";

type ModalTabProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  Tabs: TabsProps[];
  handleTabChange: (name: string) => void;
  setIsOpen: (isOpen: boolean) => void;
};

const ModalNav = ({
  selectedTab,
  setSelectedTab,
  Tabs,
  handleTabChange,
  setIsOpen,
}: ModalTabProps) => {
  useEffect(() => {
    setSelectedTab(Tabs[0].name);
  }, []);

  return (
    <div
      aria-label="Modal navigation"
      className="w-full flex flex-col items-center"
    >
      <ul className="w-[60%] grid grid-cols-2 gap-2 p-2" role="list">
        <li>
          <button
            className="w-full text-white flex items-center justify-center h-full bg-black rounded-lg p-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            aria-label="Back to sector selection"
            onClick={() => setIsOpen(false)}
          >
            Inapoi la alegerea sectorului
          </button>
        </li>
        <li>
          <button
            className="w-full text-white flex items-center justify-center h-full bg-black rounded-lg p-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            aria-label="Back to event"
            onClick={() => setIsOpen(false)}
          >
            Inapoi la eveniment
          </button>
        </li>
      </ul>
      <ul
        role="tablist"
        aria-label="Booking process steps"
        className="w-full grid grid-cols-3 border-y-2 h-11"
      >
        {Tabs.map((tab, index) => (
          <li
            key={tab.name}
            role="presentation"
            className="text-black flex items-center justify-center border-r-2 h-full"
          >
            <button
              aria-selected={selectedTab === tab.name}
              aria-controls={`${tab.name}-panel`}
              id={`${tab.name}-tab`}
              tabIndex={selectedTab === tab.name ? 0 : -1}
              onClick={() => handleTabChange(tab.name)}
              className={`w-full h-full flex items-center justify-center border-r-2 text-center px-2 py-1 focus:outline-none  ${
                selectedTab === tab.name
                  ? "focus:bg-orange-600 focus:text-white focus:font-bold"
                  : "bg-white text-black hover:bg-orange-100"
              }`}
            >
              <span className="sr-only">Step {index + 1}:</span>
              {tab.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalNav;
