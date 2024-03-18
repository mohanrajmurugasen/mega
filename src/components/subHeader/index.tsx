import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubHeader = () => {
  const [active, setActive] = useState("HOME");
  const navigate = useNavigate();
  const list = ["home", "about", "services", "project", "contact"];
  return (
    <div className="m-auto">
      <div className="flex items-center justify-end">
        {list.map((itm, i) => (
          <div
            key={i}
            className={`cursor-pointer uppercase text-center ${
              itm === active
                ? "border-b-2 border-black font-semibold"
                : "font-medium"
            } ml-4 w-28 text-black text-sm pb-2`}
            onClick={() => {
              setActive(itm);
              navigate(`/${itm === "home" ? "" : itm}`);
            }}
          >
            {itm === "contact" ? "contact us" : itm}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeader;
