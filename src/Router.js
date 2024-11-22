import { HashRouter, Route, Routes } from "react-router-dom";
import Detail from "./Page/Detail/Detail";
import Home from "./Page/Home/Home";
import Thema from "./Page/Thema/Thema";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
        <Route path="/thema" element={<Thema></Thema>}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
