"use client";

import React from "react";
import { useRive } from "@rive-app/react-canvas";
import { motion } from "framer-motion";

// ─── Palette ─────────────────────────────────────────────────────────────────
const C = {
  paper:   "#F5EFE3",
  ink:     "#1F1A2E",
  iris:    "#5B2D8E",
  irisDk:  "#3D1E60",
  yellow:  "#FFE455",
  rule:    "rgba(31, 26, 46, 0.18)",
  muted:   "rgba(31, 26, 46, 0.55)",
};

// ─── Components ─────────────────────────────────────────────────────────────
function IrisMascot() {
  const { RiveComponent } = useRive({
    src: "/logo.riv",
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
        a { color: inherit; transition: opacity 0.2s; }
        a:hover { opacity: 0.7; }
        .rive-fill canvas { width: 100% !important; height: 100% !important; object-fit: contain; }
      `}</style>

      {/* Paper grain overlay */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.12 0 0 0 0 0.10 0 0 0 0 0.18 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        mixBlendMode: "multiply",
      }}/>

    
{/* Top masthead */}
      <header style={{
        position: "relative", zIndex: 10,
        display: "flex", 
        flexDirection: "row", // Default to side-by-side
        alignItems: "center", 
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: `1px solid ${C.rule}`,
        background: C.paper,
        flexWrap: "wrap", // Allows items to drop to next line instead of squishing
        gap: "16px"
      }}>
        <style>{`
          @media (max-width: 768px) {
            header { 
              padding: 15px 20px !important; 
              justify-content: center !important; 
              text-align: center;
            }
            .header-title { font-size: 18px !important; }
            .header-nav { 
              justify-content: center !important; 
              gap: 12px !important; 
              width: 100%;
            }
          }
        `}</style>
        
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span className="serif header-title" style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", fontStyle: "italic", color: C.iris, whiteSpace: "nowrap" }}>
            IrisLens: Practical AI Upskilling
          </span>
          <span className="hide-mobile" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.muted }}>
            est. 2026
          </span>
        </div>
        
        <nav className="header-nav" style={{ display: "flex", gap: 20, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: C.muted, flexWrap: "wrap" }}>
          <a href="#home" style={{ textDecoration: "none" }}>Home</a>
          <a href="#live" style={{ textDecoration: "none", color: C.iris, fontWeight: 600 }}>• Live</a>
          <a href="#kits" style={{ textDecoration: "none" }}>Kits</a>
          <a href="#archive" style={{ textDecoration: "none" }}>Archive</a>
          <a href="#about" style={{ textDecoration: "none" }}>About</a>
        </nav>
      </header>

      {/* Issue line */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", justifyContent: "space-between",
        padding: "10px 40px",
        fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
        color: C.muted,
        borderBottom: `1px solid ${C.rule}`,
      }}>
        <span>Volume 01 · Real-world AI skills for work and life</span>
        <span style={{ color: C.iris, fontWeight: 600 }}>Ep 01: Recording Today</span>
      </div>

      {/* ── HERO ── */}
      <section style={{
        position: "relative", zIndex: 2,
        minHeight: "calc(100svh - 140px)",
        display: "grid",
        placeItems: "center",
      }}>
        <FadeUp delay={0.1} style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <h1 className="serif" style={{ fontSize: "clamp(8rem, 22vw, 22rem)", fontWeight: 300, fontStyle: "italic", color: C.iris, opacity: 0.08, letterSpacing: "-0.06em", lineHeight: 0.85, whiteSpace: "nowrap", userSelect: "none" }}>
            Podcast
          </h1>
        </FadeUp>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="rive-fill"
          style={{ position: "relative", zIndex: 2, width: "min(720px, 70vh, 90vw)", height: "min(720px, 70vh, 90vw)", margin: "0 auto" }}
        >
          <IrisMascot />
        </motion.div>

        <FadeUp delay={0.7} style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
          <p className="serif" style={{ fontSize: 13, fontStyle: "italic", color: C.iris, letterSpacing: "0.05em", marginBottom: 8 }}>
            Through the iris of a builder
          </p>
          <div style={{ width: 1, height: 32, background: C.iris, margin: "0 auto", opacity: 0.4 }}/>
        </FadeUp>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: "relative", zIndex: 2, padding: "100px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp>
            <p className="serif" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em", color: C.ink }}>
              Real AI Upskilling — <br/>
              <span style={{ fontStyle: "italic", color: C.iris }}>for work and beyond.</span>
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 48 }}>
              <a href="https://luma.com/irislens" target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: C.iris, color: C.yellow,
                padding: "16px 32px", borderRadius: 2, textDecoration: "none",
                fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600,
              }}>
                Join the Live Recording →
              </a>
              <a href="#about" style={{
                display: "inline-flex", alignItems: "center",
                padding: "16px 32px", border: `1px solid ${C.ink}`,
                color: C.ink, borderRadius: 2, textDecoration: "none",
                fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
              }}>
                The Editor's Note
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── LIVE SECTION ── */}
      <section id="live" style={{ position: "relative", zIndex: 2, padding: "80px 40px", background: C.yellow, textAlign: "center" }}>
        <FadeUp>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.iris, marginBottom: 12, fontWeight: 600 }}>
              Happening Now
            </p>
            <h2 className="serif" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: C.ink, marginBottom: 20, lineHeight: 1.1 }}>
              Join the Live Workflow Teardown
            </h2>
            <p style={{ fontSize: 18, color: C.ink, marginBottom: 32, opacity: 0.9, lineHeight: 1.5 }}>
              Register on Luma to join the live session and ask questions. 
              <strong> Subscribers receive the Workflow Kit</strong> after the show.
            </p>
            <a href="https://luma.com/irislens" target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", background: C.iris, color: C.yellow,
              padding: "18px 36px", borderRadius: 2, textDecoration: "none", fontSize: 13, 
              letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600
            }}>
              Register on Luma →
            </a>
          </div>
        </FadeUp>
      </section>

      <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "80px 40px" }}>
        <div style={{ flex: 1, maxWidth: 200, height: 1, background: C.rule }}/>
        <span className="serif" style={{ fontStyle: "italic", color: C.iris, fontSize: 22 }}>❋</span>
        <div style={{ flex: 1, maxWidth: 200, height: 1, background: C.rule }}/>
      </div>

      {/* ── ABOUT / EDITOR'S NOTE ── */}
      <section id="about" style={{ position: "relative", zIndex: 2, padding: "40px 40px 60px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeUp>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: C.iris, marginBottom: 24, textAlign: "center" }}>
              The Editor's Note
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="serif" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.85rem)", fontWeight: 300, lineHeight: 1.45, letterSpacing: "-0.01em", color: C.ink }}>
              <span className="serif" style={{ fontSize: "4rem", fontStyle: "italic", float: "left", lineHeight: 0.85, marginRight: 12, marginTop: 6, color: C.iris, fontWeight: 400 }}>T</span>
              he tooling shifts every week. The <em style={{ color: C.iris }}>skill</em> of applying AI shouldn't have to. 
              We teardown the workflows that help you win at work and reclaim your time at home. 
              Practical upskilling for the non-technical operator.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── TEAM SECTION ── */}
     <section id="about-team" style={{ position: "relative", zIndex: 2, padding: "0 40px 100px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
          <FadeUp delay={0.2}>
            <h4 className="serif" style={{ fontStyle: "italic", color: C.iris, marginBottom: 12 }}>The Host</h4>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: C.ink }}>
              <strong>Iris</strong> — A seasoned AI Product Manager with a background at <strong>Scale AI, Zynga, Arteria AI, and Studdy AI</strong>. 
              Over the last 4 years, she recognized a significant barrier for beginners entering the space and is now dedicated to empowering the community through practical AI upskilling.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <h4 className="serif" style={{ fontStyle: "italic", color: C.iris, marginBottom: 12 }}>The Mission</h4>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: C.ink }}>
              To bridge the gap between "cool AI demos" and "actual utility" for the modern operator.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FORMAT ── */}
      <section id="format" style={{ position: "relative", zIndex: 2, background: C.iris, color: C.paper, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: C.yellow, marginBottom: 16 }}>The Format</p>
              <h2 className="serif" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, fontStyle: "italic", letterSpacing: "-0.02em", color: C.paper }}>
                50 minutes of practical building.
              </h2>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", borderTop: `1px solid rgba(245, 239, 227, 0.2)` }}>
            {segments.map(({ num, time, label }, i) => (
              <FadeUp key={label} delay={i * 0.1} style={{ display: "flex" }}>
                <div style={{ flex: 1, padding: "40px 28px", borderRight: i < segments.length - 1 ? `1px solid rgba(245, 239, 227, 0.2)` : "none", borderBottom: `1px solid rgba(245, 239, 227, 0.2)` }}>
                  <p className="serif" style={{ fontSize: 14, fontStyle: "italic", color: C.yellow, marginBottom: 16, letterSpacing: "0.1em" }}>Movement {num}</p>
                  <p className="serif" style={{ fontSize: 64, fontWeight: 300, lineHeight: 1, letterSpacing: "-0.04em", color: C.paper, marginBottom: 4 }}>
                    {time}<span style={{ fontSize: 18, fontStyle: "italic", marginLeft: 4, color: C.yellow }}>min</span>
                  </p>
                  <p style={{ fontSize: 13, color: "rgba(245, 239, 227, 0.7)", letterSpacing: "0.05em", marginTop: 12 }}>{label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW KITS ── */}
      <section id="kits" style={{ position: "relative", zIndex: 2, padding: "100px 40px", textAlign: "center", borderBottom: `1px solid ${C.rule}` }}>
        <FadeUp>
          <h2 className="serif" style={{ fontSize: "2.5rem", color: C.iris }}>Workflow Kits</h2>
          <p style={{ color: C.muted, marginTop: 10 }}>Downloadable prompt libraries and tools from every episode. Coming soon.</p>
        </FadeUp>
      </section>

      {/* ── ARCHIVE ── */}
      <section id="archive" style={{ position: "relative", zIndex: 2, padding: "100px 40px", textAlign: "center" }}>
        <FadeUp>
          <h2 className="serif" style={{ fontSize: "2.5rem", color: C.ink }}>Archive</h2>
          <p style={{ color: C.muted, marginTop: 10 }}>Our library of past teardowns. Under construction.</p>
        </FadeUp>
      </section>

      {/* ── LISTEN & SUBSCRIBE ── */}
      <section id="listen" style={{ position: "relative", zIndex: 2, padding: "120px 40px", textAlign: "center" }}>
        <FadeUp>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: C.iris, marginBottom: 24 }}>Stay Tuned</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="serif" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, fontStyle: "italic", letterSpacing: "-0.03em", color: C.ink, marginBottom: 20 }}>
            The Workflow Kits <br/>
            <span style={{ fontStyle: "normal", color: C.iris }}>are in development.</span>
          </h2>
          <p style={{ maxWidth: 600, margin: "0 auto 40px", color: C.muted, fontSize: 16, lineHeight: 1.5 }}>
            Our Substack and Podcast feeds are currently being provisioned. <br/> 
            Registration for the <strong>Ep 01 Kit</strong> is open via Luma above.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", opacity: 0.6 }}>
            {["Spotify", "Apple Podcasts", "Substack", "YouTube"].map((p) => (
              <span key={p} className="serif" style={{ color: C.ink, paddingBottom: 4, borderBottom: `1px solid ${C.rule}`, fontStyle: "italic", fontSize: 18 }}>
                {p} (Coming Soon)
              </span>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ position: "relative", zIndex: 2, borderTop: `1px solid ${C.rule}`, padding: "32px 40px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted }}>
        <span>© {new Date().getFullYear()} IrisLens: Practical AI Upskilling</span>
        <span className="serif" style={{ fontStyle: "italic", textTransform: "none", letterSpacing: "0", fontSize: 14, color: C.iris }}>
          Made with care.
        </span>
      </footer>
    </main>
  );
}
