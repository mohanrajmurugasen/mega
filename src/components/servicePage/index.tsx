import { Col, Input, Row, Segmented, Collapse } from "antd";
import type { CollapseProps } from "antd";
import Exports from "../export";
import "./index.css";
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import ServiceBanner from "../../assets/images/serviceBanner.png";
import ServiceSec1 from "../../assets/images/serviceSec1.png";
import ServiceSec2 from "../../assets/images/serviceSec2.png";
import ServiceSec3 from "../../assets/images/serviceSec3.png";
import Service1 from "../../assets/images/service1.png";
import Service2 from "../../assets/images/service2.png";
import Service3 from "../../assets/images/service3.png";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label:
      "What is post-tensioning, and how does it differ from conventional construction methods?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "What are the benefits of post-tensioning in construction?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Is post-tensioning suitable for all types of structures?",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label:
      "How does the Unbonded P-T System contribute to increased flexibility in design?",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label:
      "Is the Monostrand System suitable for both new constructions and retrofitting existing structures?",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "What are the benefits of post-tensioning in construction?",
    children: <p>{text}</p>,
  },
  {
    key: "7",
    label:
      "What are the advantages of using the Bonded Post-Tensioning System?",
    children: <p>{text}</p>,
  },
  {
    key: "8",
    label:
      "How does Bonded Post-Tensioning contribute to sustainability in construction?",
    children: <p>{text}</p>,
  },
];

