import React, { useEffect } from "react";
import ServicePage from "../../components/servicePage";
import { useDispatch } from "react-redux";
import { headingChange } from "../../store/features/heading/heading";

const Service = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headingChange("services"));
  }, [dispatch]);
  return (
    <div>
      <ServicePage />
    </div>
  );
};

export default Service;
