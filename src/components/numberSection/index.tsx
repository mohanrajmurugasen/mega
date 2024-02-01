import { Col, Row } from "antd";
import MyCarousel from "./imageCarousel";

const Features = () => {
  const Feature = ({ title, content, index }: any) => (
    <div key={index} className={`bg-white flex p-4 rounded-lg mt-4`}>
      <div className="text-center">
        <span className="text-6xl font-thin text-[#FAF3ED]">{index}</span>
      </div>
      <div className="ml-2">
        <h3 className="text-2xl font-semibold text-[#783A35] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  );

  return (
    <section className="p-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        Why use Post Tensioning System?
      </h2>
      <Row>
        <Col lg={20} md={20} sm={24} xs={24}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <Feature
              title="Unleash Structural Possibilities"
              content="Our solutions empower structural engineers and architects to explore new heights of creativity. Our systems allow for longer spans, thinner slabs, and more open spaces, enabling visionary designs."
              index="01"
            />
            <Feature
              title="Elevated Sustainability"
              content="By utilizing Mega PT's Post-Tensioning Systems, construction projects have a reduced carbon footprint due to the minimized use of materials and faster construction timelines."
              index="02"
            />
            <Feature
              title="Commercial Opportunities"
              content="Mega PT's unmatched commercial benefits where thinner concrete slabs mean extra floors for rent within the same building height, boosting revenue potential significantly."
              index="03"
            />
            <Feature
              title="Wide Range of Applications"
              content="Mega PT's Post-Tensioning Systems are adaptable to a wide array of projects, from high-rise commercial and residential buildings to sports arenas, institutional and industrial facilities."
              index="04"
            />
          </div>
        </Col>
        <Col lg={4} md={4} sm={24} xs={24}>
          <MyCarousel />
        </Col>
      </Row>
    </section>
  );
};

export default Features;
