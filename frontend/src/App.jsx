import Analysis from "./pages/Analysis";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Loading from "./pages/Loading";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
            path="/dashboard"
            element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            }
        />
       <Route
           path="/analysis"
           element={
               <ProtectedRoute>
                   <Analysis />
               </ProtectedRoute>
           }
       />
        <Route
            path="/loading"
            element={
                <ProtectedRoute>
                    <Loading />
                </ProtectedRoute>
            }
        />
        <Route
            path="/history"
            element={
                <ProtectedRoute>
                    <History />
                </ProtectedRoute>
            }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
