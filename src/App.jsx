import { BrowserRouter as Router } from "react-router-dom";
import {
  Contact,
  Discover,
  Footer,
  Hero,
  Intro,
  Missions,
  Navbar,
  Services,
  Testimonial,
} from "./componennts";

const App = () => {
  return (
    <Router>
      <div>
        <div className="mx-auto">
          <Navbar />
          <Hero />
          <Missions />
          <Services />
          <Testimonial />
          <Discover />
          <Intro />
          <Contact />
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
