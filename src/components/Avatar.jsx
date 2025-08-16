import React from "react";

export const Avatar = ({ 
  size = "md", 
  letter = "A", 
  className = "",
  variant = "primary"
}) => {
  const sizeClasses = {
    sm: "w-5 h-5 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-12 h-12 text-lg"
  };

  const variantClasses = {
    primary: "bg-brandprimary",
    secondary: "bg-blue-500",
    accent: "bg-purple-500"
  };

  return (
    <div 
      className={`
        flex items-center justify-center rounded-full 
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        ${className}
      `}
    >
      <span className="text-white font-medium leading-none text-center">
        {letter}
      </span>
    </div>
  );
};
