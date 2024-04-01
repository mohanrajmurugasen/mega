import React, { useEffect } from "react";
import ContactPage from "../../components/contactPage";
import { useDispatch } from "react-redux";
import { headingChange } from "../../store/features/heading/heading";

const Contact = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headingChange("contact"));
  }, [dispatch]);
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default Contact;
