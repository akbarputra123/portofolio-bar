"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import "./appbar.css";

export default function Appbar() {

  const [open, setOpen] = useState(false);

  /* 🔥 DARK MODE */
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <nav className="appbar">

        {/* 🔥 BRAND */}
        <div className="appbar-brand">

          {/* LOGO */}
          <div className="logo-box">
            <Image
              src="/profile.jpeg"
              alt="logo"
              width={40}
              height={40}
              className="logo-img"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="appbar-logo">Bar Fullstack Dev</h2>
            <p className="appbar-subtitle">AI • Web • Mobile</p>
          </div>

        </div>

        {/* DESKTOP */}
        <div className="appbar-menu">

          <a href="#home" className="appbar-link">Home</a>
          <a href="#about" className="appbar-link">About</a>
          <a href="#projects" className="appbar-link">Projects</a>
          <a href="#skills" className="appbar-link">Skills</a>
          <a href="#galery" className="appbar-link">Galery</a>
          <a href="#contact" className="appbar-link">Contact</a>

          {/* 🌙 DARK MODE */}
          <button
            className="theme-btn"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

        </div>

        {/* 🍔 HAMBURGER */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>

      {/* 🔥 OVERLAY */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* 🔥 MOBILE PANEL */}
      <div className={`mobile-panel ${open ? "show" : ""}`}>

        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#galery" onClick={() => setOpen(false)}>Galery</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        {/* 🌙 MOBILE DARK MODE */}
        <button
          className="theme-btn mobile-theme"
          onClick={() => setDark(!dark)}
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

      </div>
    </>
  );
}