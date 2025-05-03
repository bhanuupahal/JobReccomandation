import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavbarSection/NavBar";
import { Footer } from "./Components/FooterSection/Footer";
import { AboutUs } from "./Components/AboutusSection/AboutUs";
import { LandingPage } from "./Components/HomeSection/LandingPage";
import { MyDashboard } from "./Components/DashboardSection/MyDashboard";
import { LogIn } from "./Components/AuthSection/LogIn";
import { SignUp } from "./Components/AuthSection/SignUp";
import { ResetPassword } from "./Components/AuthSection/ResetPassword";
import MyJobs from "./Components/DashboardSection/MyJobs";
import Setting from "./Components/DashboardSection/Setting";
import ContactUs from "./Components/ContactusSection/ContactUs"; // Updated path
import SubmitJob from "./Components/SubmitJobSection/Submit_job";
import MyProfile from "./Components/DashboardSection/MyProfile";

function App() {
  const location = useLocation();
  
  // Check if current route is a dashboard route
  const isDashboardRoute = () => {
    const dashboardRoutes = ['/dashboard', '/profile', '/jobs', '/applications', '/settings', '/notifications', '/messages'];
    return dashboardRoutes.some(route => location.pathname === route);
  };

  return (
    <>
      {/* Render NavBar only if not on a dashboard route */}
      {!isDashboardRoute() && <NavBar />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<MyDashboard />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/settings" element={<Setting/>}/>
        <Route path="/jobs" element={<MyJobs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/submitjob" element={<SubmitJob/>}/>
      </Routes>
      
      {/* Conditionally render Footer based on the same logic */}
      {!isDashboardRoute() && <Footer />}
    </>
  );
}

export default App;






