import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
