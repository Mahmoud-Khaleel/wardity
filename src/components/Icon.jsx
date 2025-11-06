import { useState } from "react";

function Icon({ icon, hoverIcon, title, size = "5", className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex justify-center items-center cursor-pointer ${className}`}
      onMouseEnter={() => hoverIcon && setIsHovered(true)}
      onMouseLeave={() => hoverIcon && setIsHovered(false)}
    >
      <img
        src={isHovered && hoverIcon ? hoverIcon : icon}
        alt="icon"
        className={`me-2 h-${size} w-${size}`}
      />
      <span>{title}</span>
    </div>
  );
}

export default Icon;
