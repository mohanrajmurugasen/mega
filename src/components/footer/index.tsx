import { Col, Divider, Row } from "antd";
import Logo from "../../assets/images/logo.png";
import Foot from "../../assets/images/foot.png";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="bg-[#FAF3ED]">
      <div className="container m-auto p-6">
        <Row gutter={16} className="mt-4">
          <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
            <img src={Logo} alt="logo" className="h-20" />
            <div className="text-2xl font-semibold text-black mb-2 mt-4">
              Let’s Talk
            </div>
            <div className="text-sm text-black mb-3">
              Connect with Mega PT and get matched with the ideal solution for
              your needs. Book your appointment now!
            </div>
            <div className="text-sm text-[#79140d] mb-2">
              www.megaptsystem.com
            </div>
            <div className="text-sm text-[#79140d] mb-2">
              megaptsystem@gmail.com
            </div>
            <div className="mt-4">
              <LinkedinFilled className="text-2xl text-blue-900 mr-2" />
              <InstagramFilled className="text-2xl text-red-500 mr-2" />
              <FacebookFilled className="text-2xl text-blue-900 mr-2" />
            </div>
          </Col>
          <Col lg={18} md={18} sm={24} xs={24} className="mb-4">
            <Row>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-[#79140d] uppercase mb-2">
                  Services
                </div>
                <div className="text-sm text-black mb-1">
                  Mega PT Design Solutions
                </div>
                <div className="text-sm text-black mb-1">FAQs</div>
              </Col>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-[#79140d] uppercase mb-2">
                  PROJECTS
                </div>
                <div className="text-sm text-black mb-1">Project Types</div>
                <div className="text-sm text-black mb-1">Success Stories</div>
              </Col>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-[#79140d] uppercase mb-2">
                  About
                </div>
                <div className="text-sm text-black mb-1">Who We Are</div>
                <div className="text-sm text-black mb-1">Our Mission</div>
                <div className="text-sm text-black mb-1">Our Vision</div>
                <div className="text-sm text-black mb-1">Certifications</div>
              </Col>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-[#79140d] uppercase mb-2">
                  Contact Us
                </div>
                <div className="text-sm text-black mb-1">Contact Form</div>
                <div className="text-sm text-black mb-1">Careers</div>
              </Col>
            </Row>
            <div className="text-base font-semibold text-[#79140d] uppercase mb-2">
              Locate Us Here
            </div>
            <Row gutter={16}>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-black mb-2">
                  Ahmedabad
                </div>
                <div className="text-sm text-black mb-6">
                  401, S.G. Business Hub, Nr. Gota Bridge, S.G. Highway, Sola,
                  Ahmedabad 382481. Gujarat
                </div>
              </Col>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-black mb-2">
                  Nashik
                </div>
                <div className="text-sm text-black">
                  Flat No. 3, Ramrajya Building no 7, Samarthnagar, Nasik
                  422005, Maharashtra
                </div>
              </Col>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-black mb-2">
                  JAIPUR
                </div>
                <div className="text-sm text-black mb-6">
                  Plot No. E-12, Amrapali Nagar, Gandhi Path West, Dhawas,
                  Jaipur - 302021 + 91 9530017229
                </div>
              </Col>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-black mb-2">
                  SURAT
                </div>
                <div className="text-sm text-black">
                  M - 28, 2nd Floor, VIP Plaza, VIP road, Near Shyam Baba
                  Mandir, Vesu, Surat - 3959007 + 91 8905999277
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Divider className="bg-gray-500 m-0" />
      <div className="h-14 container m-auto pl-6 pr-6 flex justify-between items-center text-black text-sm">
        <div>2024 - Legal Mentions</div>
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
