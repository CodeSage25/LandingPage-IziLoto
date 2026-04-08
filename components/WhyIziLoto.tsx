// components/WhyIziLoto.tsx — VERSION COMPLÈTE MISE À JOUR
"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import {
  Trophy,
  ShieldCheck,
  Scale,
  MapPin,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ═══════════════════════════════════════════
   INTERFACES
═══════════════════════════════════════════ */

interface WhyCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  text: string;
}

/* ═══════════════════════════════════════════
   DONNÉES DES 6 CARDS
═══════════════════════════════════════════ */

const WHY_CARDS: WhyCard[] = [
  {
    id: 1,
    icon: <Trophy size={36} color="#951A80" strokeWidth={1.8} />,
    title: "Gains garantis",
    text: "Ce que vous gagnez vous appartient. Paiements rapides et fiables à chaque tirage, petits ou grands.",
  },
  {
    id: 2,
    icon: <ShieldCheck size={36} color="#951A80" strokeWidth={1.8} />,
    title: "Sécurité totale",
    text: "Vos données personnelles et transactions sont protégées par des systèmes de niveau mondial.",
  },
  {
    id: 3,
    icon: <Scale size={36} color="#951A80" strokeWidth={1.8} />,
    title: "Transparence absolue",
    text: "Tirages certifiés, opérateur sous licence réglementaire MINAT au Cameroun. 100% équitable.",
  },
  {
    id: 4,
    icon: <MapPin size={36} color="#951A80" strokeWidth={1.8} />,
    title: "100% camerounais",
    text: "Une plateforme qui vous comprend.",
  },
  {
    id: 5,
    icon: <Zap size={36} color="#951A80" strokeWidth={1.8} />,
    title: "Paiement instantané",
    text: "Dépôt et retrait via MTN Mobile Money et Orange Money. Rapide, simple, sans friction.",
  },
  {
    id: 6,
    icon: <Target size={36} color="#951A80" strokeWidth={1.8} />,
    title: "Jeu équitable & certifié",
    text: "Rejoignez des milliers de Camerounais qui jouent en toute sérénité. La loterie telle qu'elle doit être.",
  },
];

/* ═══════════════════════════════════════════
   CONSTANTES
═══════════════════════════════════════════ */

const AUTO_SCROLL_DELAY = 3000; // ms entre chaque défilement auto
const TOTAL = WHY_CARDS.length; // 6

/* ═══════════════════════════════════════════
   COMPOSANT MINI-CARD
═══════════════════════════════════════════ */

function WhyCardComponent({ card }: { card: WhyCard }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "28px 24px",
        boxShadow: hovered
          ? "0 12px 32px rgba(0,0,0,0.12)"
          : "0 4px 16px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 300ms ease, box-shadow 300ms ease",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        height: "100%",
        boxSizing: "border-box" as const,
        userSelect: "none" as const,
      }}
    >
      <div>{card.icon}</div>
      <h3
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          color: "#1a1a2e",
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.875rem",
          color: "#6B7280",
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        {card.text}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════
   COMPOSANT BOUTON FLÈCHE
═══════════════════════════════════════════ */

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={direction === "left" ? "Précédent" : "Suivant"}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "none",

        boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background-color 200ms ease, transform 200ms ease",
        transform: hovered ? "scale(1.08)" : "scale(1)",
        flexShrink: 0,
        zIndex: 10,
      }}
    >
      {direction === "left" ? (
        <ChevronLeft
          size={22}
          color={hovered ? "#1a1a2e" : "#6B7280"}
          strokeWidth={2}
        />
      ) : (
        <ChevronRight
          size={22}
          color={hovered ? "#1a1a2e" : "#6B7280"}
          strokeWidth={2}
        />
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════
   COMPOSANT PRINCIPAL
═══════════════════════════════════════════ */

export default function WhyIziLoto() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Détection mobile (< 768px) → 1 card visible
  // Tablette (768-1024px) → 2 cards
  // Desktop (> 1024px) → 3 cards
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setVisibleCount(1);
        setIsMobile(true);
      } else if (w < 1024) {
        setVisibleCount(2);
        setIsMobile(false);
      } else {
        setVisibleCount(3);
        setIsMobile(false);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Navigation suivant (loop circulaire)
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TOTAL);
  }, []);

  // Navigation précédent (loop circulaire)
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
  }, []);

  // Auto-scroll toutes les AUTO_SCROLL_DELAY ms
  useEffect(() => {
    if (isPaused) return;

    autoScrollRef.current = setInterval(() => {
      handleNext();
    }, AUTO_SCROLL_DELAY);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isPaused, handleNext]);

  // Pause au survol
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Cards visibles dans l'ordre circulaire
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % TOTAL;
      cards.push({ ...WHY_CARDS[index], _key: `${WHY_CARDS[index].id}-${i}` });
    }
    return cards;
  };

  return (
    <section
      aria-label="Pourquoi jouer sur IziLoto"
      style={{ backgroundColor: "#F8F9FB", padding: "80px 0" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── EN-TÊTE ── */}
      <div style={{ textAlign: "center", padding: "0 24px" }}>
        <h2
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
            color: "#1a1a2e",
            margin: 0,

            letterSpacing: "0.02em",
          }}
        >
          POURQUOI JOUER SUR <span className="text-[#951A80]">iziLoto.cm</span>
        </h2>
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#951A80",
            borderRadius: "2px",
            margin: "12px auto 0",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── CARROUSEL ── */}
      <div
        style={{
          maxWidth: "960px",
          margin: "48px auto 0",
          padding: "0 24px",
        }}
      >
        {/* Wrapper flèches + cards */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "16px",
          }}
        >
          {/* Flèche gauche */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <ArrowButton direction="left" onClick={handlePrev} />
          </div>

          {/* Zone cards avec overflow hidden */}
          <div style={{ flex: 1, overflow: "hidden" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
                gap: "20px",
                // Transition douce sur le changement de contenu
                transition: "opacity 300ms ease",
              }}
            >
              {getVisibleCards().map((card) => (
                <WhyCardComponent key={card._key} card={card} />
              ))}
            </div>
          </div>

          {/* Flèche droite */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <ArrowButton direction="right" onClick={handleNext} />
          </div>
        </div>

        {/* ── PAGINATION DOTS ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            marginTop: "32px",
          }}
          role="tablist"
          aria-label="Navigation carrousel"
        >
          {WHY_CARDS.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={currentIndex === idx}
              aria-label={`Aller à la card ${idx + 1}`}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: currentIndex === idx ? "24px" : "8px",
                height: "8px",
                borderRadius: currentIndex === idx ? "4px" : "50%",
                border: "none",
                backgroundColor: currentIndex === idx ? "#951A80" : "#E5E7EB",
                cursor: "pointer",
                padding: 0,
                transition: "all 300ms ease",
              }}
            />
          ))}
        </div>

        {/* Indicateur auto-scroll */}
        <p
          style={{
            textAlign: "center",
            marginTop: "12px",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.75rem",
            color: "#9CA3AF",
          }}
        >
          {isPaused ? "" : ""}
        </p>
      </div>
    </section>
  );
}
