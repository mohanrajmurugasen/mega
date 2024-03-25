import { DownloadOutlined } from "@ant-design/icons";
import React from "react";

interface MyComponentProps {
  color: string;
}

const Exports: React.FC<MyComponentProps> = ({ color }) => {
  return (
    <div
      className={`bg-[#27272a2e] text-center flex items-center justify-center text-[${color}] p-2 text-sm cursor-pointer`}
    >
      Mega PT Brochure (Free Download) <DownloadOutlined className="ml-2" />
    </div>
  );
};

export default Exports;
