import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./pages/home/Home";
// import { Signup } from "./pages/signup/Signup";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { CustomPage } from "./components/custom-page/CustomPage";
import { DashboardProvider } from "./context/DashboardContext";

const App: React.FC = () => {  
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={
              <DashboardProvider>
                <Dashboard />
              </DashboardProvider>
            }
          />

          <Route path="/404" element={<CustomPage title="404" description="Page not found" time={3000} redirectPath="/" redirectPageTitle="Home" />} />
          <Route path="/*" element={<Navigate to='/404' />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
