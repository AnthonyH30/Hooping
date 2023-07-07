import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}