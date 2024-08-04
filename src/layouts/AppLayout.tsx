import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { useSize } from "ahooks";
import SideBar from "@/components/menu/SideBar";
import History from "@/components/conversation/History";
import { useChatStore } from "@/stores/chatStore";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const headerSize = useSize(headerRef);
  const footerSize = useSize(footerRef);
  const height = (headerSize?.height || 0) + (footerSize?.height || 0);
  const history = useChatStore((state) => state.history);

  return (
    <div className="h-full flex flex-col">
      <Header ref={headerRef} />
      <main
        className="bg-[#f3f5fa] dark:bg-background flex"
        style={{
          height: `calc(100% - ${height + 4}px)`,
        }}
      >
        <div className="flex space-x-2 ml-4 my-2 items-center">
          <SideBar />
          {history && <History />}
        </div>
        {children}
      </main>
      <Toaster />
      <Footer ref={footerRef} />
    </div>
  );
};

export default AppLayout;
