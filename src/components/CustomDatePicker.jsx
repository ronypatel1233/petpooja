import React, { useState } from "react";

export const CustomDatePicker = ({ className, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const formatDisplayDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    setIsOpen(false);
    if (onDateChange) {
      onDateChange(newDate.toISOString().split('T')[0]);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate.getDate() === day && 
                        selectedDate.getMonth() === currentMonth && 
                        selectedDate.getFullYear() === currentYear;
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(day)}
          className={`w-8 h-8 flex items-center justify-center rounded text-sm hover:bg-brandlight ${
            isSelected ? 'bg-brandprimary text-white' : 'text-[#212121] hover:bg-neutralbg'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
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
          </div>
          
          {isOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-solid border-[#ebebeb] rounded-lg shadow-lg z-10 p-4 w-64">
              {/* Month/Year Header */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => {
                    if (currentMonth === 0) {
                      setCurrentMonth(11);
                      setCurrentYear(currentYear - 1);
                    } else {
                      setCurrentMonth(currentMonth - 1);
                    }
                  }}
                  className="p-1 hover:bg-neutralbg rounded"
                >
                  <img
                    className="w-4 h-4"
                    alt="Previous"
                    src="https://c.animaapp.com/medy1fp6HOX7TE/img/chevron-left.svg"
                  />
                </button>
                
                <span className="font-text-small-medium text-[#212121]">
                  {months[currentMonth]} {currentYear}
                </span>
                
                <button
                  onClick={() => {
                    if (currentMonth === 11) {
                      setCurrentMonth(0);
                      setCurrentYear(currentYear + 1);
                    } else {
                      setCurrentMonth(currentMonth + 1);
                    }
                  }}
                  className="p-1 hover:bg-neutralbg rounded"
                >
                  <img
                    className="w-4 h-4"
                    alt="Next"
                    src="https://c.animaapp.com/medy1fp6HOX7TE/img/chevron-right.svg"
                  />
                </button>
              </div>

              {/* Days of Week Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="w-8 h-8 flex items-center justify-center text-xs text-neutralsub-content font-text-small-regular">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {renderCalendar()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
