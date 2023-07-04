import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  About,
  Contact,
  Education,
  Work,
  Hero,
  Navbar,
  Projects,
  StarsCanvas,
  Tech,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="bottom-right" hideProgressBar />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Work />
        <Tech />
        <Education />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
