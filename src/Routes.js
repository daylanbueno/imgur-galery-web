import React  from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Dashboard from "./pages/dashboard";

export default function AppRoutes () {
    return (
    <BrowserRouter>
      <Routes>
        <Route index exact path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    )
}