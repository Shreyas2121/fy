import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Register from "./pages/register";
import UserLogin from "./components/userlogin";
import CompanyLogin from "./components/companylogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="clogin" element={<CompanyLogin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
