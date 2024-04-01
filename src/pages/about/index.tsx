import React, { useEffect } from "react";
import AboutPage from "../../components/aboutPage";
import { useDispatch } from "react-redux";
import { headingChange } from "../../store/features/heading/heading";

const About: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headingChange("about"));
  }, [dispatch]);
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default About;
