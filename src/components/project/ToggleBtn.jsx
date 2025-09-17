import React, { useState } from "react";
// import { IoIosSwitch } from "react-icons/io";

const ToggleBtn = () => {
  const [isON, setIsON] = useState(false);

  const handleToggleSwitch = () => {
    setIsON(!isON);
  };

  const checkIsOn = isON ? "on" : "off";
  const toggleBGColor = { backgroundColor: isON ? "green" : "black" };

  return (
    <>
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
         
      </h2>

      <div
        className="toggle-switch cursor-pointer w-32 h-16 flex items-center justify-center rounded-full shadow-md transition-all duration-300"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn} text-white font-bold text-lg`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};

export default ToggleBtn;
