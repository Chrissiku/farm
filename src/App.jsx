import { BrowserRouter as Router } from "react-router-dom";
import { Hero, Missions, Navbar } from "./componennts";

const App = () => {
  return (
    <Router>
      <div>
        <div className="mx-auto">
          <Navbar />
          <Hero />
          <Missions />
        </div>
      </div>
    </Router>
  );
};

export default App;
