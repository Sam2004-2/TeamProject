import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GoalsPage from "./pages/GoalsPage"; // Create this component to display the goals

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category/goals" element={<GoalsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
