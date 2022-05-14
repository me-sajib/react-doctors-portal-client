import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyHistory from "./Pages/Dashboard/MyHistory";
import MyReview from "./Pages/Dashboard/MyReview";
import Home from "./Pages/Home/Home";
import Review from "./Pages/Home/Review";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="myReview" element={<MyReview />} />
          <Route path="myHistory" element={<MyHistory />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
