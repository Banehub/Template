import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        </Routes>
    </Router>
  );
}

export default App;







