import { CaretRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

const Numbers = () => {
  return (
    <div>
      <Row>
        <Col lg={6} md={6} sm={24} xs={24}>
          <h1 className="text-4xl font-semibold mb-6">
            Let these numbers tell you more
          </h1>
          <div className="cursor-pointer text-sm text-[#783A35] mb-6">
            View All Projects <CaretRightOutlined />
          </div>
        </Col>
        <Col lg={18} md={18} sm={24} xs={24}>
          <Row justify="end">
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#FAF3ED] text-[#783A35] m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            ></Col>
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#783A35] text-white m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            >
              <div className="text-center">
                <div>8+</div>
                <div className="text-xs font-light">States Worked In</div>
              </div>
            </Col>
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#E3CEC0] text-[#783A35] m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            ></Col>
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#783A35] text-white m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            >
              <div className="text-center">
                <div>40+</div>
                <div className="text-xs font-light">Cities Worked In</div>
              </div>
            </Col>
          </Row>
          <Row justify="center">
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#783A35] text-white m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            >
              <div className="text-center">
                <div>250+</div>
                <div className="text-xs font-light">
                  No. of Projects Completed
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#FAF3ED] text-[#783A35] m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            ></Col>
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#E3CEC0] text-[#783A35] m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            >
              <div className="text-center">
                <div>2000+</div>
                <div className="text-xs font-light text-black">
                  Running Meters of P-T Cable Installed
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#783A35] text-white m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            ></Col>
          </Row>
          <Row justify="start">
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#783A35] text-white m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            ></Col>
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#E3CEC0] text-[#783A35] m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            >
              <div className="text-center">
                <div>50+</div>
                <div className="text-xs font-light text-black">
                  Structural Engineers & Architects
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#FAF3ED] text-[#783A35] m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            ></Col>
            <Col
              lg={4}
              md={4}
              sm={8}
              xs={8}
              className="bg-[#783A35] text-white m-1 h-24 flex items-center justify-center text-2xl font-semibold p-6"
            >
              <div className="text-center">
                <div>8000+</div>
                <div className="text-xs font-light">Sq. Ft. Area covered</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Numbers;
