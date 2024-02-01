import { Col, Divider, Row } from "antd";
import Logo from "../../assets/images/logo.png";
import Foot from "../../assets/images/foot.png";
import { LinkedinOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="bg-[#783A35]">
      <div className="container m-auto p-6">
        <img src={Logo} alt="logo" />
        <Row gutter={16} className="mt-8">
          <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
            <div className="text-base font-semibold text-white mb-2">
              Ahmedabad
            </div>
            <div className="text-sm text-gray-300 mb-6">
              401, S.G. Business Hub, Nr. Gota Bridge, S.G. Highway, Sola,
              Ahmedabad 382481. Gujarat
            </div>
            <div className="text-base font-semibold text-white mb-2">
              Nashik
            </div>
            <div className="text-sm text-gray-300">
              Flat No. 3, Ramrajya Building no 7, Samarthnagar, Nasik 422005,
              Maharashtra
            </div>
          </Col>
          <Col lg={9} md={9} sm={24} xs={24} className="mb-4">
            <div className="text-base font-semibold text-white mb-2">
              Contact Us
            </div>
            <div className="text-sm text-gray-300 mb-1">
              www.megaptsystem.com
            </div>
            <div className="text-sm text-gray-300 mb-1">
              megaptsystem@gmail.com
            </div>
            <div className="text-sm text-gray-300 mb-6">
              +91 97268 82080 / +91 95300 17229
            </div>
            <div className="text-sm text-gray-300 mb-6">
              <LinkedinOutlined /> megapt.linkedin
            </div>
          </Col>
          <Col lg={9} md={9} sm={24} xs={24} className="mb-4">
            <Row gutter={16}>
              <Col lg={8} md={8} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-white mb-2">
                  Services
                </div>
                <div className="text-sm text-gray-300 mb-1">Our Mission</div>
                <div className="text-sm text-gray-300 mb-1">Our Vision</div>
                <div className="text-sm text-gray-300 mb-1">Certifications</div>
              </Col>
              <Col lg={8} md={8} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-white mb-2">
                  PROJECTS
                </div>
                <div className="text-sm text-gray-300 mb-1">Our Mission</div>
                <div className="text-sm text-gray-300 mb-1">Our Vision</div>
                <div className="text-sm text-gray-300 mb-1">Certifications</div>
              </Col>
              <Col lg={8} md={8} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-white mb-2">
                  About
                </div>
                <div className="text-sm text-gray-300 mb-1">Our Mission</div>
                <div className="text-sm text-gray-300 mb-1">Our Vision</div>
                <div className="text-sm text-gray-300 mb-1">Certifications</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Divider className="bg-gray-500 m-0" />
      <div className="h-14 container m-auto pl-6 pr-6 flex justify-between items-center text-white text-sm">
        <div>2023 - Legal Mentions</div>
        <div className="flex items-center">
          <div>
            <img src={Foot} alt="logo" className="mr-3" />
          </div>
          <div>Privacy Policy - Site Map</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
