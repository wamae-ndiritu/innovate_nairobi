import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import IncidenciesScreen from "./screens/IncidenciesScreen";
import Dashboard from "./dashboard/screens/Dashboard";
import SignUp from "./components/user/SignUp";
import FAQS from "./components/footer/FAQS";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Incidencies/reported" element={<IncidenciesScreen />} />
        <Route path="/admin/" element={<Dashboard />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/faqs" element={<FAQS />} />
      </Routes>
    </Router>
  );
}
