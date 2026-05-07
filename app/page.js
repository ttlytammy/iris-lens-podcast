"use client";

import React from "react";
import { useRive } from "@rive-app/react-canvas";
import { motion } from "framer-motion";

// ─── Palette ─────────────────────────────────────────────────────────────────
const C = {
  paper:   "#F5EFE3", // Vintage cream paper
  ink:     "#1F1A2E", // Deep near-black
  iris:    "#5B2D8E", // Brand purple
  irisDk:  "#3D1E60", 
  yellow:  "#FFE455", // High-contrast highlight
  rule:    "rgba(31, 26, 46, 0.18)",
  muted:   "rgba(31, 26, 46, 0.55)",
};

// ─── Components ─────────────────────────────────────────────────────────────
function IrisMascot() {
  const { RiveComponent } = useRive({
    src: "/logo.riv", // This pulls from your /public folder in the repository
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  return <RiveComponent />;
}

function FadeUp({ children, delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const segments = [
  { num: "I",   time: "10", label: "Setup & Context" },
  { num: "II",  time: "22", label: "The Workflow Teardown" },
  { num: "III", time: "10", label: "Practical Demo" },
  { num: "IV",  time: "8",  label: "Live Q&A & Judgment" },
];

export default function IrisLensLanding() {
  return (
    <main id="home" style={{ minHeight: "100vh", background: C.paper, color: C.ink, fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: ${C.iris}; color: ${C.yellow}; }
        body { background: ${C.paper}; scroll-behavior: smooth; }
        .serif { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
        a { color: inherit; transition: opacity 0.2s; text-decoration: none; }
        a:hover { opacity: 0.7; }
        .rive-fill canvas { width: 100% !important; height: 100% !important; object-fit: contain; }
      `}</style>

      {/* Top masthead */}
      <header style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 40px", borderBottom: `1px solid ${C.rule}`, background: C.paper
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span className="serif" style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", fontStyle: "italic", color: C.iris }}>
            IrisLens: Practical AI Upskilling
          </span>
          <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.muted }}>est. 2026</span>
        </div>
        <nav style={{ display: "flex", gap: 20, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: C.muted, flexWrap: "wrap" }}>
          <a href="#home">Home</a>
          <a href="#live" style={{ color: C.iris, fontWeight: 600 }}>• Live Recording</a>
          <a href="#about">About</a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section style={{ position: "relative", zIndex: 2, minHeight: "85svh", display: "grid", placeItems: "center", paddingBottom: "100px" }}>
        <FadeUp delay={0.1} style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <h1 className="serif" style={{ fontSize: "clamp(8rem, 22vw, 22rem)", fontWeight: 300, fontStyle: "italic", color: C.iris, opacity: 0.08, letterSpacing: "-0.06em", lineHeight: 0.85, whiteSpace: "nowrap" }}>
            Podcast
          </h1>
        </FadeUp>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="rive-fill"
          style={{ width: "min(600px, 70vw)", height: "min(600px, 70vw)", position: "relative", zIndex: 2 }}
        >
          <IrisMascot />
        </motion.div>

        <FadeUp delay={0.8} style={{ position: "absolute", bottom: 40, textAlign: "center" }}>
          <p className="serif" style={{ fontSize: 13, fontStyle: "italic", color: C.iris, letterSpacing: "0.05em", marginBottom: 8 }}>
            Through the iris of a builder
          </p>
          <div style={{ width: 1, height: 32, background: C.iris, margin: "0 auto", opacity: 0.4 }}/>
        </FadeUp>
      </section>

      {/* ── CTA ── */}
      <section id="live" style={{ background: C.yellow, padding: "100px 40px", textAlign: "center", position: "relative", zIndex: 3 }}>
        <FadeUp>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.iris, marginBottom: 12, fontWeight: 600 }}>Recording Today</p>
          <h2 className="serif" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: C.ink, lineHeight: 1.1, marginBottom: 20 }}>
            Real AI Upskilling — <span style={{ fontStyle: "italic", color: C.iris }}>for work and beyond.</span>
          </h2>
          <p style={{ maxWidth: 650, margin: "0 auto 40px", fontSize: 18, lineHeight: 1.6 }}>
            Join the live teardown to witness AI workflows built in real-time. 
            <strong> Registration for Episode 01 is now open via Luma.</strong>
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="https://lu.ma/irislens" target="_blank" rel="noreferrer" style={{
              background: C.iris, color: C.yellow, padding: "18px 36px", borderRadius: 2, 
              fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700
            }}>
              Register for the Show →
            </a>
          </div>
        </FadeUp>
      </section>

      {/* ── ABOUT / THE EDITOR'S NOTE ── */}
      <section id="about" style={{ padding: "120px 40px", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeUp>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: C.iris, marginBottom: 24, textAlign: "center" }}>The Editor's Note</p>
            <p className="serif" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.85rem)", fontWeight: 300, lineHeight: 1.45, color: C.ink }}>
              <span style={{ fontSize: "4rem", fontStyle: "italic", float: "left", lineHeight: 0.85, marginRight: 12, marginTop: 6, color: C.iris }}>T</span>
              he tooling shifts every week. The skill of applying AI shouldn't have to. 
              We teardown the workflows that help you win at work and reclaim your time at home. 
              Practical upskilling for the modern operator.
            </p>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginTop: 80 }}>
            <FadeUp delay={0.2}>
              <h4 className="serif" style={{ fontStyle: "italic", color: C.iris, marginBottom: 12 }}>The Host</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}><strong>Iris</strong> — A builder focused on operational efficiency and practical AI implementation.</p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <h4 className="serif" style={{ fontStyle: "italic", color: C.iris, marginBottom: 12 }}>The Mission</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>To bridge the gap between AI demos and actual utility for non-technical professionals.</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FORMAT ── */}
      <section style={{ background: C.iris, color: C.paper, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeUp style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 className="serif" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontStyle: "italic" }}>50 minutes of practical building.</h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", borderTop: `1px solid rgba(245, 239, 227, 0.2)` }}>
            {segments.map(({ num, time, label }, i) => (
              <div key={label} style={{ padding: "40px 28px", borderRight: i < 3 ? `1px solid rgba(245, 239, 227, 0.2)` : "none" }}>
                <p className="serif" style={{ fontSize: 14, fontStyle: "italic", color: C.yellow, marginBottom: 10 }}>Movement {num}</p>
                <p className="serif" style={{ fontSize: 50, fontWeight: 300, color: C.paper }}>{time}<span style={{ fontSize: 16, opacity: 0.6, marginLeft: 4 }}>m</span></p>
                <p style={{ fontSize: 12, marginTop: 10, opacity: 0.8 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "80px 40px 40px", textAlign: "center", borderTop: `1px solid ${C.rule}` }}>
        <FadeUp>
          <div style={{ display: "flex", justifyContent: "center", gap: 30, flexWrap: "wrap", opacity: 0.4, marginBottom: 40 }}>
             {["Spotify", "Apple Podcasts", "Substack", "YouTube"].map((p) => (
              <span key={p} className="serif" style={{ fontStyle: "italic" }}>{p} (Coming Soon)</span>
            ))}
          </div>
          <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted }}>
            © {new Date().getFullYear()} IrisLens · Practical AI Upskilling
          </p>
        </FadeUp>
      </footer>
    </main>
  );
}
