import React, { useState } from "react";

export const OutletSelector = ({ className, onOutletChange }) => {
  const [selectedOutlet, setSelectedOutlet] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const outlets = [
    "Main Branch",
    "Downtown Store",
    "Mall Location",
    "Airport Branch",
    "City Center",
    "Suburban Outlet"
  ];

  const handleOutletSelect = (outlet) => {
    setSelectedOutlet(outlet);
    setIsOpen(false);
    if (onOutletChange) {
      onOutletChange(outlet);
    }
  };

  return (
    <div className={`inline-flex items-start relative ${className}`}>
      <div className="inline-flex items-start gap-4 flex-[0_0_auto] rounded-lg relative bg-neutralbg">
        <div className="inline-flex flex-col items-start gap-1.5 flex-[0_0_auto] relative">
          <div 
            className="inline-flex items-center gap-6 px-4 py-[8.5px] h-8 overflow-hidden rounded-lg relative cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="inline-flex mt-[-0.50px] items-center gap-2 flex-[0_0_auto] mb-[-0.50px] relative">
         
              <span className="font-text-small-regular mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-[#212121] font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)]">
                {selectedOutlet || "Outlet Name"}
              </span>
            </div>
            <img
              className={`w-4 mt-[-0.50px] h-4 mb-[-0.50px] relative transition-transform ${isOpen ? 'rotate-180' : ''}`}
              alt="Chevron down"
              src="https://c.animaapp.com/medy1fp6HOX7TE/img/chevron-down.svg"
            />
          </div>
          
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-solid border-[#ebebeb] rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
              {outlets.map((outlet, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-neutralbg cursor-pointer font-text-small-regular text-[#212121] border-b border-[#ebebeb] last:border-b-0"
                  onClick={() => handleOutletSelect(outlet)}
                >
                  {outlet}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
