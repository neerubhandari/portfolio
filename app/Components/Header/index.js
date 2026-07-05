"use client";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-wide text-gray-900"
          >
            <span className="text-[#6C63FF]">N</span>B
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 transition hover:text-[#6C63FF]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="h-0.5 w-6 bg-gray-800"></span>
            <span className="h-0.5 w-6 bg-gray-800"></span>
            <span className="h-0.5 w-6 bg-gray-800"></span>
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

        {/* SIDE DRAWER */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <span className="text-lg font-bold">
              <span className="text-[#6C63FF]">N</span>B
            </span>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 p-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-gray-100 hover:text-[#6C63FF]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
