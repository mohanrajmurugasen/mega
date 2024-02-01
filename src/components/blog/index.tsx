import {
  CaretDownOutlined,
  CaretRightOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import post from "../../assets/images/post.png";
import case1 from "../../assets/images/case1.png";
import case2 from "../../assets/images/case2.png";
import case3 from "../../assets/images/case3.png";
import PostTensioningSection from "../numberSection";
import About from "../about";
import Numbers from "../numbersComponent";

const Blog = () => {
  const list = [
    { head: "1000", foot: "Running Meter of P-T Cable installed" },
    { head: "PT Beam", foot: "Scope Of Work" },
    { head: "Sun Shela One", foot: "Project For" },
    { head: "Residential", foot: "Project Type" },
    { head: "2000", foot: "Square Ft. Area Covered" },
  ];
  return (
    <div className="container m-auto">
      <div>
        <Row className="justify-center">
          {list.map((itm, i) => (
            <Col key={i}>
              <div
                className={`text-center border h-36 flex items-center justify-center max-w-60 ${
                  i === 0 && "rounded-s-2xl"
                } ${i === 4 && "rounded-e-2xl"} ${
                  i === 2 ? "bg-[#783A35]" : "bg-white"
                }`}
                style={{ width: 238 }}
              >
                <div>
                  <div
                    className={`text-2xl font-semibold ${
                      i === 2 ? "text-white" : "text-[#783A35]"
                    } pt-6 pl-6 pr-6`}
                  >
                    {itm.head}
                  </div>
                  <p
                    className={`pt-3 pl-6 pr-6 pb-6 ${
                      i === 2 ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {itm.foot}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="mt-16 mb-6">
        <div className="text-center text-4xl font-semibold text-[#783A35] mb-4">
          Post Tensioning System
        </div>
        <Row gutter={16} className="justify-center p-6">
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="bg-[#FAF3ED] mb-0">
              <div className="p-8">
                <div className="text-[#783A35] text-lg font-semibold">
                  Unbonded Post-Tensioning
                </div>
                <ul className="text-sm list-disc mt-4">
                  <li className="mb-3">
                    Unbonded post-tensioning strengthens concrete structures by
                    employing a protective sheath or duct for steel tendons,
                    ensuring durability and strength.{" "}
                  </li>
                  <li className="mb-3">
                    Unlike bonded post-tensioning, which relies on bonding the
                    tendons to the surrounding concrete, unbonded
                    post-tensioning utilises a sheath or duct to protect the
                    steel tendons.{" "}
                  </li>
                  <li className="mb-3">
                    This technique offers several advantages, including improved
                    corrosion protection, enhanced flexibility, and simplified
                    maintenance.
                  </li>
                </ul>
                <div className="text-sm text-[#783A35] cursor-pointer">
                  Know More <CaretRightOutlined />
                </div>
              </div>
            </div>
            <CaretDownOutlined
              className="text-5xl"
              style={{ marginTop: "-14px", color: "#faf3ed", float: "right" }}
            />
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div className="bg-[#FAF3ED] mb-0">
              <img
                src={post}
                alt="post"
                className="object-cover w-full"
                style={{ height: 140 }}
              />
              <div
                className="text-4xl text-[#FAF3ED]"
                style={{ marginTop: "-29px" }}
              >
                <CaretUpOutlined />
              </div>
              <div className="p-8">
                <div className="text-[#783A35] text-lg font-semibold">
                  Unbonded Post-Tensioning
                </div>
                <div className="text-sm mt-4">
                  Bonded post-tensioning is a construction technique reinforcing
                  concrete structures. It involves inserting high-strength steel
                  tendons into the concrete, bonding them with grout.
                </div>
              </div>
            </div>
            <CaretDownOutlined
              className="text-5xl"
              style={{ marginTop: "-14px", color: "#783A35", float: "right" }}
            />
          </Col>
        </Row>
      </div>
      <div className="mb-10">
        <PostTensioningSection />
      </div>
      <div className="p-6 mb-10">
        <About />
      </div>
      <div className="p-6 mb-14">
        <Numbers />
      </div>
      <div className="p-6 mb-10">
        <div className="text-4xl font-semibold mb-6">Case Studies</div>
        <Row gutter={16} className="justify-center">
          <Col lg={8} md={8} sm={24} xs={24} className="mb-4">
            <div className="rounded-t-2xl border">
              <img
                src={case1}
                alt="post"
                className="object-cover w-full rounded-t-2xl"
                style={{ height: 250 }}
              />
              <div
                className="text-4xl text-white"
                style={{ marginTop: "-29px" }}
              >
                <CaretUpOutlined />
              </div>
              <div className="p-8">
                <div className="text-[#783A35] text-lg font-semibold">
                  Dealing with Design Changes
                </div>
                <div className="text-sm mt-4">
                  Unbonded post-tensioning strengthens concrete structures by
                  employing a protective sheath.
                </div>
                <div className="text-sm text-[#783A35] cursor-pointer mt-6">
                  Read More <CaretRightOutlined />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24} className="mb-4">
            <div className="rounded-t-2xl border">
              <img
                src={case2}
                alt="post"
                className="object-cover w-full rounded-t-2xl"
                style={{ height: 250 }}
              />
              <div
                className="text-4xl text-white"
                style={{ marginTop: "-29px" }}
              >
                <CaretUpOutlined />
              </div>
              <div className="p-8">
                <div className="text-[#783A35] text-lg font-semibold">
                  Dealing with Design Changes
                </div>
                <div className="text-sm mt-4">
                  Unbonded post-tensioning strengthens concrete structures by
                  employing a protective sheath.
                </div>
                <div className="text-sm text-[#783A35] cursor-pointer mt-6">
                  Read More <CaretRightOutlined />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24} className="mb-4">
            <div className="rounded-t-2xl border">
              <img
                src={case3}
                alt="post"
                className="object-cover w-full rounded-t-2xl"
                style={{ height: 250 }}
              />
              <div
                className="text-4xl text-white"
                style={{ marginTop: "-29px" }}
              >
                <CaretUpOutlined />
              </div>
              <div className="p-8">
                <div className="text-[#783A35] text-lg font-semibold">
                  Dealing with Design Changes
                </div>
                <div className="text-sm mt-4">
                  Unbonded post-tensioning strengthens concrete structures by
                  employing a protective sheath.
                </div>
                <div className="text-sm text-[#783A35] cursor-pointer mt-6">
                  Read More <CaretRightOutlined />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Blog;
