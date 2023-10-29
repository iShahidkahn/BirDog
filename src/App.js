
import "./App.css";
import Sidebar from "./componens/constants/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componens/views/Home";
import Welcome from "./componens/views/Welcome";
import HowItWorks from "./componens/views/HowItWorks";
import SignIn from "./componens/views/SignIn";
import SignUp from "./componens/views/SignUp";
import Demo from "./componens/views/Demo";
import MyAccount from "./componens/views/MyAccount";


function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/how_it_works" element={<HowItWorks />} />
          <Route exact path="/sign_in" element={<SignIn />} />
          <Route exact path="/create_account" element={<SignUp />} />
          <Route exact path="/app_demo" element={<Demo />} />
          <Route exact path="/my_account" element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
