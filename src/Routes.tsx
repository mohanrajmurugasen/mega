import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut componentProp={<Home />} />} />
        <Route path="/about" element={<LayOut componentProp={<About />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
