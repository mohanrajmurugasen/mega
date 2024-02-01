import React, { useState } from "react";

const SubHeader = () => {
  const [active, setActive] = useState("HOME");
  const list = ["HOME", "ABOUT", "SERVICES", "PROJECT", "CONTACT US"];
  return (
    <div className="container m-auto">
      <div className="flex items-center justify-center">
        {list.map((itm, i) => (
          <div
            key={i}
            className={`cursor-pointer ${
              itm === active
                ? "border-b-2 border-white font-semibold"
                : "font-medium"
            } mr-4 w-28 text-sm pb-2`}
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
