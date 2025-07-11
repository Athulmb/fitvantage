import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
// import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/blog"
          element={
            <Blog />
          }
        />
        <Route
          path="/services"
          element={
            <Services />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
