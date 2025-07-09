"use client";

import React, { useRef, useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/navbar";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FitNavbar = () => {
  const navRef = useRef(null);
  const { scrollY } = useScroll({ target: navRef });
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Our Services", link: "#services" },
    { name: "Blog", link: "#blog" },
    { name: "Contact Us", link: "#contact" },
  ];

  return (
    <>
      {/* Backdrop blur when mobile menu is open */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300" />
      )}

      <Navbar className="top-5 fixed z-50">
        {/* Desktop Navbar */}
        <NavBody
          visible={visible}
          className="!max-w-7xl px-6 py-3 rounded-full !bg-transparent backdrop-blur-md shadow-md"
        >
          <div className="flex w-full items-center justify-between gap-6">
            {/* Logo Image Only */}
            <div className="flex items-center">
              <img src="/logo.png" alt="FitVantage Logo" className="w-30 h-8" />
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex justify-center ml-6">
              <NavItems items={navLinks} />
            </div>

            {/* CTA Button */}
            <div>
              <NavbarButton
                className="bg-green-400 text-black hover:bg-green-300 rounded-full px-6 py-2"
                variant="primary"
                href="#getapp"
              >
                Get App
              </NavbarButton>
            </div>
          </div>
        </NavBody>

        {/* Mobile Nav */}
        <MobileNav
          visible={visible}
          className="!max-w-7xl px-4 py-2 rounded-full !bg-transparent backdrop-blur-md shadow-md"
        >
          <MobileNavHeader className="w-full justify-between px-4 py-2">
            {/* Logo Image Only */}
            <div className="flex items-center">
              <img src="/logo.png" alt="FitVantage Logo" className="w-30 h-7" />
            </div>

            <MobileNavToggle
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-white font-medium text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              className="mt-4 bg-green-400 text-black rounded-full px-6 w-full text-center"
              variant="primary"
              href="#getapp"
            >
              Get App
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default FitNavbar;
