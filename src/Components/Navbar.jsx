import * as React from "react";
import Hero from "./Hero";

import logo from "../assets/LOGO.png";
import ThridSection from "./ThirdSection";
import DocumentsSection from "./DocumentsSection";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import TeamSection from "./TeamSection";
export const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar  lg:mt-12 lg:px-12">
          <div className="flex-none lg:hidden ">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 justify-end lg:justify-start px-2 mx-2 ">
            <a href="/">
              <img src={logo} alt="" className="h-[64px] lg:h-[128px]" />
            </a>
          </div>
          <div className="flex-none hidden lg:block ">
            <ul className="menu menu-horizontal">
              <li>
                <a href="#documents">Dokumenty</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
        <Hero />

        <DocumentsSection />
        <TeamSection />
        <ThridSection />
        <ContactSection />
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          <li>
            <a href="#documents">Dokumenty</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
