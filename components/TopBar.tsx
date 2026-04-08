// components/TopBar.tsx
"use client";

import React from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Icon21Plus from "@/components/Icon21Plus";

export default function TopBar(): React.ReactElement {
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
        opacity: isScrolled ? 0 : 1,
        transform: isScrolled ? "translateY(-100%)" : "translateY(0)",
        transition: "opacity 300ms ease, transform 300ms ease",
        pointerEvents: isScrolled ? "none" : "auto",
      }}
    >
      <Icon21Plus size={20} color="white" />
      <span
        style={{
          color: "white",
          fontSize: "12px",
          fontFamily: "var(--font-inter), sans-serif",
          letterSpacing: "0.03em",
          fontWeight: 400,
        }}
      >
        Jeu interdit aux -21 ans — Jouez responsable
      </span>
    </div>
  );
}
