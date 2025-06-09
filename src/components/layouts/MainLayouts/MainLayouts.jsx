import React from "react";
import { Outlet } from "react-router-dom";

function MainLayouts() {
  return (
    <main className="relative mx-auto box-border flex min-h-screen w-full max-w-[1444px] flex-col items-start justify-start overflow-x-hidden p-4">
      <Outlet />
    </main>
  );
}

export default MainLayouts;
