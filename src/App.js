import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout/AppLayout";
import Landing from "./components/Landing";
import Layout from "./components/AppLayout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/planner" element={<Layout />} />
         
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
