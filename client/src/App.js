import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import IncidenciesScreen from "./screens/IncidenciesScreen";
import Dashboard from "./dashboard/screens/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Incidencies/reported" element={<IncidenciesScreen />} />
        <Route path="/admin/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
