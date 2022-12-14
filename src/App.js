import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import RequiredAuth from "./required-auth";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequiredAuth>
            <Dashboard />
          </RequiredAuth>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
