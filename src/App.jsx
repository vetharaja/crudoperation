import { useEffect } from "react";
import "./App.css";
import LoginPage from "./login/loginPage";
import HomePage from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  const user = null;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={
          user ? <Navigate to="/new-meets" replace /> : <LoginPage />
        }
      />
      {
        user != null ?
          <Route
            path="/new-meets"
            element={<HomePage />}
          />
          : <Route path="/" element={<Navigate to="/login" replace />} />}
    </Routes>
  );
}

export default App;