import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MainLayout } from "./components/layout/MainLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";

const queryClient = new QueryClient();

// Create a component to handle the Animated Routes since useLocation needs Router context
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<About />} />
        <Route path="/team" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainLayout>
            <AnimatedRoutes />
          </MainLayout>
          <Toaster />
        </BrowserRouter>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
