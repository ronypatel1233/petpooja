import React, { useState } from "react";

export const EmployeeSelector = ({ className, onEmployeeChange, placeholder = "Select Employee" }) => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const employees = [
    "Ajay Kumar",
    "Priya Sharma", 
    "Rahul Singh",
    "Anita Patel",
    "Vikram Gupta",
    "Sita Devi",
    "Ravi Kumar",
    "Neha Agarwal",
    "Suresh Reddy",
    "Fatima Khan"
  ];

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
    setIsOpen(false);
    if (onEmployeeChange) {
      onEmployeeChange(employee);
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
                {selectedEmployee || placeholder}
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
              {employees.map((employee, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-neutralbg cursor-pointer font-text-small-regular text-[#212121] border-b border-[#ebebeb] last:border-b-0"
                  onClick={() => handleEmployeeSelect(employee)}
                >
                  {employee}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
