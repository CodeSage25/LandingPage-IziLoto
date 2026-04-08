// components/FAQSection.tsx
"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

/* ═══════════════════════════════════════════
   INTERFACES
═══════════════════════════════════════════ */

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

/* ═══════════════════════════════════════════
   DONNÉES FAQ
═══════════════════════════════════════════ */

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "Comment créer un compte iziloto ?",
    answer:
      "Pour créer un compte iziloto, il faut être âgé d'au moins 21 ans. L'inscription est simple, rapide et fiable : rends-toi sur iziloto.cm et clique sur S'inscrire.",
  },
  {
    id: 2,
    question: "Comment parier en ligne ?",
    answer:
      "En créant simplement un compte sur iziloto (inscription facile et rapide), tu pourras parier en ligne directement depuis ton téléphone ou ordinateur, à tout moment.",
  },
];

/* ═══════════════════════════════════════════
   COMPOSANT ACCORDÉON ITEM
═══════════════════════════════════════════ */

function AccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        border: "1px solid #E5E7EB",
        overflow: "hidden",
        marginBottom: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        transition: "box-shadow 200ms ease",
      }}
    >
      {/* ── EN-TÊTE QUESTION ── */}
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        style={{
          width: "100%",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Question */}
        <span
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            color: "#1a1a2e",
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {item.question}
        </span>

        {/* Icône rotative */}
        <div
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 300ms ease",
            color: "#951A80",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ChevronDown size={22} strokeWidth={2.5} />
        </div>
      </button>

      {/* ── RÉPONSE ANIMÉE ── */}
      <div
        id={`faq-answer-${item.id}`}
        ref={contentRef}
        role="region"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight ?? 200}px`
            : "0px",
          overflow: "hidden",
          transition: "max-height 350ms ease",
        }}
      >
        <div
          style={{
            padding: "0 24px 20px",
            borderTop: "1px solid #E5E7EB",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.9rem",
              color: "#6B7280",
              lineHeight: 1.7,
              margin: 0,
              paddingTop: "16px",
            }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   COMPOSANT PRINCIPAL
═══════════════════════════════════════════ */

export default function FAQSection() {
  return (
    <section
      aria-label="Questions fréquentes — Débuter sur IziLoto"
      style={{
        backgroundColor: "#F8F9FB",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        {/* ── TITRE ── */}
        <h2
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
            color: "#1a1a2e",
            textAlign: "center",
            margin: 0,

            letterSpacing: "0.02em",
          }}
        >
          Débuter sur <span className="text-[#951A80]">iziLoto.cm</span>
        </h2>

        {/* ── SOUS-TITRE ── */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "1rem",
            color: "#6B7280",
            textAlign: "center",
            marginTop: "8px",
            marginBottom: "40px",
          }}
        >
          Toutes les réponses pour commencer à jouer
        </p>

        {/* ── ACCORDÉON ── */}
        <div role="list" aria-label="Questions fréquentes">
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} role="listitem">
              <AccordionItem item={item} />
            </div>
          ))}
        </div>

        {/* ── CTA INSCRIPTION ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            padding: "32px",
            backgroundColor: "white",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 600,
              fontSize: "1.05rem",
              color: "#1a1a2e",
              margin: "0 0 16px",
            }}
          >
            Prêt à tenter votre chance ?
          </p>
          <a
            href="https://iziloto.cm/register"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#951A80",
              color: "#FEFFFE",
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "12px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "filter 200ms ease, transform 200ms ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.filter = "brightness(1.08)";
              el.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.filter = "brightness(1)";
              el.style.transform = "scale(1)";
            }}
          >
            Créer mon compte gratuitement →
          </a>
        </div>
      </div>
    </section>
  );
}
