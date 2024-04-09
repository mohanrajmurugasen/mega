import React, { useEffect, useState } from "react";
import { Col, Row, Modal, Button } from "antd";
import { CaretRightOutlined, UpOutlined } from "@ant-design/icons";
import pBanner1 from "../../assets/images/pBanner1.png";
import pBanner2 from "../../assets/images/pBanner2.png";
import pBanner3 from "../../assets/images/pBanner3.png";
import pBanner4 from "../../assets/images/pBanner4.png";
import Map from "../../assets/images/map.png";
import Pro1 from "../../assets/images/pro1.png";
import Pro2 from "../../assets/images/pro2.png";
import Pro3 from "../../assets/images/pro3.png";
import Pro4 from "../../assets/images/pro4.png";
import Pro5 from "../../assets/images/pro5.png";
import Pro6 from "../../assets/images/pro6.png";
import Pro7 from "../../assets/images/pro7.png";
import Pro8 from "../../assets/images/pro8.png";
import Pro9 from "../../assets/images/pro9.png";
import Pro10 from "../../assets/images/pro10.png";
import Pro11 from "../../assets/images/pro11.png";
import Pro12 from "../../assets/images/pro12.png";
import ExportProject from "../export/exportProject";
import "./index.css";

const ProjectPage = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [modalOpen, setModalOpen] = useState(false);
  const [modelImage, setModelImage] = useState(Pro1);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  };

  const banner = () => {
    return (
      <div
        className="banner bg-[#FAF3ED] overflow-hidden"
        style={{ height: screenHeight - 180 }}
      >
        <ExportProject color={"black"} bg={"#27272a2e"} />
        <Row gutter={16} style={{ margin: 0 }} className="items-center">
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="p-6">
              <div className="text-[#783A35] text-lg font-medium mb-3">
                Built for Durability and results.
              </div>
              <Row gutter={16} style={{ margin: 0 }}>
                <Col lg={8} md={8} sm={24} xs={24}>
                  <div className="mb-4">
                    <div className="text-3xl font-bold">400,000+</div>
                    <div>Rn. Mtr. of cables installed</div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <div className="mb-4">
                    <div className="text-3xl font-bold">230+</div>
                    <div>Number of Projects</div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <div className="mb-4">
                    <div className="text-3xl font-bold">500+</div>
                    <div>MT of Cable used</div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <div className="mb-4">
                    <div className="text-3xl font-bold">120+</div>
                    <div>Structural Consultants</div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <div className="mb-4">
                    <div className="text-3xl font-bold">80+</div>
                    <div>Architects</div>
                  </div>
                </Col>
              </Row>
              <div className="text-[#783A35]">
                Know More <CaretRightOutlined />
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <img src={Map} alt="map" className="h-full w-full object-cover" />
          </Col>
        </Row>
      </div>
    );
  };
  const banner2 = () => {
    return (
      <div className="banner2 bg-[#783A35]">
        <div className="container m-auto pt-8 pl-8 pr-8">
          <Row gutter={16} style={{ margin: 0 }}>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="text-center mb-8">
                <div className="bg-[#FAF3ED] rounded-full max-w-14 p-2 m-auto">
                  <img src={pBanner1} alt="pBanner1" />
                </div>
                <div className="text-white text-xl mt-2 mb-2">45+ Projects</div>
                <div className="text-white">Residential</div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="text-center mb-8">
                <div className="bg-[#FAF3ED] rounded-full max-w-14 p-2 m-auto">
                  <img src={pBanner2} alt="pBanner1" />
                </div>
                <div className="text-white text-xl mt-2 mb-2">45+ Projects</div>
                <div className="text-white">Residential</div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="text-center mb-8">
                <div className="bg-[#FAF3ED] rounded-full max-w-14 p-2 m-auto">
                  <img src={pBanner3} alt="pBanner1" />
                </div>
                <div className="text-white text-xl mt-2 mb-2">45+ Projects</div>
                <div className="text-white">Residential</div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="text-center mb-8">
                <div className="bg-[#FAF3ED] rounded-full max-w-14 p-2 m-auto">
                  <img src={pBanner4} alt="pBanner1" />
                </div>
                <div className="text-white text-xl mt-2 mb-2">45+ Projects</div>
                <div className="text-white">Residential</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
  const collapse = () => {
    return (
      <div className="container mx-auto px-8">
        <div className="p-8">
          <div className="text-center text-3xl text-black font-semibold mb-4 mt-4">
            Crafted Solutions
          </div>
          <div className="text-center text-lg text-gray-500 font-medium mb-4">
            Explore our game-changing Mega PT solutions that are built to
            endure.
          </div>
        </div>

        <Row gutter={32} style={{ margin: 0 }}>
          <Col lg={8} md={8} sm={12} xs={24}>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro1);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro1}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro2);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro2}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div className="text-[#783A35] p-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-8 cursor-pointer">
              Precision Engineering
            </div>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro3);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro3}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro4);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro4}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-black font-bold bg-[#e3cec0ab]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div className="text-[#783A35] p-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-8 cursor-pointer">
              We are committed to safety and sustainability
            </div>
          </Col>
          <Col lg={8} md={8} sm={12} xs={24}>
            <div className="text-[#783A35] p-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-8 cursor-pointer">
              Build To Last
            </div>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro5);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro5}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-black font-bold bg-[#e3cec0ab]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro6);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro6}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro7);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro7}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div className="text-[#783A35] p-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-8 cursor-pointer">
              Rising above, every single time.
            </div>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro8);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro8}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
          </Col>
          <Col lg={8} md={8} sm={12} xs={24}>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro9);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro9}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-black font-bold bg-[#e3cec0ab]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div className="text-[#783A35] p-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-8 cursor-pointer">
              Stronger as a team, unstoppable as a force
            </div>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro10);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro10}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div className="text-[#783A35] p-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-8 cursor-pointer">
              Unwavering Commitment
            </div>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro11);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro11}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-black font-bold bg-[#e3cec0ab]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div
              className="relative overflow-hidden mb-8 cursor-pointer"
              onClick={() => {
                setModalOpen(true);
                setModelImage(Pro12);
              }}
            >
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro12}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-black font-bold bg-[#e3cec0ab]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
          </Col>
        </Row>

        <div className="relative flex items-center justify-center">
          <div className="text-[#783A35] text-center mt-8 mb-8">
            View all projects <CaretRightOutlined />
          </div>
          <div
            className="absolute right-0 cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="text-center bg-[#FAF3ED] text-[#783A35] rounded-2xl w-8 h-8 flex justify-center items-center m-auto">
              <UpOutlined />
            </div>
            <div className="text-sm mt-2">Scroll to top</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div>{banner()}</div>
      <div>{banner2()}</div>
      <div>{collapse()}</div>

      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        className="removeFooter"
        width={1000}
      >
        <Row gutter={0} style={{ margin: 0 }} className="items-center">
          <Col lg={12} md={12} sm={24} xs={24}>
            <img
              src={modelImage}
              alt="pro1"
              className="w-full h-full object-cover"
            />
          </Col>
          <Col lg={12} md={12} sm={0} xs={0}>
            <div className="text-center p-6">
              <div>
                <div className="text-[#783A35] text-3xl font-semibold pb-2">
                  Sun Shela one
                </div>
                <div className="text-[#783A35] text-sm font-bold pb-6">
                  Project For
                </div>
                <div className="text-[#783A35] text-3xl font-semibold pb-2">
                  Residential
                </div>
                <div className="text-[#783A35] text-sm font-bold pb-6">
                  Project Type
                </div>
                <div className="text-[#783A35] text-3xl font-semibold pb-2">
                  PT Beam
                </div>
                <div className="text-[#783A35] text-sm font-bold pb-6">
                  Scope Of Work
                </div>
                <div className="text-[#783A35] text-3xl font-semibold pb-2">
                  2000
                </div>
                <div className="text-[#783A35] text-sm font-bold">
                  Square ft.
                </div>
                <div className="text-[#783A35] text-sm font-bold pb-6">
                  Area Covered
                </div>
                <div className="text-[#783A35] text-3xl font-semibold pb-2">
                  1000
                </div>
                <div className="text-[#783A35] text-sm font-bold">
                  Running Meter of P-T
                </div>
                <div className="text-[#783A35] text-sm font-bold pb-6">
                  Cable Installed
                </div>
                <Button className="text-[#783A35] border-[#783A35] hover:!border-[#783A35] hover:!text-[#783A35]">
                  Know More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default ProjectPage;
