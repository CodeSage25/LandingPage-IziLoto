// components/HeroSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Gamepad2,
  Lock,
  BadgeCheck,
  Smartphone,
  Ticket,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

/* ═══════════════════════════════════════════
   DONNÉES
═══════════════════════════════════════════ */

const GAME_CHIPS = [
  { label: "Loto 10", href: "#loto10-card" },
  { label: "Loto 9", href: "#loto9-card" },
  { label: "ZeBall", href: "#zeball-card" },
];

const TRUST_ITEMS = [
  { icon: <Lock size={16} strokeWidth={1.5} />, label: "Paiements sécurisés" },
  {
    icon: <BadgeCheck size={16} strokeWidth={1.5} />,
    label: "Licence  officielle",
  },
  {
    icon: <Smartphone size={16} strokeWidth={1.5} />,
    label: "Mobile Money accepté",
  },
];

const FLOAT_CHIPS = [
  {
    icon: <Ticket size={16} strokeWidth={1.5} />,
    label: "Tickets instantanés",
  },
  {
    icon: <ShieldCheck size={16} strokeWidth={1.5} />,
    label: "Transactions fiables",
  },
];

/* ═══════════════════════════════════════════
   SOUS-COMPOSANTS
═══════════════════════════════════════════ */

function ZeBall() {
  return (
    <>
      <span style={{ color: "white" }}>Ze</span>
      <span style={{ color: "#E63946" }}>Ball</span>
    </>
  );
}

function Chip({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 999,
        border: `1px solid ${hovered ? "rgba(255,255,255,0.30)" : "rgba(255,255,255,0.15)"}`,
        backgroundColor: hovered
          ? "rgba(255,255,255,0.10)"
          : "rgba(255,255,255,0.05)",
        padding: "6px 16px",
        fontSize: 12,
        fontWeight: 500,
        color: "rgba(255,255,255,0.75)",
        fontFamily: "var(--font-inter), sans-serif",
        textDecoration: "none",
        transition: "border-color 200ms ease, background-color 200ms ease",
        display: "inline-block",
      }}
    >
      {children}
    </a>
  );
}

