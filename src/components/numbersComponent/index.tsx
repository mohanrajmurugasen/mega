import { CaretRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import "./index.css";

const Numbers = () => {
  return (
    <div>
      <Row gutter={16} style={{ margin: 0 }}>
        <Col lg={8} md={6} sm={24} xs={24}>
          <h1 className="text-4xl font-semibold mb-6">
            Let these numbers tell you more
          </h1>
          <div className="cursor-pointer text-sm text-[#783A35] mb-6">
            View All Projects <CaretRightOutlined />
          </div>
        </Col>
        <Col lg={16} md={18} sm={24} xs={24}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="grid gap-2">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                </div>
              </div>

              <div className="flip-box min-h-20">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">250+</div>
                        <div>No. of Projects Completed</div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">250+</div>
                        <div>No. of Projects Completed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flip-box min-h-36">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">8+</div>
                        <div>States Worked In</div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">8+</div>
                        <div>States Worked In</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-box min-h-20">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                </div>
              </div>
              <div className="flip-box min-h-36">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">50+</div>
                        <div>Structural Engineers & Architects</div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">50+</div>
                        <div>Structural Engineers & Architects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flip-box min-h-20">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                </div>
              </div>
              <div className="flip-box min-h-36">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">2000+</div>
                        <div>Running Meters of P-T Cable Installed</div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">2000+</div>
                        <div>Running Meters of P-T Cable Installed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-box min-h-20">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flip-box min-h-36">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">40+</div>
                        <div>Cities Worked In</div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">40+</div>
                        <div>Cities Worked In</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-box min-h-20">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate"></div>
                  </div>
                </div>
              </div>
              <div className="flip-box min-h-36">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <div className="bg-[#783A35] text-[#FAF3ED] flex justify-center items-center text-center cursor-pointer h-full w-full pl-6 pr-6 boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">8000+</div>
                        <div>Sq. Ft. Area covered</div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="bg-[#FAF3ED] text-[#783A35] flex justify-center items-center text-center cursor-pointer h-full w-full boxAnimate">
                      <div>
                        <div className="text-2xl font-semibold">8000+</div>
                        <div>Sq. Ft. Area covered</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Numbers;
