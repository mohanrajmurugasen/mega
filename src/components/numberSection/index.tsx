import { Col, Row } from "antd";
import MyCarousel from "./imageCarousel";
import "./index.css";

const Features = () => {
  return (
    <section className="pt-8 pb-8 features">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        Why use Post Tensioning System?
      </h2>
      <Row gutter={16} style={{ margin: 0 }}>
        <Col lg={19} md={17} sm={24} xs={24}>
          <Row gutter={16} style={{ margin: 0 }}>
            <Col lg={12} md={12} sm={24} xs={24}>
              <div className={`bg-white flex p-4 rounded-lg mt-4 toping`}>
                <div className="text-center">
                  <span className="text-6xl font-thin text-[#FAF3ED]">01</span>
                </div>
                <div className="ml-2">
                  <h3 className="text-2xl font-semibold text-[#783A35] mb-2">
                    Unleash Structural Possibilities
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our solutions empower structural engineers and architects to
                    explore new heights of creativity. Our systems allow for
                    longer spans, thinner slabs, and more open spaces, enabling
                    visionary designs.
                  </p>
                </div>
              </div>
              <div className={`bg-white flex p-4 rounded-lg mt-4 toping`}>
                <div className="text-center">
                  <span className="text-6xl font-thin text-[#FAF3ED]">03</span>
                </div>
                <div className="ml-2">
                  <h3 className="text-2xl font-semibold text-[#783A35] mb-2">
                    Commercial Opportunities
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Mega PT's unmatched commercial benefits where thinner
                    concrete slabs mean extra floors for rent within the same
                    building height, boosting revenue potential significantly.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24} className="toping">
              <div className={`bg-white flex p-4 rounded-lg mt-4 toping`}>
                <div className="text-center">
                  <span className="text-6xl font-thin text-[#FAF3ED]">02</span>
                </div>
                <div className="ml-2">
                  <h3 className="text-2xl font-semibold text-[#783A35] mb-2">
                    Elevated Sustainability
                  </h3>
                  <p className="text-gray-600 text-sm">
                    By utilizing Mega PT's Post-Tensioning Systems, construction
                    projects have a reduced carbon footprint due to the
                    minimized use of materials and faster construction
                    timelines.
                  </p>
                </div>
              </div>
              <div className={`bg-white flex p-4 rounded-lg mt-4 toping`}>
                <div className="text-center">
                  <span className="text-6xl font-thin text-[#FAF3ED]">04</span>
                </div>
                <div className="ml-2">
                  <h3 className="text-2xl font-semibold text-[#783A35] mb-2">
                    Wide Range of Applications
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Mega PT's Post-Tensioning Systems are adaptable to a wide
                    array of projects, from high-rise commercial and residential
                    buildings to sports arenas, institutional and industrial
                    facilities.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={5} md={7} sm={24} xs={24}>
          <MyCarousel />
        </Col>
      </Row>
    </section>
  );
};

export default Features;
