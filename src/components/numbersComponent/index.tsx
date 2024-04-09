import { CaretRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import "./index.css";
import Counter from "./counter";

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
          <div>
            <Counter />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Numbers;
