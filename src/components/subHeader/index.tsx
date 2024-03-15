import React, { useState } from "react";

const SubHeader = () => {
  const [active, setActive] = useState("HOME");
  const list = ["HOME", "ABOUT", "SERVICES", "PROJECT", "CONTACT US"];
  return (
    <div className="m-auto">
      <div className="flex items-center justify-end">
        {list.map((itm, i) => (
          <div
            key={i}
            className={`cursor-pointer text-center ${
              itm === active
                ? "border-b-2 border-black font-semibold"
                : "font-medium"
            } ml-4 w-28 text-black text-sm pb-2`}
            onClick={() => setActive(itm)}
          >
            {itm}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
