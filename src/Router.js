import { HashRouter, Route, Routes } from "react-router-dom";
import Detail from "./Page/Detail/Detail";
import Home from "./Page/Home/Home";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
