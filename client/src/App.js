import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import IncidenciesScreen from "./screens/IncidenciesScreen";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Incidencies/reported" element={<IncidenciesScreen />} />
      </Routes>
    </Router>
  );
}
