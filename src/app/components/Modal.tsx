import React, { Fragment, useState } from "react";
import ModalNav from "./ModalNav";
import HeaderSection from "./HeaderSection";
import DateAndTime from "../pages/DateAndTime";
import Payment from "../pages/Payment";
import Completed from "../pages/Completed";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedSection: string;
};
export type TabsProps = {
  name: string;
  value: string;
};

export default function Modal({
  isOpen,
  setIsOpen,
  selectedSection,
}: ModalProps) {
  const [selectedTab, setSelectedTab] = useState("");
  const Tabs: TabsProps[] = [
    { name: "DateAndTime", value: "Data si locul (biletul)" },
    { name: "PaymentMethods", value: "Metoda de plata" },
    { name: "Completed", value: "Finalizat!" },
  ];

  const handleTabChange = (name: string) => {
    setSelectedTab(name);
  };

  if (!isOpen) return null;
  return (
    <div
      className="relative z-[100]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4 text-center">
          <div className="w-full max-w-[90%] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col min-h-[95vh]">
            <div className="flex-grow flex flex-col h-[calc(90vh-2.5rem)] items-center">
              <ModalNav
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                Tabs={Tabs}
                handleTabChange={handleTabChange}
                setIsOpen={setIsOpen}
              />
              <HeaderSection />
              {selectedTab && (
                <Fragment>
                  <div className="text-black text-sm font-bold p-2 border-2 border-black rounded-lg mx-4">
                    Section - {selectedSection}
                  </div>
                </Fragment>
              )}
              {/* Conditional Rendering of Tabs */}
              <div className="flex-grow overflow-auto p-4 w-full">
                {selectedTab === "DateAndTime" && <DateAndTime />}
                {selectedTab === "PaymentMethods" && <Payment />}
                {selectedTab === "Completed" && <Completed />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
