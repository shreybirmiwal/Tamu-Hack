import UserMVP from "./Pages/UserMVP";

import SeatingChart from "./Pages/SeatingChart";
import { Landing } from "./Pages/Landing";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 

function App() {
  return (
    <div className="max-h-screen">

      <Router>
        <Routes>
          
          <Route exact path="/" element={<Landing />}/>
          <Route path="/chart" element={<SeatingChart />}/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
