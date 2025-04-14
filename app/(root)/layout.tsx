import React from "react";
import { ChildProps } from "@/types";
import Navbar from "./__components/navbar";
import Footer from "./__components/footer";

function PageLayout({ children }: ChildProps) {
  return (
    <div className="flex flex-col min-h-screen max-w-5xl mx-auto px-5">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <div className="mb-2">
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;