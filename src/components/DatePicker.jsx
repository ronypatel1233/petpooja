import React, { useState } from "react";

export const DatePicker = ({ className, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    if (onDateChange) {
      onDateChange(e.target.value);
    }
  };

  const formatDisplayDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    });
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
              <img
                className="w-4 h-4 relative"
                alt="Calendar"
                src="https://c.animaapp.com/medy1fp6HOX7TE/img/calendar-dotted-8.svg"
              />
              <span className="font-text-small-regular mt-[-1.00px] tracking-[var(--text-small-regular-letter-spacing)] text-[length:var(--text-small-regular-font-size)] [font-style:var(--text-small-regular-font-style)] text-[#212121] font-[number:var(--text-small-regular-font-weight)] leading-[var(--text-small-regular-line-height)]">
                {formatDisplayDate(selectedDate)}
              </span>
            </div>
            <img
              className="w-4 mt-[-0.50px] h-4 mb-[-0.50px] relative"
              alt="Calendar"
              src="https://c.animaapp.com/medy1fp6HOX7TE/img/calendar-dotted-8.svg"
            />
          </div>
          
          {/* Hidden native date input */}
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="absolute opacity-0 pointer-events-none"
            style={{ position: 'absolute', left: '-9999px' }}
          />
          
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-solid border-[#ebebeb] rounded-lg shadow-lg z-10 p-4">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  handleDateChange(e);
                  setIsOpen(false);
                }}
                className="w-full border border-solid border-[#ebebeb] rounded px-3 py-2 font-text-small-regular text-[#212121]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
