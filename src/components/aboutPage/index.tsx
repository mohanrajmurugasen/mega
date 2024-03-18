import React from "react";
import "./index.css";
import "../about/index.css";
import groupImg from "../../assets/images/discuss.png";
import Exports from "../export";
import { Col, Row } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import frame4 from "../../assets/images/Frame4.png";
import frame5 from "../../assets/images/Frame5.png";
import frame6 from "../../assets/images/Frame6.png";
import about2 from "../../assets/images/ISO.png";

const AboutPage = () => {
  const banner = () => {
    return (
      <div className="banner bg-[#783A35]">
        <Exports />
        <div className="container m-auto">
          <div className="flex justify-between items-center">
            <div className="leftContent">
              <div className="text-[#ffffffbf] mb-4">We believe in,</div>
              <div className="text-white mb-4 text-4xl font-semibold two">
                Building Your Vision with Precision{" "}
              </div>
              <div className="text-[#ffffffbf] mb-4">
                We're dedicated to quality! Mega PT is ISO 9001:2015 certified
              </div>
              <button>Get In Touch</button>
            </div>
            <img src={groupImg} alt="banner" />
          </div>
        </div>
      </div>
    );
  };
  const section2 = () => {
    return (
      <div className="section2">
        <Row style={{ margin: 0 }}>
          <Col lg={10} md={10} sm={24} xs={24}>
            <div className="one">
              <div className="p-8 flex justify-center bg-[#fffffff2]">
                <div>
                  <div className="text-[#290E0C] text-3xl font-semibold mb-3">
                    Who We Are
                  </div>
                  <div className="text-[#783A35]">
                    Know More <CaretRightOutlined />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={14} md={14} sm={24} xs={24}>
            <div className="flex">
              <CaretLeftOutlined
                className="text-[#FAF3ED] text-7xl"
                style={{ marginRight: "-22px" }}
              />
              <div className="bg-[#FAF3ED] p-8 w-full">
                <div className="text-[#783A35] font-semibold mb-2">
                  Welcome to Mega Post Tension System (Mega PT){" "}
                </div>
                <div className="mb-6">
                  Mega PT provides cutting-edge solutions for post-tensioned
                  concrete applications like PT Slabs and PT Beams go beyond
                  traditional construction methods, revolutionising the way
                  structures are built and enhancing their durability,
                  flexibility, and sustainability. We are your trusted partner
                  in creating stronger, more efficient, and smarter buildings
                  that stand the test of time. The experience and expertise
                  gained from working on various types of have enabled us to
                  deliver prompt and effective solutions. The company uses the
                  latest design software which is continually updated to adhere
                  current international construction codes of practice.
                </div>
                <div>
                  Our systems allow structural engineers and architects to
                  create longer spans, unique shapes, and larger open spaces,
                  giving you the creative freedom to design iconic structures
                  that captivate the eye and inspire the imagination. Our
                  specialists help them to determine the most appropriate option
                  for their specific project requirements at early design stage
                  using extensive value engineering.
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ margin: 0 }}>
          <Col lg={0} md={0} sm={24} xs={24}>
            <div className="two">
              <div className="p-8 flex justify-start bg-[#fffffff2]">
                <div>
                  <div className="text-[#290E0C] text-3xl font-semibold mb-3">
                    Our Mission
                  </div>
                  <div className="text-[#783A35]">
                    Know More <CaretRightOutlined />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={11} md={11} sm={24} xs={24}>
            <div className="flex">
              <div className="bg-[#FAF3ED] p-8 w-full">
                <div className="text-[#783A35] font-semibold">
                  To become the performed supplier for engineering services and
                  integrated solutions to our valued customers in the
                  diversified market segments.
                </div>
              </div>
              <CaretRightOutlined
                className="text-[#FAF3ED] text-7xl"
                style={{ marginLeft: "-22px" }}
              />
            </div>
          </Col>
          <Col lg={13} md={13} sm={0} xs={0}>
            <div className="two">
              <div className="p-8 flex justify-start bg-[#fffffff2]">
                <div>
                  <div className="text-[#290E0C] text-3xl font-semibold mb-3">
                    Our Mission
                  </div>
                  <div className="text-[#783A35]">
                    Know More <CaretRightOutlined />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ margin: 0 }}>
          <Col lg={10} md={10} sm={24} xs={24}>
            <div className="three">
              <div className="p-8 flex justify-center bg-[#fffffff2]">
                <div>
                  <div className="text-[#290E0C] text-3xl font-semibold mb-3">
                    Our Vission
                  </div>
                  <div className="text-[#783A35]">
                    Know More <CaretRightOutlined />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={14} md={14} sm={24} xs={24}>
            <div className="flex">
              <CaretLeftOutlined
                className="text-[#FAF3ED] text-7xl"
                style={{ marginRight: "-22px" }}
              />
              <div className="bg-[#FAF3ED] p-8 w-full">
                <div className="text-[#783A35] font-semibold">
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
      <div>
        <div className="bg-[#FAF3ED] p-10">
          <Row gutter={16} className="items-center">
            <Col lg={12} md={12} sm={24} xs={24}>
              <div className="text-3xl font-bold mb-5">
                We are ISO Certified!
              </div>
              <p className="text-sm mt-4">
                We proudly hold an ISO certification, a testament to our
                commitments, quality and excellence. This certification
                underscores Mega PT's adherence to international standards,
                ensuring that its construction practices meet rigorous criteria
                for efficiency, safety, and overall project success.
              </p>
              <p className="text-sm text-[#783A35] mt-4 cursor-pointer">
                Enquire Now <CaretRightOutlined />
              </p>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <div className="about1">
                <img src={about2} alt="about2" className="about2" />
              </div>
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <div className="about1">
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
      <div className="container m-auto text-center p-16">
        <div className="text-3xl font-medium mb-3">
          Elevate your construction experience with
        </div>
        <div className="text-3xl font-medium text-[#783A35] mb-3">
          MEGA POST TENSION SYSTEM
        </div>
        <div className="text-[#783A35]">
          Let's discuss how we can optimise your project <CaretRightOutlined />
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
