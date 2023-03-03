import { BrowserRouter as Router } from "react-router-dom";
import { Hero, Navbar } from "./componennts";

const App = () => {
  return (
    <Router>
      <div>
        <div className="mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
    </Router>
  );
};

export default App;
