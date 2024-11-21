import { HashRouter, Route, Routes } from "react-router-dom";
import Detail from "./Page/Detail/Detail";
import Home from "./Page/Home/Home";
import Thema from "./Page/Thema/Thema";
import { TextProvider } from "./Page/TextContext";

const Router = () => {
  return (
    <TextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/detail" element={<Detail></Detail>}></Route>
          <Route path="/thema" element={<Thema></Thema>}></Route>
        </Routes>
      </HashRouter>
    </TextProvider>
  );
};

export default Router;
