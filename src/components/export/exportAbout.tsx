import { DownloadOutlined } from "@ant-design/icons";
import React from "react";

interface MyComponentProps {
  color: string;
  bg: string;
}

const ExportAbout: React.FC<MyComponentProps> = ({ color, bg }) => {
  return (
    <div
      className={`bg-[#0000002b] text-center flex items-center justify-center text-[#ffffff9c] p-2 text-sm cursor-pointer`}
    >
      Mega PT Brochure (Free Download) <DownloadOutlined className="ml-2" />
    </div>
  );
};

export default ExportAbout;
