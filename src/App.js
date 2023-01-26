import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderBar from "./components/Navbar";
import About from "./pages/About";
import VideoPage from "./pages/VideoPage";

const App = () => {
  return (
    <Router>
      {/* <Switch>"" */}
      <HeaderBar />
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/about" element={<About />} />

        {/* </Switch> */}
      </Routes>
    </Router>
  );
};

export default App;
