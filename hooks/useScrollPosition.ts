// hooks/useScrollPosition.ts
"use client";

import { useState, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════
   INTERFACE
═══════════════════════════════════════════ */

interface ScrollPosition {
  /** Valeur exacte du scroll vertical en pixels */
  scrollY: number;
  /** true dès que scrollY > 0 */
  isScrolled: boolean;
  /** true dès que scrollY > 80 (utile pour la navbar) */
  isScrolledFar: boolean;
}

/* ═══════════════════════════════════════════
   HOOK
═══════════════════════════════════════════ */

export function useScrollPosition(): ScrollPosition {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = useCallback(() => {
    // window.scrollY est la valeur native du scroll vertical
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    // On vérifie qu'on est bien dans le navigateur (SSR safety)
    if (typeof window === "undefined") return;

    // Lecture initiale au montage
    setScrollY(window.scrollY);

    // Ajout du listener avec { passive: true } pour meilleures perfs
    // passive: true indique au navigateur qu'on ne fera pas
    // preventDefault() → il peut optimiser le scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Nettoyage au démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return {
    scrollY,
    isScrolled: scrollY > 0,
    isScrolledFar: scrollY > 80,
  };
}
