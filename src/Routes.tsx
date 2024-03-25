import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Service from "./pages/service";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut componentProp={<Home />} />} />
        <Route path="/about" element={<LayOut componentProp={<About />} />} />
        <Route
          path="/project"
          element={<LayOut componentProp={<Project />} />}
        />
        <Route
          path="/contact"
          element={<LayOut componentProp={<Contact />} />}
        />
        <Route
          path="/services"
          element={<LayOut componentProp={<Service />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
