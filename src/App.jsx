import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import HomePage from "./pages/home-page";
import DocumentsSection from "./Components/DocumentsSection";
import ContactSection from "./Components/ContactSection";
import Layout from "./Components/Layout";
import Offer from "./Components/Offer";
import AboutPage from "./pages/about-page";
import DocumentsPage from "./pages/documents-page";
import ContactPage from "./pages/contact-page";
import EventsPage from "./pages/events-page";
import CookiePolicyPage from "./pages/cookie-policy-page";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="oferta" element={<Offer />} />
          <Route path="o-nas" element={<AboutPage />} />
          <Route path="dokumenty" element={<DocumentsPage />} />
          <Route path="wydarzenia" element={<EventsPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="cookie" element={<CookiePolicyPage />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
