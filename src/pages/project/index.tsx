import React, { useEffect } from "react";
import ProjectPage from "../../components/projectPage";
import { useDispatch } from "react-redux";
import { headingChange } from "../../store/features/heading/heading";

const Project = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headingChange("project"));
  }, [dispatch]);
  return (
    <div>
      <ProjectPage />
    </div>
  );
};

export default Project;
