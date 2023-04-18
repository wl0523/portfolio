// import { useEffect, useState } from "react";
// import useMediaQuery from "./hooks/useMediaQuery";
// import Navbar from "./scenes/Navbar";
// import DotGroup from "./scenes/DotGroup";
// import Landing from "./scenes/Landing";
// import LineGradient from "./components/LineGradient";
// import MySkills from "./scenes/MySkills";
// import Projects from "./scenes/Projects";
// import Experience from "./scenes/Testimonials";
// import Contact from "./scenes/Contact";
import React from "react";
import Footer from "./scenes/Footer";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Home from "./pages/Home";

function App() {

  // const [selectedPage, setSelectedPage] = useState("home");
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  // const [isTopOfPage, setIsTopOfPage] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) setIsTopOfPage(true);
  //     if (window.scrollY !== 0) setIsTopOfPage(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
 <Router>
      {/* <div className="app bg-deep-blue">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="w-5/6 mx-auto md:h-full">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}

          <Landing setSelectedPage={setSelectedPage} />
        </div> */}
        <Routes>
        {/* <Route exact path="/" element={<Landing setSelectedPage={setSelectedPage}/>} /> */}
        <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
        {/* <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <Projects />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <Experience />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div> */}
  </Router>
  );
}

export default App;
