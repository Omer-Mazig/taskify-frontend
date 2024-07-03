import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/auth-layout";
import MainLayout from "./layouts/main-layout";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import { useAuth } from "./contexts/auth-context";
import HomePage from "./pages/home-page";

function RequireAuth({ children }) {
  const { loggedInUser } = useAuth();

  if (loggedInUser === undefined) {
    return null;
  }

  if (loggedInUser === null) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}

function RequireUnAuth({ children }) {
  const { loggedInUser } = useAuth();

  if (loggedInUser === undefined) {
    return null;
  }

  if (loggedInUser !== null) {
    return <Navigate to="/task" replace />;
  }

  return children;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<div>about</div>} />
          <Route path="contact" element={<div>contact</div>} />
          <Route
            path="task"
            element={
              <RequireAuth>
                <div>task</div>
              </RequireAuth>
            }
          />
        </Route>

        <Route
          path="/auth"
          element={
            <RequireUnAuth>
              <AuthLayout />
            </RequireUnAuth>
          }
        >
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
