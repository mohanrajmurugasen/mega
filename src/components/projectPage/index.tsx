import React from "react";
import Exports from "../export";
import { Col, Row } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
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

const ProjectPage = () => {
  const banner = () => {
    return (
      <div className="banner bg-[#FAF3ED]">
        <Exports color={"black"} bg={"#27272a2e"} />
        <Row gutter={16} style={{ margin: 0 }} className="items-center">
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="p-6">
              <div className="text-[#783A35] text-lg font-medium mb-3">
                Built for Durability and results.
              </div>
              <Row gutter={16} style={{ margin: 0 }}>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <div className="mb-4">
                    <div className="text-4xl font-bold">400,000+</div>
                    <div>Rn. Mtr. of cables installed</div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <div className="mb-4">
                    <div className="text-4xl font-bold">230+</div>
                    <div>Number of Projects</div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <div className="mb-4">
                    <div className="text-4xl font-bold">500+</div>
                    <div>MT of Cable used</div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <div className="mb-4">
                    <div className="text-4xl font-bold">120+</div>
                    <div>Structural Consultants</div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <div className="mb-4">
                    <div className="text-4xl font-bold">80+</div>
                    <div>Architects</div>
                  </div>
                </Col>
              </Row>
              <div className="text-[#783A35]">
                Know More <CaretRightOutlined />
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={0} xs={0}>
            <img src={Map} alt="map" />
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
      <div className="container mx-auto px-4">
        <div className="p-8">
          <div className="text-center text-3xl text-black font-semibold mb-4 mt-4">
            Crafted Solutions
          </div>
          <div className="text-center text-base text-gray-500 font-medium mb-4">
            Explore our game-changing Mega PT solutions that are built to
            endure.
          </div>
        </div>

        <Row gutter={16} style={{ margin: 0 }}>
          <Col lg={8} md={8} sm={12} xs={24}>
            <div className="relative overflow-hidden mb-4">
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
            <div className="relative overflow-hidden mb-4">
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
            <div className="text-[#783A35] pt-5 pb-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-4">
              Precision Engineering
            </div>
            <div className="relative overflow-hidden mb-4">
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
            <div className="relative overflow-hidden mb-4">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro4}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div className="text-[#783A35] pt-5 pb-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-4">
              We are committed to safety and sustainability
            </div>
          </Col>
          <Col lg={8} md={8} sm={12} xs={24}>
            <div className="text-[#783A35] pt-5 pb-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-4">
              Build To Last
            </div>
            <div className="relative overflow-hidden mb-4">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro5}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div className="relative overflow-hidden mb-4">
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
            <div className="relative overflow-hidden mb-4">
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
            <div className="text-[#783A35] pt-5 pb-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-4">
              Rising above, every single time.
            </div>
            <div className="relative overflow-hidden mb-4">
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
            <div className="relative overflow-hidden mb-4">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro9}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div className="text-[#783A35] pt-5 pb-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-4">
              Stronger as a team, unstoppable as a force
            </div>
            <div className="relative overflow-hidden mb-4">
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
            <div className="text-[#783A35] pt-5 pb-5 bg-[#FAF3ED] flex justify-center items-center text-lg font-semibold mb-4">
              Unwavering Commitment
            </div>
            <div className="relative overflow-hidden mb-4">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro11}
                alt="Building 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50 hover:opacity-0"></div>
              <div className="absolute inset-x-0 bottom-0 flex justify-start items-end px-4 py-2 text-white font-bold bg-[#783a35bf]">
                Unbonded Post-Tensioning
                <br />
                Pune
              </div>
            </div>
            <div className="relative overflow-hidden mb-4">
              <img
                className="object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
                src={Pro12}
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
        </Row>

        <div className="text-[#783A35] text-center mt-8 mb-8">
          View all projects <CaretRightOutlined />
        </div>
      </div>
    );
  };
  return (
    <div>
      <div>{banner()}</div>
      <div>{banner2()}</div>
      <div>{collapse()}</div>
    </div>
  );
};

export default ProjectPage;
