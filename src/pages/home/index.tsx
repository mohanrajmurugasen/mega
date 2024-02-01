import React from "react";
import Banner from "../../components/banner";
import Blog from "../../components/blog";

const Home = () => {
  return (
    <div>
      <Banner />
      <div style={{ marginTop: "-60px" }}>
        <Blog />
      </div>
    </div>
  );
};

export default Home;
