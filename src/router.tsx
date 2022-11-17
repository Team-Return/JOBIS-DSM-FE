import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main";
import SignUp from "./Pages/SignUp";

const Router = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />} />
          {/*404page*/}
          <Route path="*" element="" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
