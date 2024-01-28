import SeatingChart from "./Pages/SeatingChart";
import LandingPage from "./Pages/LandingPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 

function App() {
  return (
    <div className="max-h-screen">

      <Router>
        <Routes>
          
          <Route exact path="/" element={<LandingPage />}/>
          <Route path="/book" element={<SeatingChart />}/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
