import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import about2 from "../../assets/images/about2.png";
import "./index.css";

const About = () => {
  return (
    <div className="mt-8">
      <div className="bg-[#FAF3ED] p-8">
        <Row gutter={16}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="text-3xl font-semibold mb-5">About Mega PT</div>
            <p className="text-sm text-[#783A35] mt-4">
              Mega PT's strong focus on post-tensioning, that delivers
              innovative solutions that enhance the structural integrity and
              longevity of your construction projects.
            </p>
            <p className="mt-4 mb-4">
              Our team of experienced professionals is committed to delivering
              top-quality services and exceeding customer expectations. We
              understand the challenges faced by builders, structural
              consultants and architects in today's fast-paced construction
              industry. Our mission is to provide innovative designs and
              post-tensioning solutions that not only meet your project's
              requirements but also exceed your expectations.
            </p>
            <p>
              Your trusted partner in creating stronger, more efficient, and
              smarter buildings. We understand the challenges faced by builders,
              structural consultants and architects in today's fast-paced
              construction industry.
            </p>
            <p className="text-sm text-[#783A35] mt-4 cursor-pointer">
              Know More <CaretRightOutlined />
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
        <div className="text-3xl font-semibold mt-14 mb-8">Why Mega PT?</div>
        <Row gutter={16}>
          <Col lg={6} md={8} sm={24} xs={24} className="mb-14">
            <p className="text-base font-semibold text-[#783A35] mb-4 head">
              Innovative Solutions
            </p>
            <p className="text-sm head2">
              We provide post-tensioning expertise to create unique, visually
              striking structures.
            </p>
          </Col>
          <Col lg={6} md={8} sm={24} xs={24} className="mb-14">
            <p className="text-base font-semibold text-[#783A35] mb-4 head">
              Innovative Solutions
            </p>
            <p className="text-sm head2">
              We provide post-tensioning expertise to create unique, visually
              striking structures.
            </p>
          </Col>
          <Col lg={6} md={8} sm={24} xs={24} className="mb-14">
            <p className="text-base font-semibold text-[#783A35] mb-4 head">
              Innovative Solutions
            </p>
            <p className="text-sm head2">
              We provide post-tensioning expertise to create unique, visually
              striking structures.
            </p>
          </Col>
          <Col lg={6} md={8} sm={24} xs={24} className="mb-14">
            <p className="text-base font-semibold text-[#783A35] mb-4 head">
              Innovative Solutions
            </p>
            <p className="text-sm head2">
              We provide post-tensioning expertise to create unique, visually
              striking structures.
            </p>
          </Col>
        </Row>
        <center>
          <Button className="bg-[#783A35] font-semibold text-sm rounded-full text-white">
            See how
          </Button>
        </center>
      </div>
    </div>
  );
};

export default About;
