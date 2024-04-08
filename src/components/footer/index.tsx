import { Col, Divider, Row } from "antd";
import Logo from "../../assets/images/logo.png";
import Foot from "../../assets/images/foot.png";
import F1 from "../../assets/images/f1.png";
import F2 from "../../assets/images/f2.png";
import F3 from "../../assets/images/f3.png";
import F4 from "../../assets/images/f4.png";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { headingChange } from "../../store/features/heading/heading";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="bg-[#FAF3ED] pt-6">
      <div className="container m-auto p-6">
        <Row gutter={32} className="mt-4" style={{ margin: 0 }}>
          <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
            <img src={Logo} alt="logo" className="h-20 mt-1" />
            <div className="text-2xl font-semibold text-black mb-2 mt-8">
              Let’s Talk
            </div>
            <div className="text-sm text-black mb-3">
              Connect with Mega PT and get matched with the ideal solution for
              your needs. Book your appointment now!
            </div>
            <div>
              <a
                href="www.megaptsystem.com"
                className="text-sm text-[#79140d] hover:text-[#79140d] mb-4"
                target="_blank"
              >
                www.megaptsystem.com
              </a>
            </div>
            <div>
              <a
                href="mailto:megaptsystem@gmail.com"
                className="text-sm text-[#79140d] hover:text-[#79140d] mb-2"
              >
                megaptsystem@gmail.com
              </a>
            </div>
            <div className="mt-4">
              <LinkedinFilled
                className="text-2xl text-blue-900 mr-2 cursor-pointer"
                onClick={() => {
                  window.open("www.google.com");
                }}
              />
              <InstagramFilled
                className="text-2xl text-red-500 mr-2 cursor-pointer"
                onClick={() => {
                  window.open("www.google.com");
                }}
              />
              <FacebookFilled
                className="text-2xl text-blue-900 mr-2 cursor-pointer"
                onClick={() => {
                  window.open("www.google.com");
                }}
              />
            </div>
          </Col>
          <Col lg={18} md={18} sm={24} xs={24} className="mb-1">
            <Row gutter={16} style={{ margin: 0 }}>
              <Col lg={4} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-[#79140d] uppercase mb-4">
                  Services
                </div>
                <div
                  className="text-sm text-black mb-1 cursor-pointer"
                  onClick={() => {
                    navigate("/services");
                    dispatch(headingChange("services"));
                  }}
                >
                  Mega PT Design Solutions
                </div>
                <div
                  className="text-sm text-black mb-1 cursor-pointer"
                  onClick={() => {
                    navigate("/services");
                    dispatch(headingChange("services"));
                  }}
                >
                  FAQs
                </div>
              </Col>
              <Col lg={4} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-[#79140d] uppercase mb-4">
                  PROJECTS
                </div>
                <div
                  className="text-sm text-black mb-1 cursor-pointer"
                  onClick={() => {
                    navigate("/project");
                    dispatch(headingChange("project"));
                  }}
                >
                  Project Types
                </div>
                <div
                  className="text-sm text-black mb-1 cursor-pointer"
                  onClick={() => {
                    navigate("/project");
                    dispatch(headingChange("project"));
                  }}
                >
                  Success Stories
                </div>
              </Col>
              <Col lg={4} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-[#79140d] uppercase mb-4">
                  About
                </div>
                <div
                  className="text-sm text-black mb-1 cursor-pointer"
                  onClick={() => {
                    navigate("/about");
                    dispatch(headingChange("about"));
                  }}
                >
                  Who We Are
                </div>
                <div
                  className="text-sm text-black mb-1 cursor-pointer"
                  onClick={() => {
                    navigate("/about");
                    dispatch(headingChange("about"));
                  }}
                >
                  Our Mission
                </div>
                <div
                  className="text-sm text-black mb-1 cursor-pointer"
                  onClick={() => {
                    navigate("/about");
                    dispatch(headingChange("about"));
                  }}
                >
                  Our Vision
                </div>
                <div
                  className="text-sm text-black mb-1 cursor-pointer"
                  onClick={() => {
                    navigate("/about");
                    dispatch(headingChange("about"));
                  }}
                >
                  Certifications
                </div>
              </Col>
              <Col lg={4} md={6} sm={24} xs={24} className="mb-4">
                <div className="text-base font-semibold text-[#79140d] uppercase mb-4">
                  Contact Us
                </div>
                <div
                  className="text-sm text-black mb-1 cursor-pointer"
                  onClick={() => {
                    navigate("/contact");
                    dispatch(headingChange("contact"));
                  }}
                >
                  Contact Form
                </div>
                <div
                  className="text-sm text-black mb-1 cursor-pointer"
                  onClick={() => {
                    navigate("/contact");
                    dispatch(headingChange("contact"));
                  }}
                >
                  Careers
                </div>
              </Col>
            </Row>
            <div className="text-base font-semibold text-[#79140d] uppercase mb-5 ml-2">
              Locate Us Here
            </div>
            <Row gutter={24} style={{ margin: 0 }}>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="flex">
                  <div className="w-20 h-14 mt-1">
                    <img src={F1} alt="f1" className="object-cover" />
                  </div>
                  <div className="ml-2">
                    <div className="text-base font-semibold text-black mb-2">
                      Ahmedabad
                    </div>
                    <div className="text-sm text-black mb-6">
                      401, S.G. Business Hub, Nr. Gota Bridge, S.G. Highway,
                      Sola, Ahmedabad 382481. Gujarat
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="flex">
                  <div className="w-20 h-14 mt-1">
                    <img src={F2} alt="f2" className="object-cover" />
                  </div>
                  <div className="ml-2">
                    <div className="text-base font-semibold text-black mb-2">
                      Nashik
                    </div>
                    <div className="text-sm text-black">
                      Flat No. 3, Ramrajya Building no 7, Samarthnagar, Nasik
                      422005, Maharashtra
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="flex">
                  <div className="w-20 h-14 mt-1">
                    <img src={F3} alt="f3" className="object-cover" />
                  </div>
                  <div className="ml-2">
                    <div className="text-base font-semibold text-black mb-2">
                      JAIPUR
                    </div>
                    <div className="text-sm text-black mb-6">
                      Plot No. E-12, Amrapali Nagar, Gandhi Path West, Dhawas,
                      Jaipur - 302021 + 91 9530017229
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={24} xs={24} className="mb-4">
                <div className="flex">
                  <div className="w-20 h-14 mt-1">
                    <img src={F4} alt="f4" className="object-cover" />
                  </div>
                  <div className="ml-2">
                    <div className="text-base font-semibold text-black mb-2">
                      SURAT
                    </div>
                    <div className="text-sm text-black">
                      M - 28, 2nd Floor, VIP Plaza, VIP road, Near Shyam Baba
                      Mandir, Vesu, Surat - 3959007 + 91 8905999277
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Divider className="bg-gray-500 m-0" />
      <div className="h-14 pl-6 pr-6 flex justify-between items-center text-black text-sm">
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
