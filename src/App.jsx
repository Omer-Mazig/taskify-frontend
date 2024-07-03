import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/auth-layout";
import MainLayout from "./layouts/main-layout";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import { useAuth } from "./contexts/auth-context";

function ProtectedRoute({ children }) {
  const { loggedInUser } = useAuth();

  if (loggedInUser === undefined) {
    return null;
  }

  console.log("loggedInUser", loggedInUser);
  if (loggedInUser === null) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<div>home</div>} />
          <Route path="about" element={<div>about</div>} />
          <Route path="contact" element={<div>contact</div>} />
          <Route path="task" element={<div>tasks</div>} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
