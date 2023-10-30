
import "./App.css";
import Sidebar from "./components/constants/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Welcome from "./components/screens/Welcome";
import HowItWorks from "./components/screens/HowItWorks";
import SignIn from "./components/screens/SignIn";
import SignUp from "./components/screens/SignUp";
import Demo from "./components/screens/Demo";
import MyAccount from "./components/screens/MyAccount";


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
