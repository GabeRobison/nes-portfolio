import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import Footer from "./components/Footer";
import ContentWrapper from "./components/ContentWrapper";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </ContentWrapper>
      <Footer />
    </Router>
  );
};

export default App;
