import React from "react";
import DesktopHeader from "@/components/Desktop/Header/DesktopHeader";
import DesktopFooter from "@/components/Desktop/Footer/DesktopFooter";
import Home from "@/components/Desktop/Home/Home";

const DesktopPage = () => {
  return (
    <div>
      <DesktopHeader />
      <main>
        <Home />
      </main>
      <DesktopFooter />
    </div>
  );
};

export default DesktopPage;