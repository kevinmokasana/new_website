import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ElementLight } from "./screens/ElementLight/ElementLight";
import { ContactUsPage } from "./pages/ContactUsPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ExportPage } from "./pages/ExportPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ElementLight />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/export" element={<ExportPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);