const ServicePage = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const banner = () => {
    return (
      <div className="banner bg-[#FAF3ED]">
        <Exports color={"black"} bg={"#27272a2e"} />
        <Row gutter={16} style={{ margin: 0 }} className="items-center">
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="p-6">
              <div className="text-[#783A35] text-base mb-3">Our Services</div>
              <div className="text-[#783A35] text-4xl font-medium mb-3">
                Redefining the way structures are built!
              </div>
              <div className="text-[#783A35] text-base mb-3">
                Dedicated to pushing the boundaries of traditional construction.
              </div>
              <div className="mb-2 mt-16">
                Would you like to use our services?
              </div>
              <div className="text-[#783A35]">
                Contact Us <CaretRightOutlined />
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={0} xs={0}>
            <img src={ServiceBanner} alt="ServiceBanner" />
          </Col>
        </Row>
      </div>
    );
  };

  const section1 = () => {
    return (
      <div className="container m-auto p-6">
        <div className="text-3xl font-semibold mb-6 mt-4 text-center">
          Design Solutions at Mega PT
        </div>
        <div>
          <Segmented
            options={[
              "Post tensioning",
              "Unbonded Post-Tensionsing",
              "Bonded Post tensioning  ",
            ]}
            size="large"
            block
          />
        </div>
        <div className="text-[#783a35] mt-12 font-medium text-2xl">
          Post Tensioning Solution
        </div>
        <Row gutter={16} style={{ margin: 0, alignItems: "center" }}>
          <Col lg={12} md={12} sm={24}>
            <div className="mb-6">
              Our Post-Tensioning Design Solutions redefine the way structures
              are built, offering unparalleled strength, flexibility, and
              durability. Post-tensioning is a revolutionary construction
              technique that elevates the strength and durability of concrete
              structures. By strategically placing high-strength steel tendons
              within the concrete and applying tension, we create a synergy that
              enhances the load-bearing capacity and longevity of buildings.
            </div>
            <div>
              Our team of experts is dedicated to pushing the boundaries of
              traditional construction. With a focus on efficiency and
              resilience, we bring you design solutions that not only meet
              industry standards but exceed expectations. Whether you're
              embarking on a new project or seeking to upgrade an existing
              structure, our Post-Tensioning Design Solutions offer a pathway to
              enhanced performance and sustainability.
            </div>
          </Col>
          <Col lg={12} md={12} sm={24}>
            <img src={ServiceSec1} alt="ServiceSec1" />
          </Col>
        </Row>
        <Row gutter={16} style={{ margin: 0 }}>
          <Col lg={12} md={12} sm={24}>
            <Row gutter={16} style={{ margin: 0 }}>
              <Col>
                <div className="flex items-center text-[#783a35]">
                  <img src={Service1} alt="ser1" className="w-14 mr-3" />{" "}
                  Strength
                </div>
              </Col>
              <Col>
                <div className="flex items-center text-[#783a35]">
                  <img src={Service2} alt="ser2" className="w-14 mr-3" />{" "}
                  Flexibility
                </div>
              </Col>
              <Col>
                <div className="flex items-center text-[#783a35]">
                  <img src={Service3} alt="ser3" className="w-14 mr-3" />{" "}
                  Durability
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  };

  const section2 = () => {
    return (
      <div className="bg-[#FAF3ED]">
        <div className="container m-auto p-6">
          <div className="text-[#783a35] mt-12 font-medium text-2xl">
            Unbonded Post-Tensioning Solution
          </div>
          <Row gutter={16} style={{ margin: 0, alignItems: "center" }}>
            <Col lg={12} md={12} sm={24}>
              <img src={ServiceSec2} alt="ServiceSec2" />
            </Col>
            <Col lg={12} md={12} sm={24}>
              <div className="mb-6">
                Designed to elevate the structural strength and efficiency of
                concrete constructions, this system represents a cutting-edge
                approach to modern engineering. The Monostrand Unbonded
                Post-Tensioning System involves the use of high-strength steel
                tendons that are not bonded to the concrete. Instead, a
                protective sheath covers the tendons, offering increased
                flexibility and durability to the structure. This system is
                renowned for its versatility, making it an ideal choice for a
                wide range of applications, from residential buildings to
                bridges and commercial structures.
              </div>
              <div>
                At the heart of our Monostrand Unbonded Post-Tensioning System
                is a commitment to excellence. By seamlessly integrating
                advanced technology with meticulous engineering, we empower
                construction projects with enhanced load-bearing capacities,
                reduced maintenance requirements, and extended service life.
              </div>
            </Col>
          </Row>
          <Row gutter={16} style={{ margin: 0 }}>
            <Col lg={12} md={12} sm={24}></Col>
            <Col lg={12} md={12} sm={24}>
              <Row gutter={16} style={{ margin: 0 }}>
                <Col>
                  <div className="flex items-center text-[#783a35]">
                    <img src={Service1} alt="ser1" className="w-14 mr-3" />{" "}
                    Strength
                  </div>
                </Col>
                <Col>
                  <div className="flex items-center text-[#783a35]">
                    <img src={Service2} alt="ser2" className="w-14 mr-3" />{" "}
                    Flexibility
                  </div>
                </Col>
                <Col>
                  <div className="flex items-center text-[#783a35]">
                    <img src={Service3} alt="ser3" className="w-14 mr-3" />{" "}
                    Durability
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  const section3 = () => {
    return (
      <div>
        <div className="container m-auto p-6">
          <div className="text-[#783a35] mt-12 font-medium text-2xl">
            Bonded Post Tensioning Solution
          </div>
          <Row gutter={16} style={{ margin: 0, alignItems: "center" }}>
            <Col lg={12} md={12} sm={24}>
              <div className="mb-6">
                Bonded Post-Tensioning System is a construction technique that
                involves placing high-strength steel tendons within the concrete
                structure and bonding them together using grout. This meticulous
                process creates a robust synergy between concrete and steel,
                enhancing the load-bearing capacity and longevity of structures.
              </div>
              <div>
                At the core of our Bonded Post-Tensioning System is a dedication
                to pushing the boundaries of traditional construction. This
                innovative method not only meets but exceeds industry standards,
                offering a pathway to resilient, long-lasting buildings. Whether
                you're embarking on a new project or enhancing an existing
                structure, our Bonded Post-Tensioning System is the key to
                achieving structural excellence.
              </div>
            </Col>
            <Col lg={12} md={12} sm={24}>
              <img src={ServiceSec3} alt="ServiceSec3" />
            </Col>
          </Row>
          <Row gutter={16} style={{ margin: 0 }}>
            <Col lg={12} md={12} sm={24}>
              <Row gutter={16} style={{ margin: 0 }}>
                <Col>
                  <div className="flex items-center text-[#783a35]">
                    <img src={Service1} alt="ser1" className="w-14 mr-3" />{" "}
                    Strength
                  </div>
                </Col>
                <Col>
                  <div className="flex items-center text-[#783a35]">
                    <img src={Service2} alt="ser2" className="w-14 mr-3" />{" "}
                    Flexibility
                  </div>
                </Col>
                <Col>
                  <div className="flex items-center text-[#783a35]">
                    <img src={Service3} alt="ser3" className="w-14 mr-3" />{" "}
                    Durability
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  const section4 = () => {
    return (
      <div className="bg-[#783a35]">
        <div className="container m-auto p-6 pt-10 pb-10 text-white">
          <Row gutter={16} style={{ margin: 0 }}>
            <Col lg={12} md={12} sm={24}>
              <div className="mb-2">
                <div className="text-xl mb-2">
                  Would like to use our services?
                </div>
                <div className="text-sm text-white">
                  Constructed over 60+ site all across India.
                </div>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24}>
              <div className="text-end">
                Get in touch <CaretRightOutlined />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  const section5 = () => {
    return (
      <div className="container m-auto p-6 mt-8 mb-6">
        <div className="text-sm font-semibold text-center text-[#783a35] mb-2">
          FAQs
        </div>
        <div className="text-3xl text-center font-semibold mb-4">
          Ask us anything
        </div>
        <div className="text-center mb-4">
          Need something cleared up? Here are our most frequently asked
          questions.
        </div>
        <div className="mb-8" style={{ maxWidth: 300, margin: "auto" }}>
          <Input
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </div>
        <div className="mt-12">
          <Collapse items={items} onChange={onChange} />
        </div>
      </div>
    );
  };

  const section6 = () => {
    return (
      <div className="mt-8 mb-12">
        <div className="container m-auto p-6 pt-10 pb-10 bg-[#FAF3ED] rounded">
          <Row gutter={16} style={{ margin: 0 }}>
            <Col lg={12} md={12} sm={24}>
              <div className="mb-2">
                <div className="text-xl mb-2">Still have questions?</div>
                <div className="text-sm">
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </div>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24}>
              <div className="text-end text-[#783a35]">
                Get in touch <CaretRightOutlined />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{banner()}</div>
      <div>{section1()}</div>
      <div>{section2()}</div>
      <div>{section3()}</div>
      <div>{section4()}</div>
      <div>{section5()}</div>
      <div>{section6()}</div>
    </div>
  );
};

export default ServicePage;
