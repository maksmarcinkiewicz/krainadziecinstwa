import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import HomePage from "./pages/home-page";

import Layout from "./Components/Layout";
import OfferPage from "./pages/offer-page";
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
          <Route path="oferta" element={<OfferPage />} />
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
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-3xl">Strona nie istnieje.</h2>
      <button className="btn btn-outline mt-8">
        <Link to="/">Powrót do strony głównej</Link>
      </button>
    </div>
  );
}
