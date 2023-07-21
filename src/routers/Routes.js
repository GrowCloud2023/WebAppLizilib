import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import RegisterStep2 from "../views/RegisterStep2";
import RegisterStep3 from "../views/RegisterStep3";
import NotFound from "../components/NotFound";
import Dashboard from "../views/Dashboard";
import Competidores from "../views/Competidores";
import Instituciones from "../views/Instituciones";

function RoutesApp() {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/2" element={<RegisterStep2 />} />
          <Route path="/register/3" element={<RegisterStep3 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/competidores" element={<Competidores />} />
          <Route path="/instituciones" element={<Instituciones />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default RoutesApp;
