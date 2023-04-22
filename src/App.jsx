// import { useState } from "react";
// import { motion } from "framer-motion";
// import "./App.css";
// import Home from "./pages/Home";
// import React, { StrictMode } from "react";
// import ErrorPage from "./pages/error-page";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />

//         <Route path="*" element={<ErrorPage />} />
//       </Route>
//     </Routes>
//   );
// }
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import DrawerMain from "./Components/navbar/DrawerMain";
import DrawerSide from "./Components/navbar/DrawerSide";
import Home from "./pages/Home";
import DocumentsSection from "./Components/DocumentsSection";
import ContactSection from "./Components/ContactSection";
import Layout from "./Components/Layout";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return <DocumentsSection />;
}

function Dashboard() {
  return <ContactSection />;
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
