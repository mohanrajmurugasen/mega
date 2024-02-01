import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./pages/layout";
import Home from "./pages/home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut componentProp={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
