import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Khoj from "./pages/Khoj";
import Register from "./pages/Register";

import LoginPage from "./pages/LoginPage";
import { createContext, useState } from "react";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./route/ProtectedRoute";
export const AuthContext = createContext();
function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <div className="App">
      <AuthContext.Provider value={[loggedInUser, setloggedInUser]}>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route element={<Khoj />} path="/khoj" exact />
            </Route>

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
