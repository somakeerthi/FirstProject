import logo from "./logo.svg";
import "./App.css";
import { DummyTable } from "./DummyTable";
import "antd/dist/antd.css";
import PostData from "./PostData";
import { UserProvider } from "./UserContext/UserContext";
import { useEffect } from "react";
import Forms from "./Forms";
import { Getusersdata } from "./GetUsersData";
import { AA } from "./AA";
import { HooksExample } from "./ReactHooks/HooksExample";
import UMHook from "./ReactHooks/UMHook";
import CssProject from "./CSSProjects/CssProject";
import Ecommerce from "./CSSProjects/Ecommerce";
import ParentChart from "./Echarts/ParentChart";
import Tick from "./CSSProjects/Tick";
import { ReactLogin } from "./ReactLogin";
import { SignupForm } from "./ReactExample/SignupForm";
import { DashBoard } from "./ReactExample/DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Redirect } from "./ReactExample/Redirect";
import TicketsBooking from "./TicketsBooking";





function App() {
  const names = ["shiva", "keerthi", "sushanth"];
  // const result = names.push("biden");
  // console.log(result);
  // console.log(names)

  return (
    <div>
      {/* <PostData />
      <Forms />
      <Getusersdata />
      <ReactLogin />
      <AA />
      <HooksExample />
      <UMHook />
      <CssProject />
      <Ecommerce />
      <Tick />
      <ParentChart /> */}
      {/* <SignupForm />
      <DashBoard />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/keerthi" element={<DashBoard />} />
          <Route path="/Redirect" element={<Redirect />} />
        </Routes>
      </BrowserRouter> */}
      <TicketsBooking />
      

    </div>
  );
}

export default App;
