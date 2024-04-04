import React from "react";
import "./index.css";
import "../about/index.css";
import groupImg from "../../assets/images/discuss.png";
import { Col, Row } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import frame4 from "../../assets/images/Frame4.png";
import frame5 from "../../assets/images/Frame5.png";
import frame6 from "../../assets/images/Frame6.png";
import about2 from "../../assets/images/ISO.png";
import ExportAbout from "../export/exportAbout";

const AboutPage = () => {
  const banner = () => {
    return (
      <div className="banner bg-[#783A35]">
        <ExportAbout color={"#ffffffbf"} bg={"#27272a2e"} />
        <div
          className="container m-auto flex items-center"
          style={{ minHeight: 400 }}
        >
          <Row gutter={16} style={{ margin: 0 }} className="items-center">
            <Col lg={12} md={12} sm={24} xs={24}>
              <div className="leftContent pl-6 pr-6 pt-6 pb-6">
                <div className="text-[#ffffffbf] text-base mb-4">
                  We believe in,
                </div>
                <div className="text-white mb-4 text-4xl font-semibold two">
                  Building Your Vision with Precision{" "}
                </div>
                <div className="text-[#ffffffbf] text-base mb-4">
                  We're dedicated to quality! Mega PT is ISO 9001:2015 certified
                </div>
                <button>Get In Touch</button>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <img src={groupImg} alt="banner" />
            </Col>
          </Row>
        </div>
      </div>
    );
  };
  const section2 = () => {
    return (
      <div className="section2">
        <div className="bg-[#fffffff5]">
          <Row style={{ margin: 0 }}>
            <Col lg={8} md={8} sm={0} xs={0}>
              <div className="one h-full relative">
                <div className="p-8 flex justify-center">
                  <div>
                    <div className="text-[#290E0C] text-3xl font-semibold mb-3">
                      Who We Are
                    </div>
                    <div className="text-[#783A35] text-base">
                      Know More <CaretRightOutlined />
                    </div>
                  </div>
                </div>
                <CaretLeftOutlined
                  className="text-[#FAF3ED] text-7xl absolute right-0 top-1/3"
                  style={{ marginRight: "-22px" }}
                />
              </div>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div className="one h-full relative">
                <div className="p-8 flex justify-center">
                  <div>
                    <div className="text-[#290E0C] text-3xl font-semibold mb-3">
                      Who We Are
                    </div>
                    <div className="text-[#783A35] text-base">
                      Know More <CaretRightOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={16} md={16} sm={24} xs={24}>
              <div className="flex">
                {/* <CaretLeftOutlined
                  className="text-[#FAF3ED] text-7xl"
                  style={{ marginRight: "-22px" }}
                /> */}
                <div className="bg-[#FAF3ED] p-8 w-full">
                  <div className="text-[#783A35] text-base font-semibold mb-2">
                    Welcome to Mega Post Tension System (Mega PT){" "}
                  </div>
                  <div className="mb-6 text-base">
                    Mega PT provides cutting-edge solutions for post-tensioned
                    concrete applications like PT Slabs and PT Beams go beyond
                    traditional construction methods, revolutionising the way
                    structures are built and enhancing their durability,
                    flexibility, and sustainability. We are your trusted partner
                    in creating stronger, more efficient, and smarter buildings
                    that stand the test of time. The experience and expertise
                    gained from working on various types of have enabled us to
                    deliver prompt and effective solutions. The company uses the
                    latest design software which is continually updated to
                    adhere current international construction codes of practice.
                  </div>
                  <div className="text-base">
                    Our systems allow structural engineers and architects to
                    create longer spans, unique shapes, and larger open spaces,
                    giving you the creative freedom to design iconic structures
                    that captivate the eye and inspire the imagination. Our
                    specialists help them to determine the most appropriate
                    option for their specific project requirements at early
                    design stage using extensive value engineering.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ margin: 0 }}>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div className="two">
                <div className="p-8 flex justify-start">
                  <div>
                    <div className="text-[#290E0C] text-3xl font-semibold mb-3">
                      Our Mission
                    </div>
                    <div className="text-[#783A35] text-base">
                      Know More <CaretRightOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
              <div className="flex">
                <div className="bg-[#FAF3ED] p-8 w-full min-h-40 flex items-center">
                  <div className="text-[#783A35] text-base font-semibold">
                    To become the performed supplier for engineering services
                    and integrated solutions to our valued customers in the
                    diversified market segments.
                  </div>
                </div>
                {/* <CaretRightOutlined
                  className="text-[#FAF3ED] text-7xl"
                  style={{ marginLeft: "-22px" }}
                /> */}
              </div>
            </Col>
            <Col lg={16} md={16} sm={0} xs={0}>
              <div className="two h-full relative">
                <div className="p-8 flex justify-start">
                  <div>
                    <div className="text-[#290E0C] text-3xl font-semibold mb-3">
                      Our Mission
                    </div>
                    <div className="text-[#783A35] text-base">
                      Know More <CaretRightOutlined />
                    </div>
                  </div>
                </div>
                <CaretRightOutlined
                  className="text-[#FAF3ED] text-7xl absolute left-0 top-1/3"
                  style={{ marginLeft: "-22px" }}
                />
              </div>
            </Col>
          </Row>
          <Row style={{ margin: 0 }}>
            <Col lg={8} md={8} sm={0} xs={0}>
              <div className="three h-full relative">
                <div className="p-8 flex justify-center bg-[#fffffff2]">
                  <div>
                    <div className="text-[#290E0C] text-3xl font-semibold mb-3">
                      Our Vission
                    </div>
                    <div className="text-[#783A35] text-base">
                      Know More <CaretRightOutlined />
                    </div>
                  </div>
                </div>
                <CaretLeftOutlined
                  className="text-[#FAF3ED] text-7xl absolute right-0 top-1/3"
                  style={{ marginRight: "-22px" }}
                />
              </div>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div className="three h-full relative">
                <div className="p-8 flex justify-center bg-[#fffffff2]">
                  <div>
                    <div className="text-[#290E0C] text-3xl font-semibold mb-3">
                      Our Vission
                    </div>
                    <div className="text-[#783A35] text-base">
                      Know More <CaretRightOutlined />
                    </div>
                  </div>
                </div>
                0
              </div>
            </Col>
            <Col lg={16} md={16} sm={24} xs={24}>
              <div className="flex">
                {/* <CaretLeftOutlined
                  className="text-[#FAF3ED] text-7xl"
                  style={{ marginRight: "-22px" }}
                /> */}
                <div className="bg-[#FAF3ED] p-8 w-full min-h-40 flex items-center">
                  <div className="text-[#783A35] text-base font-semibold">
                    To become leading organization, with providing through
                    innovative solution to the construction field. Our pledge is
                    to establish lasting relationships with our customers by
                    exceeding their expectations and gaining their trust through
                    exceptional performance.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
  const section3 = () => {
    return (
      <div className="section3 container m-auto p-6">
        <div className="text-3xl font-semibold text-[#290E0C] mb-12 mt-8">
          Key Benefits for Our Clients:
        </div>
        <Row gutter={16} style={{ margin: 0 }}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="flex items-center mb-10">
              <div className="bg-[#F2E6DD] p-4 rounded mr-6">
                <img src={frame4} alt="frame" className="w-full" />
              </div>
              <div className="max-w-72">
                <div className="text-[#290E0C] font-semibold text-xl">
                  Advanced Headroom Issue Resolution
                </div>
                <div>
                  We proactively tackle headroom challenges to ensure a smooth
                  progression
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="flex items-center mb-10">
              <div className="bg-[#F2E6DD] p-4 rounded mr-6">
                <img src={frame4} alt="frame" className="w-full" />
              </div>
              <div className="max-w-72">
                <div className="text-[#290E0C] font-semibold text-xl">
                  Early Understanding of Formwork Complexity
                </div>
                <div>
                  We gain insights into formwork intricacies in the early
                  stages.
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="flex items-center mb-10">
              <div className="bg-[#F2E6DD] p-4 rounded mr-6">
                <img src={frame5} alt="frame" className="w-full" />
              </div>
              <div className="max-w-72">
                <div className="text-[#290E0C] font-semibold text-xl">
                  Accurate Cost Estimation
                </div>
                <div>
                  Accurate assessing steel tonnage, concrete volume and
                  post-tensioning expenses.
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="flex items-center mb-10">
              <div className="bg-[#F2E6DD] p-4 rounded mr-6">
                <img src={frame6} alt="frame" className="w-full" />
              </div>
              <div className="max-w-72">
                <div className="text-[#290E0C] font-semibold text-xl">
                  Flexible Room/Floor Layout
                </div>
                <div>
                  Achieve enhanced flexibility in room and floor usage layouts
                  for adaptable project evolution.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
  const section4 = () => {
    return (
      <div className="bg-[#FAF3ED] ISO">
        <div className="container m-auto">
          <Row gutter={0} className="items-center" style={{ margin: 0 }}>
            <Col
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className="pl-6 pr-6 pt-10 pb-10"
            >
              <div className="text-3xl font-bold mb-5">
                We are ISO Certified!
              </div>
              <p className="text-base mt-4">
                We proudly hold an ISO certification, a testament to our
                commitments, quality and excellence. This certification
                underscores Mega PT's adherence to international standards,
                ensuring that its construction practices meet rigorous criteria
                for efficiency, safety, and overall project success.
              </p>
              <p className="text-base text-[#783A35] mt-4 cursor-pointer">
                Enquire Now <CaretRightOutlined />
              </p>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <div>
                <img src={about2} alt="about2" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
  const section5 = () => {
    return (
      <div className="text-center p-16">
        <div className="text-4xl font-normal mb-3">
          Elevate your construction experience with
        </div>
        <div className="text-4xl font-semibold text-[#783A35] mb-3">
          MEGA POST TENSION SYSTEM
        </div>
        <div>
          Let's discuss how we can optimise your project{" "}
          <CaretRightOutlined className="text-[#783A35]" />
        </div>
      </div>
    );
  };
  return (
    <div className="aboutSection">
      <div>{banner()}</div>
      <div>{section2()}</div>
      <div>{section3()}</div>
      <div>{section4()}</div>
      <div>{section5()}</div>
    </div>
  );
};

export default AboutPage;
