import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Khoj from "./pages/Khoj";
import Register from "./pages/Register";

import LoginPage from "./pages/LoginPage";
import { createContext, useState } from "react";
export const AuthContext = createContext();
function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  return (
    <div className="App">
      <AuthContext.Provider value={[loggedInUser, setloggedInUser]}>
        <BrowserRouter>
          <Routes>
            <Route path="/khoj" element={<Khoj />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
