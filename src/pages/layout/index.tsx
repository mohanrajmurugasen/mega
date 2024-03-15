import React, { ReactNode, useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

interface ComponentReceiverProps {
  componentProp: ReactNode;
}

const LayOut: React.FC<ComponentReceiverProps> = ({ componentProp }) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Header />
      <div style={{ height: screenHeight > 1023 ? 110 : 85 }}></div>
      <div>{componentProp}</div>
      <Footer />
    </div>
  );
};

export default LayOut;
