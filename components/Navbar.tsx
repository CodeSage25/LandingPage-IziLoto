// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

/* ═══════════════════════════════════════════
   COMPOSANT ZEBALL — règle couleur absolue
═══════════════════════════════════════════ */

function ZeBallText({ onDark = true }: { onDark?: boolean }) {
  return (
    <>
      <span
        className="font-bold text-xl"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <span
          style={{
            color: "black",
            WebkitTextStroke: "0.25px white",
          }}
        >
          Ze
        </span>
        <span
          style={{
            color: "red",
          }}
        >
          Ball
        </span>
      </span>
    </>
  );
}

/* ═══════════════════════════════════════════
   LIENS DE NAVIGATION
═══════════════════════════════════════════ */

interface NavLink {
  label: string;
  href: string;
  isZeBall?: boolean;
  isExternal?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Loto 10", href: "#loto10-card" },
  { label: "Loto 9", href: "#loto9-card" },
  { label: "ZeBall", href: "#zeball-card", isZeBall: true },
];

/* ═══════════════════════════════════════════
   COMPOSANT NAVBAR
═══════════════════════════════════════════ */

export default function Navbar() {
  const { isScrolled, scrollY } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  // La topbar fait 36px — quand elle est visible, la navbar
  // se positionne juste en dessous
  const topBarHeight = 36;

  return (
    <>
      {/* ── NAVBAR PRINCIPALE ── */}
      <nav
        aria-label="Navigation principale"
        style={{
          position: isScrolled ? "fixed" : "absolute",
          top: isScrolled ? 0 : `${topBarHeight}px`,
          left: 0,
          right: 0,
          zIndex: 90,
          backgroundColor: isScrolled ? "white" : "transparent",
          boxShadow: isScrolled ? "0 1px 12px rgba(0,0,0,0.08)" : "none",
          transition:
            "background-color 300ms ease, box-shadow 300ms ease, top 300ms ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── GAUCHE : Logo + liens jeux ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {/* Logo IZILOTO — visible uniquement quand scrollé */}
            {isScrolled && (
              <a
                href="https://iziloto.cm/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontWeight: 800,
                  fontSize: "22px",
                  color: "#951A80",
                  textDecoration: "none",
                  letterSpacing: "-0.5px",
                  flexShrink: 0,
                }}
              >
                iziLoto
              </a>
            )}

            {/* Liens jeux — toujours visibles */}
            <div
              className="nav-links-desktop"
              style={{ display: "flex", alignItems: "center", gap: "28px" }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "15px",
                    color: isScrolled ? "#1a1a2e" : "white",
                    textDecoration: "none",
                    transition: "color 200ms ease, opacity 200ms ease",
                    cursor: "pointer",
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      isScrolled ? "#1a1a2e" : "white";
                  }}
                >
                  {link.isZeBall ? (
                    <ZeBallText onDark={!isScrolled} />
                  ) : (
                    link.label
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* ── DROITE : Boutons + Burger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Se connecter — desktop */}
            <a
              href="https://iziloto.cm/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-desktop"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: isScrolled ? "#1a1a2e" : "white",
                textDecoration: "none",
                padding: "8px 18px",
                borderRadius: "8px",
                border: `1.5px solid ${isScrolled ? "#1a1a2e" : "white"}`,
                transition: "all 200ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = isScrolled
                  ? "#1a1a2e"
                  : "rgba(255,255,255,0.15)";
                el.style.color = isScrolled ? "white" : "white";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "transparent";
                el.style.color = isScrolled ? "#1a1a2e" : "white";
              }}
            >
              Se connecter
            </a>

            {/* S'inscrire — desktop */}
            <a
              href="https://iziloto.cm/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-desktop"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#FEFFFE",
                textDecoration: "none",
                padding: "8px 18px",
                borderRadius: "8px",
                backgroundColor: "#951A80",
                transition: "filter 200ms ease, transform 200ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter =
                  "brightness(1.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter =
                  "brightness(1)";
              }}
            >
              S&apos;inscrire
            </a>

            {/* Burger — mobile uniquement */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn-burger"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: isScrolled ? "#1a1a2e" : "white",
                display: "none", // affiché via CSS responsive
                padding: "4px",
              }}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ── MENU MOBILE ── */}
        <div
          style={{
            backgroundColor: "white",
            overflow: "hidden",
            maxHeight: mobileOpen ? "400px" : "0px",
            transition: "max-height 350ms ease",
            boxShadow: mobileOpen ? "0 8px 24px rgba(0,0,0,0.10)" : "none",
          }}
        >
          <div
            style={{
              padding: "16px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {/* Liens jeux */}
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#1a1a2e",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid #E5E7EB",
                  display: "block",
                }}
              >
                {link.isZeBall ? <ZeBallText onDark={false} /> : link.label}
              </a>
            ))}

            {/* Boutons mobile */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "16px",
              }}
            >
              <a
                href="https://iziloto.cm/login"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#1a1a2e",
                  textDecoration: "none",
                  padding: "12px 0",
                  border: "1.5px solid #1a1a2e",
                  borderRadius: "8px",
                  textAlign: "center",
                  display: "block",
                }}
              >
                Se connecter
              </a>
              <a
                href="https://iziloto.cm/register"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#1a1a2e",
                  textDecoration: "none",
                  padding: "12px 0",
                  backgroundColor: "#F5C518",
                  borderRadius: "8px",
                  textAlign: "center",
                  display: "block",
                }}
              >
                S&apos;inscrire
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── CSS RESPONSIVE ── */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .btn-nav-desktop {
            display: none !important;
          }
          .nav-links-desktop {
            display: none !important;
          }
          .btn-burger {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .btn-burger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
