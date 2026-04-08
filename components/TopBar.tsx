// components/TopBar.tsx
"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";

/* ═══════════════════════════════════════════
   ICÔNE SVG 21+
═══════════════════════════════════════════ */

function Icon21Plus({ size = 20 }: { size?: number }) {}

/* ═══════════════════════════════════════════
   COMPOSANT TOPBAR
═══════════════════════════════════════════ */

export default function TopBar() {
  const { isScrolled } = useScrollPosition();

  return (
    <div
      aria-label="Message jeu responsable"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#1a1a2e",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        // Disparition progressive au scroll
        opacity: isScrolled ? 0 : 1,
        transform: isScrolled ? "translateY(-100%)" : "translateY(0)",
        transition: "opacity 300ms ease, transform 300ms ease",
        pointerEvents: isScrolled ? "none" : "auto",
      }}
    >
      <Icon21Plus size={20} />
      <span
        style={{
          color: "white",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0.03em",
          fontWeight: 400,
        }}
      >
        Jeu interdit aux -21 ans — Jouez responsable
      </span>
    </div>
  );
}
