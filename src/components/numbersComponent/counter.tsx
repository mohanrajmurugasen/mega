import { Col, Row, Statistic, StatisticProps } from "antd";
import CountUp from "react-countup";

const formatter: StatisticProps["formatter"] = (value) => (
  <CountUp end={value as number} separator="," />
);

const Counter = () => {
  return (
    <div>
      <Row gutter={8} style={{ margin: 0 }}>
        <Col lg={18} md={18} sm={24}>
          <Row gutter={8} style={{ margin: 0, height: 39 }}>
            <Col lg={24} md={24} sm={24} className="mb-2"></Col>
          </Row>
          <Row gutter={8} style={{ margin: 0 }}>
            <Col lg={12} md={12} sm={24} className="mb-2"></Col>
            <Col lg={6} md={6} sm={12} className="mb-2">
              <div className="bg-[#FAF3ED] h-20 cursor-pointer shakeImg"></div>
            </Col>
            <Col lg={6} md={6} sm={12} className="mb-2">
              <div className="bg-[#783A35] h-20 flex justify-center items-center text-center cursor-pointer shakeImg">
                <div>
                  <div className="text-white text-2xl font-semibold flex justify-center statics4">
                    <Statistic value={8} formatter={formatter} />+
                  </div>
                  <div className="text-xs text-white">States Worked In</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={8} style={{ margin: 0 }}>
            <Col lg={5} md={5} sm={24} className="mb-2"></Col>
            <Col lg={5} md={5} sm={24} className="mb-2">
              <div className="bg-[#E3CEC0] h-24 flex justify-center items-center text-center cursor-pointer shakeImg">
                <div>
                  <div className="text-[#783A35] text-2xl font-semibold flex justify-center statics3">
                    <Statistic value={40} formatter={formatter} />+
                  </div>
                  <div className="text-xs">Cities Worked In</div>
                </div>
              </div>
            </Col>
            <Col lg={5} md={5} sm={24} className="mb-2">
              <div className="bg-[#FAF3ED] h-24 cursor-pointer shakeImg"></div>
            </Col>
            <Col lg={9} md={9} sm={24} className="mb-2">
              <div className="bg-[#E3CEC0] h-24 flex justify-center items-center text-center cursor-pointer shakeImg">
                <div>
                  <div className="text-[#783A35] text-2xl font-semibold flex justify-center statics3">
                    <Statistic value={250} formatter={formatter} />+
                  </div>
                  <div className="text-xs">No. of Projects Completed</div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={6} md={6} sm={24}>
          <div className="bg-[#E3CEC0] h-56 flex justify-center items-center text-center cursor-pointer shakeImg">
            <div>
              <div className="text-[#783A35] text-2xl font-semibold flex justify-center statics3">
                <Statistic value={2000} formatter={formatter} />+
              </div>
              <div className="text-xs">
                Running Meters of P-T Cable Installed
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={8} style={{ margin: 0 }}>
        <Col lg={12} md={12} sm={24} className="mb-2">
          <Row gutter={8} style={{ margin: 0 }}>
            <Col lg={14} md={14} sm={24} className="mb-2">
              <div className="bg-[#FAF3ED] h-28 mb-2 cursor-pointer shakeImg"></div>
              <div className="bg-[#783A35] h-20 w-1/4 float-right cursor-pointer shakeImg"></div>
            </Col>
            <Col lg={10} md={10} sm={24} className="mb-2">
              <div className="bg-[#783A35] h-20 flex justify-center items-center text-center mb-2 cursor-pointer shakeImg">
                <div>
                  <div className="text-white text-2xl font-semibold flex justify-center statics4">
                    <Statistic value={50} formatter={formatter} />+
                  </div>
                  <div className="text-xs text-white">
                    Structural Engineers & Architects
                  </div>
                </div>
              </div>
              <div className="bg-[#E3CEC0] h-28 cursor-pointer shakeImg"></div>
            </Col>
          </Row>
        </Col>
        <Col lg={12} md={12} sm={24} className="mb-2">
          <div
            className="bg-[#FAF3ED] flex justify-center items-center text-center cursor-pointer shakeImg"
            style={{ height: 200 }}
          >
            <div>
              <div className="text-[#783A35] text-2xl font-semibold flex justify-center statics3">
                <Statistic value={8000} formatter={formatter} />+
              </div>
              <div className="text-xs">Sq. Ft. Area covered</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Counter;
