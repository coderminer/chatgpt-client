import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { useSize } from "ahooks";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const headerSize = useSize(headerRef);
  const footerSize = useSize(footerRef);
  const height = ((headerSize?.height || 0) + (footerSize?.height || 0))
  console.log(headerSize)
  return (
    <div className="h-full flex flex-col">
      <Header ref={headerRef} />
      <main
        className="bg-[#f3f5fa] dark:bg-background"
        style={{
          height: `calc(100% - ${height+4}px)`,
        }}
      >
        {children}
      </main>
      <Toaster />
      <Footer ref={footerRef} />
    </div>
  );
};

export default AppLayout;
