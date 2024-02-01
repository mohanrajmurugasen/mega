import React, { ReactNode } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

interface ComponentReceiverProps {
  componentProp: ReactNode;
}

const LayOut: React.FC<ComponentReceiverProps> = ({ componentProp }) => {
  return (
    <div>
      <Header />
      <div style={{ height: 92 }}></div>
      <div>{componentProp}</div>
      <Footer />
    </div>
  );
};

export default LayOut;
