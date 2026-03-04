import { ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";
import { CustomCursor } from "@/components/ui/CustomCursor";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-cascade-void">
      <CustomCursor />
      <Navbar />
      {/* We add a generalized padding top to account for the fixed navbar, though some pages like Home might use negative margins or specific padding if they want the hero to go under the nav. Typically pt-24 is good. */}
      <main className="flex-grow flex flex-col pt-[64px] relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}