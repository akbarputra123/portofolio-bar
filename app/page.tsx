"use client";
import { Mail, MapPin, MessageCircle } from "lucide-react";

import Image from "next/image";
import { useEffect, useState } from "react";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import "./hero.css";
import "./about.css";
import "./project.css";
import "./skill.css";
import "./contact.css";
import "./globals.css"; // Make sure to import the global CSS
import "./galery.css"
export default function Home() {

  /* 🔥 TYPING EFFECT */
  const texts = ["Fullstack Developer", "AI Enthusiast"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
    }
  }, [charIndex, index]);

  useEffect(() => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // 🔥 reset animasi
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => observer.observe(section));

  return () => observer.disconnect();
}, []);

  return (
    <main className="main-bg">

      <Appbar />

     {/* HERO */}
<section id="home" className="section">
  <div className="hero-box">

    {/* LEFT */}
    <div>

      <h1 className="hero-title">
        Halo, Saya <span className="highlight">Akbar Saputra</span>
      </h1>


     <p className="hero-desc">
  Saya adalah seorang Fullstack Developer dan AI Enthusiast yang
  berfokus pada pengembangan aplikasi web, mobile, dan sistem berbasis
  Artificial Intelligence. Berpengalaman menggunakan Flutter, Next.js,
  Python (Flask), Laravel, MySQL, serta teknologi Computer Vision seperti
  YOLO untuk membangun sistem yang modern, interaktif, dan bermanfaat
  bagi pengguna.
</p>

      {/* TYPING */}
      <p className="hero-typing">
        {displayText}
        <span className="cursor">|</span>
      </p>

      {/* BUTTON */}
      <button className="brutal-btn" style={{ marginTop: 20 }}>
        LIHAT PROJECT
      </button>

      {/* SOCIAL */}
      <div className="hero-social">

        {[
          { 
            name: "Instagram", 
            link: "https://instagram.com/",
            icon: (
              <>
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17" cy="7" r="1.5"/>
              </>
            ) 
          },
          { 
            name: "GitHub", 
            link: "https://github.com/",
            icon: (
              <path d="M12 2a10 10 0 0 0-3 19"/>
            ) 
          },
          { 
            name: "WhatsApp", 
            link: "https://wa.me/628xxxx",
            icon: (
              <path d="M20 12a8 8 0 1 1-2.3-5.7"/>
            ) 
          },
          { 
            name: "Facebook", 
            link: "https://facebook.com/",
            icon: (
              <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            ) 
          }
        ].map((item, i) => (
          <div key={i} className="hero-social-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
             <div className={`hero-icon ${item.name.toLowerCase()}`}>
                <svg viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
            </a>
            <span className="hero-tooltip">{item.name}</span>
          </div>
        ))}

      </div>

    </div>

    {/* RIGHT */}
    <div style={{ textAlign: "center" }}>
      <Image
        src="/profile.jpeg"
        alt="Profile"
        width={260}
        height={260}
        className="hero-img"
      />
    </div>

  </div>
</section>

     {/* ABOUT */}
<section id="about" className="section">
  <div className="about-wrapper">

    {/* TITLE */}
    <h2 className="about-title">ABOUT ME</h2>

    {/* CONTENT */}
    <div className="about-content">

      {/* IMAGE */}
      <img
        src="/profile.jpeg"
        alt="about"
        className="about-img"
      />

      <p className="about-text">
  Saya Akbar Saputra, 22 tahun, mahasiswa Teknik Informatika semester 8
  yang saat ini sedang menyelesaikan skripsi. Saya memiliki minat besar
  dalam pengembangan teknologi, khususnya di bidang Artificial Intelligence,
  Web Development, dan Mobile Development.

  <br /><br />

  Saya berpengalaman membangun berbagai sistem seperti deteksi objek berbasis
  YOLO, sistem rekomendasi menggunakan Decision Tree, serta pengembangan
  aplikasi berbasis Flutter dan web menggunakan Next.js, Flask, dan MySQL.
  Saya juga terbiasa mengintegrasikan sistem dengan GIS untuk visualisasi data.

  <br /><br />

  Fokus saya adalah menciptakan solusi yang tidak hanya bekerja secara teknis,
  tetapi juga memiliki nilai guna nyata bagi pengguna. Saya senang belajar hal
  baru, mengeksplorasi teknologi terbaru, dan terus mengembangkan skill agar
  dapat menjadi Fullstack Developer yang kompeten di bidang AI dan software
  development.
</p>

    </div>

  </div>
</section>

 <section id="projects" className="section">
  <h2 className="project-title">PROJECTS</h2>

  <div className="grid">

    <div className="project-card">
      <img src="/project1.jpg" alt="project" className="project-img" />
      <h3>Sistem Deteksi Jalan Rusak</h3>
      <p>YOLOv8 + GIS + Flutter</p>
      <button className="brutal-btn">DETAIL</button>
    </div>

    <div className="project-card">
      <img src="/project2.jpg" alt="project" className="project-img" />
      <h3>Sistem Rekomendasi Obat Hama</h3>
      <p>Decision Tree + Flask + MySQL</p>
      <button className="brutal-btn">DETAIL</button>
    </div>

    <div className="project-card">
      <img src="/project3.jpg" alt="project" className="project-img" />
      <h3>Sistem Rekomendasi Obat Hama</h3>
      <p>Decision Tree + Flask + MySQL</p>
      <button className="brutal-btn">DETAIL</button>
    </div>
    <div className="project-card">
      <img src="/project3.jpg" alt="project" className="project-img" />
      <h3>Sistem Rekomendasi Obat Hama</h3>
      <p>Decision Tree + Flask + MySQL</p>
      <button className="brutal-btn">DETAIL</button>
    </div>

  </div>
</section>

<section id="skills" className="section">
  <h2 className="skill-title">SKILLS</h2>

  <div className="skill-grid">

    {[
      { name: "Python", percent: 90, img: "/skills/python.png" },
      { name: "Flutter", percent: 85, img: "/skills/flutter.png" },
      { name: "Next.js", percent: 80, img: "/skills/nextjs.png" },
      { name: "MySQL", percent: 85, img: "/skills/mysql.png" },
      { name: "Firebase", percent: 75, img: "/skills/firebase.png" },
    

      // 🔥 TAMBAHAN
      { name: "HTML", percent: 90, img: "/skills/html.png" },
      { name: "CSS", percent: 85, img: "/skills/css.png" },
      { name: "JavaScript", percent: 88, img: "/skills/js.png" },
      { name: "Node.js", percent: 80, img: "/skills/node.png" },
      { name: "TypeScript", percent: 75, img: "/skills/ts.png" },
      { name: "Laravel", percent: 82, img: "/skills/laravel.png" },
      { name: "PHP", percent: 83, img: "/skills/php.png" },
    ].map((skill, i) => (
      <div key={i} className="skill-item">

        <div className="skill-header">
          <div className="skill-left">

            {/* 🔥 LOGO */}
            <img
              src={skill.img}
              alt={skill.name}
              className="skill-logo"
            />

            <span>{skill.name}</span>
          </div>

          <span>{skill.percent}%</span>
        </div>

        <div className="skill-bar">
          <div
            className="skill-fill"
            style={{ width: skill.percent + "%" }}
          ></div>
        </div>

      </div>
    ))}

  </div>
</section>

<section>
  <div  id="galery" className="section">

    <div  className="galery-wrapper">
      <h2>Galery</h2>


    </div>

  </div>
</section>

<section id="contact" className="section">
  <div className="contact-wrapper">

    {/* TITLE */}
    <h2>CONTACT</h2>

    <p className="contact-desc">
      Jika ingin bekerja sama, berdiskusi project, atau sekadar menyapa,
      silakan hubungi saya melalui kontak berikut atau kirim pesan langsung.
    </p>

    {/* CONTACT INFO */}
    <div className="contact-info">

      <div className="contact-item">
        <Mail className="contact-icon" />

        <div>
          <h4>Email</h4>

          <a
            href="mailto:barltzyml@gmail.com"
            className="contact-link"
          >
            barltzyml@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-item">
        <MapPin className="contact-icon" />

        <div>
          <h4>Location</h4>
          <span>Indonesia</span>
        </div>
      </div>

    </div>

    {/* 🔥 FORM */}
    <form className="contact-form">

      <div className="contact-grid">

        {/* NAME */}
        <div className="input-group">
          <label>Nama</label>

          <input
            type="text"
            placeholder="Masukkan nama..."
          />
        </div>

        {/* EMAIL */}
        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            placeholder="Masukkan email..."
          />
        </div>

      </div>

      {/* SUBJECT */}
      <div className="input-group">
        <label>Subjek</label>

        <input
          type="text"
          placeholder="Masukkan subjek..."
        />
      </div>

      {/* MESSAGE */}
      <div className="input-group">
        <label>Pesan</label>

        <textarea
          rows={6}
          placeholder="Tulis pesan..."
        ></textarea>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="brutal-btn contact-btn"
      >
        <MessageCircle size={18} />
        KIRIM PESAN
      </button>

    </form>

    {/* 🔥 WHATSAPP */}
    <div className="contact-wa">

      <p>Atau hubungi langsung melalui WhatsApp</p>

      <a
        href="https://wa.me/6282197480491"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="brutal-btn whatsapp-btn">
          <MessageCircle size={18} />
          CHAT WHATSAPP
        </button>
      </a>

    </div>

  </div>
</section>
      <Footer />
    </main>
  );
}