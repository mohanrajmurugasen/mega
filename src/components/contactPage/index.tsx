import React, { useState } from "react";
import "./index.css";
import { Col, Row, Input, Radio, Table, Avatar } from "antd";
import type { TableProps } from "antd";
import type { RadioChangeEvent } from "antd";
import {
  AreaChartOutlined,
  ClockCircleFilled,
  DingtalkCircleFilled,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  SearchOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import SearchContact from "../../assets/images/searchContact.png";

interface DataType {
  key: string;
  name: string[];
  age: string;
  address: string;
  tags: string[];
}

const { TextArea } = Input;

const ContactPage = () => {
  const [value, setValue] = useState(3);
  const [filter, setfilter] = useState("Engineering");

  const filterData = ["Design", "Engineering", "HR", "Sales", "Marketing"];

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Job Title",
      dataIndex: "name",
      key: "name",
      render: (_, { name }) => (
        <>
          {name.map((tag, i) => {
            return (
              <div
                key={i}
                className={`${
                  i === 0 ? "text-lg font-semibold" : "text-sm mb-1"
                }`}
              >
                {tag}
              </div>
            );
          })}
          <div>
            <Avatar
              style={{
                backgroundColor: "white",
                verticalAlign: "middle",
                border: "1px solid #783A35",
                color: "black",
              }}
              size="small"
            >
              A
            </Avatar>
            <Avatar
              style={{
                backgroundColor: "white",
                verticalAlign: "middle",
                border: "1px solid #783A35",
                color: "black",
              }}
              size="small"
            >
              A
            </Avatar>
            <Avatar
              style={{
                backgroundColor: "white",
                verticalAlign: "middle",
                border: "1px solid #783A35",
                color: "black",
              }}
              size="small"
            >
              +1
            </Avatar>
          </div>
        </>
      ),
    },
    {
      title: "Location",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Experience",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <div>
          <span className="rounded border-[#783A35] border p-2 pr-4 pl-4 text-[#783A35] font-semibold cursor-pointer">
            Apply Now
          </span>
        </div>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: ["Structural Engineer for PT Design", "B.E. / M.E. (Civil)"],
      age: "Ahmedabad",
      address: "0-5 Years",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: ["Structural Draftsman", "Diploma (Civil)"],
      age: "Ahmedabad",
      address: "0-5 Years",
      tags: ["loser"],
    },
    {
      key: "3",
      name: ["Site Engineer", "Diploma (Civil)"],
      age: "Ahmedabad",
      address: "0-5 Years",
      tags: ["cool", "teacher"],
    },
  ];

  const banner = () => {
    return (
      <div className="bannerContact p-8">
        <div className="container m-auto">
          <Row gutter={16} style={{ margin: 0 }} className="items-center">
            <Col lg={12} md={12} sm={24} xs={24}>
              <div>
                <div className="text-4xl font-semibold text-white mb-3">
                  Experience the difference!
                </div>
                <div className="text-white text-lg mb-6">
                  Achieve exceptional structural strength and durability with
                  our proven post-tensioning methods. Get in touch with us.
                </div>
                <div className="text-white mb-2">
                  Call us at +91 97268 82080 or connect with us on
                </div>
                <div className="text-white text-lg mb-4">
                  <LinkedinOutlined className="mr-4" />
                  <TwitterOutlined className="mr-4" />
                  <InstagramOutlined className="mr-4" />
                  <FacebookOutlined />
                </div>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <div className="bg-[#FCFAF8] p-8 contact rounded-lg">
                <div className="text-lg font-semibold mb-6 text-[#783A35]">
                  Contact Us.
                </div>
                <Input
                  placeholder="Name"
                  className="mb-6 bg-transparent focus:bg-transparent hover:bg-transparent text-[#783A35]"
                />
                <Input
                  placeholder="Company Name"
                  className="mb-6 bg-transparent focus:bg-transparent hover:bg-transparent text-[#783A35]"
                />
                <Input
                  placeholder="Company Email"
                  className="mb-6 bg-transparent focus:bg-transparent hover:bg-transparent text-[#783A35]"
                />
                <Input
                  placeholder="Phone Number"
                  className="mb-6 bg-transparent focus:bg-transparent hover:bg-transparent text-[#783A35]"
                />
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>
                    <div className="text-[#783A35]">Structural Consultant</div>
                  </Radio>
                  <Radio value={2}>
                    <div className="text-[#783A35]">Architect</div>
                  </Radio>
                </Radio.Group>
                <TextArea
                  placeholder="Write your message.."
                  allowClear
                  rows={4}
                  className="mt-6 bg-transparent focus:bg-transparent hover:bg-transparent text-[#783A35] border-[#783a3559]"
                />

                <div className="mt-6 mb-6">
                  <center>
                    <button>Send</button>
                  </center>
                </div>
                <center>
                  <a href="#d" className="cursor-pointer mb-6">
                    Just want to send us a regular email? No problem
                  </a>
                </center>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  const section1 = () => {
    return (
      <div className="bg-[#783A35] p-6 pt-8 text-white">
        <div className="container m-auto">
          <Row gutter={16} style={{ margin: 0 }} className="items-center">
            <Col lg={8} md={8} sm={0}>
              <div className="mb-4">
                <div className="text-3xl font-semibold mb-2">Work with us.</div>
                <div>Unlock your full potential by joining MegaPT.</div>
              </div>
            </Col>
            <Col lg={0} md={0} sm={24}>
              <div className="mb-4 text-center">
                <div className="text-3xl font-semibold mb-2">Work with us.</div>
                <div>Unlock your full potential by joining MegaPT.</div>
              </div>
            </Col>
            <Col lg={16} md={16} sm={24}>
              <Row gutter={16} style={{ margin: 0 }}>
                <Col lg={8} md={8} sm={24}>
                  <div className="text-center mb-4">
                    <div className="text-2xl mb-2">
                      <ClockCircleFilled />
                    </div>
                    <div className="mb-1">Flexible Work Hours</div>
                    <div className="text-xs">
                      We believe empowered schedules lead to happier teams and
                      groundbreaking results.
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={24}>
                  <div className="text-center mb-4">
                    <div className="text-2xl mb-2">
                      <DingtalkCircleFilled />
                    </div>
                    <div className="mb-1">Work Culture</div>
                    <div className="text-xs">
                      We thrive on teamwork and innovation.
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={8} sm={24}>
                  <div className="text-center mb-4">
                    <div className="text-2xl mb-2">
                      <AreaChartOutlined />
                    </div>
                    <div className="mb-1">Personal Growth</div>
                    <div className="text-xs">
                      We nurture personal growth, so your ambitions take flight.
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  const section2 = () => {
    return (
      <div className="p-6">
        <div className="container m-auto mt-6 mb-6">
          <div className="mb-6 text-3xl font-semibold">
            Career Opportunities
          </div>
          <Row gutter={16} style={{ margin: 0 }}>
            <Col lg={12} md={12} sm={24}>
              <div className="mb-3 text-lg font-semibold">
                Find purpose where your efforts stand tall.
              </div>
            </Col>
            <Col lg={12} md={12} sm={24}>
              <div className="flex items-center">
                <div className="border-[#783A35] border p-2 h-8 flex items-center rounded-full mr-3 mb-3 text-[#783A35] cursor-pointer">
                  <SearchOutlined />
                </div>
                <div
                  className="bg-gray-500 h-6 mr-2 mb-3"
                  style={{ width: 2 }}
                ></div>
                <Row gutter={16} style={{ margin: 0 }}>
                  {filterData.map((itm, i) => (
                    <Col key={i}>
                      <div
                        className={`border-[#783A35] border rounded-full pr-3 pl-3 flex items-center h-8 pb-1 mb-3 cursor-pointer ${
                          filter === itm && "text-white bg-[#783A35]"
                        }`}
                        onClick={() => setfilter(itm)}
                      >
                        {itm}
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
          {filter === "Engineering" ? (
            <div className="mt-4">
              <div className="text-gray-400 text-sm mb-4">
                Results (1-3 or 3)
              </div>
              <Table
                columns={columns}
                dataSource={data}
                className="table-striped-rows"
              />
            </div>
          ) : (
            <div className="p-6 pt-12 pb-12">
              <div>
                <center>
                  <img src={SearchContact} alt="search" />
                  <div className="font-medium text-gray-700 mt-3">
                    We're Sorry! No results found. Try search something else
                  </div>
                  <div className="font-semibold mb-2 mt-14">
                    Think you might be a good fit?
                  </div>
                  <div className="text-sm text-gray-500 mb-6">
                    Share your resume with us. We will review it and get back to
                    you shortly.
                  </div>
                  <div>
                    <span className="bg-[#783A35] cursor-pointer text-white rounded p-2 pr-3 pl-3 text-sm">
                      Email Us
                    </span>
                  </div>
                </center>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{banner()}</div>
      <div>{section1()}</div>
      <div>{section2()}</div>
    </div>
  );
};

export default ContactPage;
