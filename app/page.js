"use client";

import React, { useEffect, useRef, useState } from "react";
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

// ─── Rive mascot ─────────────────────────────────────────────────────────────
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
  { num: "I",   time: "5",  label: "Intro" },
  { num: "II",  time: "15", label: "Guest in conversation" },
  { num: "III", time: "20", label: "Tools, demos & opinions" },
  { num: "IV",  time: "10", label: "Audience questions" },
];

export default function IrisLensLanding() {
  return (
    <main style={{ minHeight: "100vh", background: C.paper, color: C.ink, fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: ${C.iris}; color: ${C.yellow}; }
        body { background: ${C.paper}; }
        .serif { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
        a { color: inherit; }
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
        position: "relative", zIndex: 2,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: `1px solid ${C.rule}`,
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span className="serif" style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", fontStyle: "italic", color: C.iris }}>
            Iris Lens
          </span>
          <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: C.muted }}>
            est. 2026
          </span>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: C.muted }}>
          <a href="#about" style={{ textDecoration: "none" }}>The Show</a>
          <a href="#format" style={{ textDecoration: "none" }}>Format</a>
          <a href="#listen" style={{ textDecoration: "none" }}>Listen</a>
        </div>
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
        <span>Volume 01 · A podcast on building with AI</span>
        <span>Coming soon</span>
      </div>

      {/* ── HERO: Editorial poster layout ─────────────────────────────────── */}
      <section style={{
        position: "relative", zIndex: 2,
        minHeight: "calc(100svh - 100px)",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        placeItems: "center",
        padding: "0",
        overflow: "hidden",
      }}>
        {/* Layer 1: Massive serif word "BUILDER" wrapping behind everything */}
        <FadeUp delay={0.1} style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}>
          <h1 className="serif" style={{
            fontSize: "clamp(8rem, 22vw, 22rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: C.iris,
            opacity: 0.08,
            letterSpacing: "-0.06em",
            lineHeight: 0.85,
            whiteSpace: "nowrap",
            userSelect: "none",
          }}>
            Podcast
          </h1>
        </FadeUp>

        {/* Layer 2: Mascot — the hero, full-bleed sized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="rive-fill"
          style={{
            position: "relative",
            zIndex: 2,
            width: "min(720px, 75vh, 90vw)",
            height: "min(720px, 75vh, 90vw)",
            margin: "0 auto",
          }}
        >
          <IrisMascot />
        </motion.div>

        {/* Layer 4: Bottom anchor — small eyebrow + scroll cue */}
        <FadeUp delay={0.7} style={{
          position: "absolute",
          bottom: 40, left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}>
          <p className="serif" style={{
            fontSize: 13,
            fontStyle: "italic",
            color: C.iris,
            letterSpacing: "0.05em",
            marginBottom: 8,
          }}>
            Through the iris of a builder
          </p>
          <div style={{
            width: 1,
            height: 32,
            background: C.iris,
            margin: "0 auto",
            opacity: 0.4,
          }}/>
        </FadeUp>
      </section>

      {/* ── Pull quote / supporting headline ──────────────────────────────── */}
      <section style={{
        position: "relative", zIndex: 2,
        padding: "120px 40px 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeUp>
            <p className="serif" style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: C.ink,
            }}>
              Slow conversations with the people <br/>
              <span style={{ fontStyle: "italic", color: C.iris }}>quietly reshaping</span> their craft with AI.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 48 }}>
              <a href="#listen" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: C.iris, color: C.yellow,
                padding: "16px 32px",
                borderRadius: 2,
                textDecoration: "none",
                fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
                fontWeight: 500,
              }}>
                Listen to Volume 01 →
              </a>
              <a href="#about" style={{
                display: "inline-flex", alignItems: "center",
                padding: "16px 32px",
                border: `1px solid ${C.ink}`,
                color: C.ink,
                borderRadius: 2,
                textDecoration: "none",
                fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
              }}>
                The Editor's Note
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Decorative rule */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "40px 40px" }}>
        <div style={{ flex: 1, maxWidth: 200, height: 1, background: C.rule }}/>
        <span className="serif" style={{ fontStyle: "italic", color: C.iris, fontSize: 22 }}>❋</span>
        <div style={{ flex: 1, maxWidth: 200, height: 1, background: C.rule }}/>
      </div>

      {/* About / Editor's Note */}
      <section id="about" style={{ position: "relative", zIndex: 2, padding: "40px 40px 100px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeUp>
            <p style={{
              fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
              color: C.iris, marginBottom: 24, textAlign: "center",
            }}>
              The Editor's Note
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="serif" style={{
              fontSize: "clamp(1.3rem, 2.4vw, 1.85rem)",
              fontWeight: 300,
              lineHeight: 1.45,
              letterSpacing: "-0.01em",
              color: C.ink,
            }}>
              <span className="serif" style={{
                fontSize: "4rem", fontStyle: "italic", float: "left",
                lineHeight: 0.85, marginRight: 12, marginTop: 6,
                color: C.iris, fontWeight: 400,
              }}>T</span>
              he tooling shifts every week. The <em style={{ color: C.iris }}>practice</em> of
              building doesn't move so fast — and that's the part worth slowing down for.
              We sit with people who actually ship to find out
              what's changed in their day, what's quietly become indispensable,
              and what's still all hype.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Format */}
      <section id="format" style={{
        position: "relative", zIndex: 2,
        background: C.iris,
        color: C.paper,
        padding: "100px 40px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p style={{
                fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
                color: C.yellow, marginBottom: 16,
              }}>
                The Format
              </p>
              <h2 className="serif" style={{
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                fontWeight: 300, fontStyle: "italic",
                letterSpacing: "-0.02em",
                color: C.paper,
              }}>
                Fifty minutes, four movements.
              </h2>
            </div>
          </FadeUp>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 0,
            borderTop: `1px solid rgba(245, 239, 227, 0.2)`,
          }}>
            {segments.map(({ num, time, label }, i) => (
              <FadeUp key={label} delay={i * 0.1} style={{ display: "flex" }}>
                <div style={{
                  flex: 1,
                  padding: "40px 28px",
                  borderRight: i < segments.length - 1 ? `1px solid rgba(245, 239, 227, 0.2)` : "none",
                  borderBottom: `1px solid rgba(245, 239, 227, 0.2)`,
                }}>
                  <p className="serif" style={{
                    fontSize: 14, fontStyle: "italic",
                    color: C.yellow, marginBottom: 16,
                    letterSpacing: "0.1em",
                  }}>
                    Movement {num}
                  </p>
                  <p className="serif" style={{
                    fontSize: 64, fontWeight: 300,
                    lineHeight: 1, letterSpacing: "-0.04em",
                    color: C.paper, marginBottom: 4,
                  }}>
                    {time}
                    <span style={{ fontSize: 18, fontStyle: "italic", marginLeft: 4, color: C.yellow }}>min</span>
                  </p>
                  <p style={{
                    fontSize: 13, color: "rgba(245, 239, 227, 0.7)",
                    letterSpacing: "0.05em", marginTop: 12,
                  }}>
                    {label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Listen */}
      <section id="listen" style={{ position: "relative", zIndex: 2, padding: "120px 40px", textAlign: "center" }}>
        <FadeUp>
          <p style={{
            fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
            color: C.iris, marginBottom: 24,
          }}>
            Where to find us
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="serif" style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 300, fontStyle: "italic",
            letterSpacing: "-0.03em",
            color: C.ink,
            marginBottom: 40,
          }}>
            Subscribe wherever<br/>you listen.
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {["Spotify", "Apple Podcasts", "YouTube", "RSS"].map((p) => (
              <a key={p} href="#" className="serif" style={{
                color: C.ink,
                textDecoration: "none",
                paddingBottom: 4,
                borderBottom: `1px solid ${C.iris}`,
                fontStyle: "italic",
                fontSize: 18,
              }}>
                {p}
              </a>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <footer style={{
        position: "relative", zIndex: 2,
        borderTop: `1px solid ${C.rule}`,
        padding: "32px 40px",
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
        color: C.muted,
      }}>
        <span>© {new Date().getFullYear()} Iris Lens</span>
        <span className="serif" style={{ fontStyle: "italic", textTransform: "none", letterSpacing: "0", fontSize: 14, color: C.iris }}>
          Made with care.
        </span>
      </footer>
    </main>
  );
}