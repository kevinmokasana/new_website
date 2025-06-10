import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ElementLight } from "./screens/ElementLight/ElementLight";
import { ContactUsPage } from "./pages/ContactUsPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ElementLight />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);