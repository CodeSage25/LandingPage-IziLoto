// components/UniversSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Crown,
  Zap,
  Timer,
  Ticket,
  Cpu,
  Gamepad2,
  BanknoteIcon,
  Clock,
  HandCoins,
  TrendingUp,
  ArrowRight,
  Play,
  ImageOff,
} from "lucide-react";

/* ═══════════════════════════════════════════
   INTERFACES
═══════════════════════════════════════════ */

interface GameMeta {
  icon: React.ReactNode;
  label: string;
}

interface GameCard {
  id: string;
  anchorId: string;
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  fallbackFilename: string;
  fallbackBg: string;
  badgeIcon: React.ReactNode;
  badgeLabel: string;
  badgeIconColor: string;
  cardIcon: React.ReactNode;
  glowColor: string;
  metas: GameMeta[];
  vitrineUrl: string;
  jouerUrl: string;
}

/* ═══════════════════════════════════════════
   DONNÉES
═══════════════════════════════════════════ */

const CARDS: GameCard[] = [
  {
    id: "loto10",
    anchorId: "loto10-card",
    title: "Loto 10",
    description:
      "10 000 000 F à gagner, un tirage toutes les 30 minutes. Choisis 10 numéros et tente le jackpot.",
    imageSrc: "/images/Logo_Loto10_ET FOND (1).png",
    imageAlt: "Loto 10 — Carte du jeu",
    fallbackFilename: "Logo_Loto10_ET FOND (1).png",
    fallbackBg: "linear-gradient(135deg, #0f172a, #1f2a44)",
    badgeIcon: <Crown size={14} strokeWidth={1.5} />,
    badgeLabel: "Jackpot",
    badgeIconColor: "rgba(149,26,128,0.95)",
    cardIcon: <Ticket size={20} strokeWidth={1.5} />,
    glowColor: "rgba(149,26,128,0.14)",
    metas: [
      {
        icon: <BanknoteIcon size={14} strokeWidth={1.5} />,
        label: "10 000 000 F",
      },
      {
        icon: <Clock size={14} strokeWidth={1.5} />,
        label: "30 min",
      },
    ],
    vitrineUrl: "https://loto10-landing-page.vercel.app/",
    jouerUrl: "https://iziloto.cm/lottery/games/dyce-games-loto10",
  },
  {
    id: "loto9",
    anchorId: "loto9-card",
    title: "Loto 9 Expresso",
    description: "1 000 000 F à gagner, tirage toutes les 2 minutes.",
    imageSrc: "/images/Logo_Loto9_Expresso.png",
    imageAlt: "Loto 9 Expresso — Carte du jeu",
    fallbackFilename: "Logo_Loto9_Expresso.png",
    fallbackBg: "linear-gradient(135deg, #0b1220, #2b2f55)",
    badgeIcon: <Zap size={14} strokeWidth={1.5} />,
    badgeLabel: "Expresso",
    badgeIconColor: "rgba(99,102,241,0.95)",
    cardIcon: <Cpu size={20} strokeWidth={1.5} />,
    glowColor: "rgba(99,102,241,0.16)",
    metas: [
      {
        icon: <BanknoteIcon size={14} strokeWidth={1.5} />,
        label: "1 000 000 F",
      },
      {
        icon: <Clock size={14} strokeWidth={1.5} />,
        label: "2 min",
      },
      {
        icon: <HandCoins size={14} strokeWidth={1.5} />,
        label: "dès 100 F",
      },
    ],
    vitrineUrl: "https://loto9expresso.vercel.app/",
    jouerUrl: "https://iziloto.cm/lottery/games/dyce-games-loto9",
  },
  {
    id: "zeball",
    anchorId: "zeball-card",
    title: (
      <>
        <span style={{ color: "#1a1a2e" }}>Ze</span>
        <span style={{ color: "#E63946" }}>Ball</span>
      </>
    ),
    description:
      "Jusqu'à 8 fois sur votre mise, un résultat toutes les 30 secondes. Le jeu le plus rapide de la plateforme.",
    imageSrc: "/images/Fond_Vert_3e.png",
    imageAlt: "ZeBall — Carte du jeu",
    fallbackFilename: "Fond_Vert_3e.png",
    fallbackBg: "linear-gradient(135deg, #111827, #2d1220)",
    badgeIcon: <Timer size={14} strokeWidth={1.5} />,
    badgeLabel: "Ultra rapide",
    badgeIconColor: "rgba(239,68,68,0.95)",
    cardIcon: <Gamepad2 size={20} strokeWidth={1.5} />,
    glowColor: "rgba(239,68,68,0.16)",
    metas: [
      {
        icon: <TrendingUp size={14} strokeWidth={1.5} />,
        label: "jusqu'à 8 fois",
      },
      {
        icon: <Clock size={14} strokeWidth={1.5} />,
        label: "30 s",
      },
    ],
    vitrineUrl: "https://ze-ball-landing-page.vercel.app/",
    jouerUrl: "https://iziloto.cm/casino/games/dyce-games-zeball",
  },
];

/* ═══════════════════════════════════════════
   COMPOSANT CARD
═══════════════════════════════════════════ */

