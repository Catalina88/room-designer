// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import Landing from "./components/Landing";
import Layout from "./components/Layout";
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
