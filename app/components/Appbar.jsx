"use client";
import { useState } from "react";
import "./appbar.css";

export default function Appbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="appbar">
        <h2 className="appbar-logo">Portofolio</h2>

        {/* DESKTOP */}
        <div className="appbar-menu">
          <a href="#home" className="appbar-link">Home</a>
          <a href="#about" className="appbar-link">About</a>
          <a href="#projects" className="appbar-link">Projects</a>
          <a href="#skills" className="appbar-link">Skills</a>
          <a href="#contact" className="appbar-link">Contact</a>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* PANEL */}
      <div className={`mobile-panel ${open ? "show" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </>
  );
}