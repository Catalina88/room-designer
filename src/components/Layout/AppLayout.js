// src/components/Layout/AppLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header"; // toma el index.js de Header

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}