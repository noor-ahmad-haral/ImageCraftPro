import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/index";
// import Mainlayout from "./layouts/Mainlayout";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  const [active, setActive] = useState(-1);
  // const [data, setData] = useState([]);
  // const navigate = useNavigate();

  const [data, setData] = useState([]);
  // setting active tab

  useEffect(() => {
    // navigate("/");
  }, []); // Empty // Include alarm in the dependency array

  // fetching data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Make a GET request to the /getData endpoint
  //       const response = await axios.get("http://localhost:4000/getData");
  //       setData(response.data);
  //       console.log("response", response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

     
    </Routes>
  );
}

export default App;