function GameCard({ card }: { card: GameCard }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [discoverHovered, setDiscoverHovered] = useState(false);
  const [playHovered, setPlayHovered] = useState(false);

  return (
    <article
      id={card.anchorId}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        border: "1px solid #e2e8f0",

        backgroundColor: "#F9F8FB",

        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 300ms ease, box-shadow 300ms ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── IMAGE / FALLBACK ── */}
      <div
        style={{
          position: "relative",
          paddingBottom: "40%", // ← ratio hauteur/largeur : 65% ≈ ratio 3:2

          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {/* Overlay subtil */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.04), rgba(149,26,128,0.06))",
          }}
        />

        {!imgError ? (
          <Image
            src={card.imageSrc}
            alt={card.imageAlt}
            fill
            style={{
              objectFit: "cover", // ← cover : remplit sans espace vide
              objectPosition: "center",
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback coloré */
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: card.fallbackBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-hidden="true"
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 999,
                background: "rgba(255,255,255,0.10)",
                padding: "6px 14px",
              }}
            >
              <ImageOff
                size={16}
                color="rgba(255,255,255,0.7)"
                strokeWidth={1.5}
              />
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "var(--font-inter), sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {card.fallbackFilename}
              </span>
            </div>
          </div>
        )}

        {/* Badge type de jeu */}
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.20)",
              backgroundColor: "rgba(0,0,0,0.35)",
              padding: "4px 12px",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span style={{ color: card.badgeIconColor, display: "flex" }}>
              {card.badgeIcon}
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "white",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {card.badgeLabel}
            </span>
          </div>
        </div>
      </div>

      {/* ── CONTENU ── */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Titre + icône */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            <h3
              className="font-title-sub"
              style={{
                fontSize: "1.2rem",
                letterSpacing: "-0.01em",
                color: "#0f172a",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                marginTop: 8,
                fontSize: "0.875rem",
                color: "#64748b",
                lineHeight: 1.6,
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {card.description}
            </p>
          </div>

          {/* Icône décorative */}
          <div
            style={{
              flexShrink: 0,
              borderRadius: 12,
              border: "1px solid #e2e8f0",
              backgroundColor: "white",
              padding: 8,
              color: "#334155",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {card.cardIcon}
          </div>
        </div>

        {/* Méta-badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 20,
          }}
        >
          {card.metas.map((meta, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                borderRadius: 999,
                backgroundColor: "#f8fafc",
                padding: "4px 12px",
                fontSize: 12,
                fontWeight: 500,
                color: "#475569",
                fontFamily: "var(--font-inter), sans-serif",
                boxShadow: "inset 0 0 0 1px #e2e8f0",
              }}
            >
              <span style={{ display: "flex", color: "#64748b" }}>
                {meta.icon}
              </span>
              {meta.label}
            </span>
          ))}
        </div>

        {/* Boutons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginTop: 24,
          }}
        >
          {/* Découvrir */}
          <a
            href={card.vitrineUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setDiscoverHovered(true)}
            onMouseLeave={() => setDiscoverHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              borderRadius: 12,
              backgroundColor: discoverHovered ? "#951A80" : "#951A80",
              padding: "12px 16px",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "white",
              textDecoration: "none",
              fontFamily: "var(--font-poppins), sans-serif",
              boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
              transition: "background-color 200ms ease",
              whiteSpace: "nowrap",
            }}
          >
            Découvrir
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>

          {/* Jouer */}
          <a
            href="https://iziloto.cm/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setPlayHovered(true)}
            onMouseLeave={() => setPlayHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              borderRadius: 12,
              border: "1px solid #e2e8f0",
              backgroundColor: playHovered ? "#f8fafc" : "white",
              padding: "12px 16px",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#0f172a",
              textDecoration: "none",
              fontFamily: "var(--font-poppins), sans-serif",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              transition: "background-color 200ms ease",
              whiteSpace: "nowrap",
            }}
          >
            Jouer
            <Play size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* ── GLOW AU HOVER ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 300ms ease",
          background: `radial-gradient(50rem 22rem at 20% 0%, ${card.glowColor}, transparent 55%)`,
        }}
      />
    </article>
  );
}

/* ═══════════════════════════════════════════
   COMPOSANT PRINCIPAL
═══════════════════════════════════════════ */

export default function UniversSection() {
  return (
    <section
      aria-label="Nos 3 univers de jeux"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "white",
        scrollMarginTop: "80px", // ← compense la navbar sticky lors du scroll ancre
      }}
    >
      {/* ── HALOS DE FOND ── */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        {/* Halo haut centre */}
        <div
          style={{
            position: "absolute",
            top: -96,
            left: "50%",
            transform: "translateX(-50%)",
            width: 640,
            height: 288,
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(15,23,42,0.06), transparent)",
            filter: "blur(48px)",
          }}
        />
        {/* Halo bas droite */}
        <div
          style={{
            position: "absolute",
            bottom: -160,
            right: 0,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(149,26,128,0.14), transparent)",
            filter: "blur(48px)",
          }}
        />
      </div>

      {/* ── CONTENU ── */}
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "150px 24px 96px", // ← 80px stable au lieu de 200px instable
        }}
      >
        {/* En-tête */}
        <div style={{ textAlign: "center", maxWidth: 512, margin: "0 auto" }}>
          <h2
            className="font-title-section"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
              margin: 0,
            }}
          >
            Nos 3 univers de jeux
          </h2>
          <p
            style={{
              marginTop: 12,
              fontSize: "0.95rem",
              color: "#64748b",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Choisis ton univers préféré
          </p>
        </div>

        {/* Grille */}
        <div
          className="univers-grid"
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {CARDS.map((card) => (
            <GameCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* ── RESPONSIVE ── */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .univers-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .univers-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
