import { DownloadOutlined } from "@ant-design/icons";
import React from "react";

interface MyComponentProps {
  color: string;
  bg: string;
}

const ExportProject: React.FC<MyComponentProps> = ({ color, bg }) => {
  return (
    <div
      className={`bg-[#F2E9E2] text-center flex items-center justify-center text-black p-2 text-sm cursor-pointer`}
    >
      Mega PT Brochure (Free Download) <DownloadOutlined className="ml-2" />
    </div>
  );
};

export default ExportProject;
