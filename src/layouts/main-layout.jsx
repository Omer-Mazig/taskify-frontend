import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="px-4 max-w-5xl mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
