import { CaretRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import Counter from "./counter";

const Numbers = () => {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on whether the component is intersecting the viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when at least 50% of the component is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup function to disconnect the observer
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
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
          <div ref={counterRef}>{isVisible && <Counter />}</div>
        </Col>
      </Row>
    </div>
  );
};

export default Numbers;
