import { BrowserRouter as Router } from "react-router-dom";
import { Hero, Missions, Navbar, Services } from "./componennts";

const App = () => {
  return (
    <Router>
      <div>
        <div className="mx-auto">
          <Navbar />
          <Hero />
          <Missions />
          <Services />
        </div>
      </div>
    </Router>
  );
};

export default App;