/* ═══════════════════════════════════════════
   COMPOSANT PRINCIPAL
═══════════════════════════════════════════ */

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);
  const [btnPrimaryHovered, setBtnP] = useState(false);
  const [btnSecondaryHovered, setBtnS] = useState(false);
  const [discoverBtnHovered, setDiscover] = useState(false);

  return (
    <section
      aria-label="Section héro IziLoto"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* ── FOND DÉGRADÉ ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(60rem 40rem at 15% 20%, rgba(149,26,128,.22) 0%, rgba(149,26,128,0) 60%),
            radial-gradient(50rem 36rem at 85% 35%, rgba(230,57,70,.18) 0%, rgba(230,57,70,0) 55%),
            linear-gradient(135deg, #141032 0%, #251e63 45%, #141032 100%)
          `,
        }}
      />

      {/* ── GRILLE DÉCORATIVE ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.6,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "2.5rem 2.5rem",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 35%, black 0%, rgba(0,0,0,0) 70%)",
          maskImage:
            "radial-gradient(70% 60% at 50% 35%, black 0%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── SÉPARATEUR COURBE BAS ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <svg viewBox="0 0 1440 160" style={{ display: "block", width: "100%" }}>
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#0b1020" stopOpacity="0.0" />
              <stop offset="0.4" stopColor="#0b1020" stopOpacity="0.55" />
              <stop offset="1" stopColor="#0b1020" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 C240,140 480,140 720,92 C960,44 1200,28 1440,72 L1440,160 L0,160 Z"
            fill="#050716"
            fillOpacity="1"
          />
          <path
            d="M0,84 C240,142 480,140 720,96 C960,52 1200,34 1440,76"
            fill="none"
            stroke="url(#curveGrad)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* ══════════════════════════════════════
          CONTENU PRINCIPAL
      ══════════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "clamp(96px, 12vw, 128px) 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 48,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* ════════════════
            COLONNE GAUCHE
        ════════════════ */}
        <div className="hero-left" style={{ maxWidth: 560 }}>
          {/* Badge live */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.05)",
              padding: "8px 16px",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.9)",
                animation: "pulse_badge 1.4s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Tirages en direct
            </span>
          </div>

          {/* Titre H1 */}
          <h1
            className="font-title-hero"
            style={{
              marginTop: 24,
              fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.18,
              color: "white",
            }}
          >
            Jouez au Loto&nbsp;10
            <br /> Loto&nbsp;9 &amp;&nbsp;
            <span style={{ whiteSpace: "nowrap" }}>
              <ZeBall />
            </span>
            <br />
            <span
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.58em",
                fontWeight: 400,
                fontFamily: "var(--font-inter), sans-serif",
                letterSpacing: 0,
              }}
            >
              Sur une seule plateforme.
            </span>
          </h1>

          {/* Chips jeux */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginTop: 20,
            }}
          >
            {GAME_CHIPS.map((c) => (
              <Chip key={c.label} href={c.href}>
                {c.label}
              </Chip>
            ))}
          </div>

          {/* Sous-titre */}
          <p
            style={{
              marginTop: 20,
              maxWidth: 480,
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Inscrivez-vous, rechargez facilement et tentez votre chance depuis
            votre téléphone.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 12,
              marginTop: 32,
            }}
          >
            {/* Bouton principal */}
            <a
              href="https://iziloto.cm/register"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setBtnP(true)}
              onMouseLeave={() => setBtnP(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                borderRadius: 12,
                padding: "12px 24px",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                fontWeight: 600,
                fontFamily: "var(--font-poppins), sans-serif",
                color: "white",
                textDecoration: "none",
                backgroundColor: "#951A80",
                boxShadow: btnPrimaryHovered
                  ? "0 1rem 3rem rgba(149,26,128,0.55)"
                  : "0 1rem 2.5rem rgba(149,26,128,0.38)",
                transform: btnPrimaryHovered ? "scale(1.03)" : "scale(1)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
            >
              Je m&apos;inscris
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>

            {/* Bouton secondaire */}
            <a
              href="#loto10-card"
              onMouseEnter={() => setBtnS(true)}
              onMouseLeave={() => setBtnS(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                borderRadius: 12,
                border: `1px solid ${btnSecondaryHovered ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.20)"}`,
                backgroundColor: btnSecondaryHovered
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.03)",
                padding: "12px 24px",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                fontWeight: 500,
                fontFamily: "var(--font-poppins), sans-serif",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                transition:
                  "border-color 200ms ease, background-color 200ms ease",
              }}
            >
              Voir les jeux
              <Gamepad2 size={18} strokeWidth={1.5} />
            </a>
          </div>

          {/* Preuves de confiance */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginTop: 40,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.10)",
            }}
            className="trust-grid"
          >
            {TRUST_ITEMS.map(({ icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    width: 28,
                    height: 28,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.10)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    flexShrink: 0,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>

          {/* Licence */}
          <div
            style={{
              marginTop: 40,
              fontSize: 10,
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Licence MINAT 000001 du 21.02.2019
          </div>

          {/* Flèche animée */}
          <div
            aria-hidden="true"
            style={{
              marginTop: 32,
              display: "inline-flex",
              alignItems: "center",
              color: "rgba(255,255,255,0.55)",
              animation: "bounce_arrow 1.5s ease-in-out infinite",
            }}
          >
            <ChevronDown size={28} strokeWidth={1.5} />
          </div>
        </div>

        {/* ════════════════
            COLONNE DROITE — Image card
        ════════════════ */}
        <div
          className="hero-right"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 512,
              margin: "0 auto",
            }}
          >
            {/* Halo derrière la card */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: -24,
                borderRadius: 32,
                filter: "blur(32px)",
                background: `
                  radial-gradient(18rem 14rem at 30% 30%, rgba(149,26,128,.32) 0%, rgba(149,26,128,0) 65%),
                  radial-gradient(18rem 14rem at 75% 55%, rgba(230,57,70,.22) 0%, rgba(230,57,70,0) 70%),
                  linear-gradient(135deg, rgba(255,255,255,.06) 0%, rgba(255,255,255,0) 45%)
                `,
              }}
            />

            {/* Card principale */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 32,
                border: "1px solid rgba(255,255,255,0.15)",
                backgroundColor: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Mini header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                  padding: "16px 20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Logo IZ */}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,0.10)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 600,
                        fontSize: 13,
                        color: "white",
                      }}
                    >
                      *
                    </span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "rgba(255,255,255,0.90)",
                      }}
                    >
                      Aperçu
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      IziLoto.cm
                    </div>
                  </div>
                </div>
              </div>

              {/* Zone image */}
              <div style={{ position: "relative", height: 420 }}>
                {/* Image hero-bg */}
                {!imgError ? (
                  <Image
                    src="/images/OJOBBL.jpeg"
                    alt="Visuel promotionnel IziLoto"
                    fill
                    priority
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      filter: "saturate(1.05) contrast(1.05)",
                    }}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Fallback dégradé */
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, #141032 0%, #251e63 50%, #141032 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontWeight: 700,
                        fontSize: 28,
                        color: "rgba(255,255,255,0.15)",
                        letterSpacing: 4,
                      }}
                    >
                      IZILOTO
                    </span>
                  </div>
                )}

                {/* Overlay image */}
                {/* <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `
                      radial-gradient(30rem 18rem at 10% 10%, rgba(149,26,128,.22) 0%, rgba(149,26,128,0) 30%),
                      linear-gradient(180deg, rgba(10,12,25,0.10) 0%, rgba(10,12,25,0.55) 100%)
                    `,
                  }}
                /> */}

                {/* Chips flottantes */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    zIndex: 5,
                  }}
                >
                  {FLOAT_CHIPS.map(({ icon, label }) => (
                    <div
                      key={label}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,0.15)",
                        backgroundColor: "rgba(255,255,255,0.10)",
                        padding: "8px 12px",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          width: 28,
                          height: 28,
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          backgroundColor: "rgba(255,255,255,0.10)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          color: "white",
                        }}
                      >
                        {icon}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.85)",
                          fontFamily: "var(--font-inter), sans-serif",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Caption bas */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px 24px",
                    zIndex: 5,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      gap: 16,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-poppins), sans-serif",
                          fontWeight: 600,
                          fontSize: 14,
                          color: "rgba(255,255,255,0.95)",
                        }}
                      >
                        Jouez partout, à tout moment
                      </div>
                      <div
                        style={{
                          marginTop: 4,
                          fontSize: 12,
                          color: "rgba(255,255,255,0.65)",
                          fontFamily: "var(--font-inter), sans-serif",
                        }}
                      >
                        Une expérience mobile fluide, pensée pour le Cameroun.
                      </div>
                    </div>
                    <a
                      href="#loto10-card"
                      onMouseEnter={() => setDiscover(true)}
                      onMouseLeave={() => setDiscover(false)}
                      style={{
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        borderRadius: 12,
                        border: `1px solid ${discoverBtnHovered ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.15)"}`,
                        backgroundColor: discoverBtnHovered
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(255,255,255,0.10)",
                        padding: "8px 12px",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.85)",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 500,
                        textDecoration: "none",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        transition:
                          "background-color 200ms ease, border-color 200ms ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Découvrir
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent coin */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 64,
                height: 64,
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.10)",
                backgroundColor: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                transform: "rotate(10deg)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes bounce_arrow {
          0%, 100% { transform: translateY(0);      }
          50%       { transform: translateY(0.5rem); }
        }
        @keyframes pulse_badge {
          0%, 100% { opacity: 1;    }
          50%       { opacity: 0.45; }
        }
      `}</style>
      {/* ── RESPONSIVE ── */}
      <style jsx global>{`
        /* ── DESKTOP : deux colonnes côte à côte ── */
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
            align-items: center;
          }
          .hero-left {
            text-align: left;
            align-items: flex-start;
          }
          .hero-right {
            display: flex !important;
            justify-content: flex-end;
          }
        }

        /* ── TABLETTE / MOBILE : colonne gauche au-dessus, droite en dessous ── */
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            justify-items: center; /* centre horizontalement chaque enfant */
          }
          .hero-left {
            width: 100%;
            max-width: 600px !important; /* limite la largeur pour rester lisible */
            text-align: center; /* centre le texte */
            align-items: center; /* centre les éléments flex internes */
            display: flex;
            flex-direction: column;
          }
          .hero-right {
            display: flex !important; /* visible — en dessous du bloc gauche */
            justify-content: center; /* centré horizontalement */
            width: 100%;
            max-width: 520px;
          }
        }

        /* ── MOBILE PETIT : ajustements fins ── */
        @media (max-width: 640px) {
          .hero-right {
            max-width: 100%;
          }
          .trust-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }

        /* ── DESKTOP : trust-grid sur 3 colonnes ── */
        @media (min-width: 641px) {
          .trust-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
