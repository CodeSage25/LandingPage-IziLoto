// components/Footer.tsx
"use client";

import { useState } from "react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Gamepad2,
  MessageCircle,
  PlayCircle,
  Globe,
} from "lucide-react";
// ← Facebook supprimé
function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   INTERFACES
═══════════════════════════════════════════ */

interface FooterLink {
  label: string;
  href: string;
  badge: React.ReactNode;
  isZeBall?: boolean;
}

/* ═══════════════════════════════════════════
   DONNÉES
═══════════════════════════════════════════ */

const GAME_LINKS: FooterLink[] = [
  {
    label: "Loto 10",
    href: "https://loto10-landing-page.vercel.app/",
    badge: (
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: "rgba(255,255,255,0.85)",
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        10
      </span>
    ),
  },
  {
    label: "Loto 9",
    href: "https://loto9expresso.vercel.app/",
    badge: (
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: "rgba(255,255,255,0.85)",
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        9
      </span>
    ),
  },
  {
    label: "ZeBall",
    href: "https://ze-ball-landing-page.vercel.app/",
    isZeBall: true,
    badge: (
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          fontFamily: "var(--font-poppins), sans-serif",
        }}
      >
        <span style={{ color: "white" }}>Ze</span>
        <span style={{ color: "#E63946" }}>B</span>
      </span>
    ),
  },
];

/* ═══════════════════════════════════════════
   SOUS-COMPOSANTS
═══════════════════════════════════════════ */

function ZeBallText() {
  return (
    <>
      <span style={{ color: "#1a1a2e" }}>Ze</span>
      <span style={{ color: "#E63946" }}>Ball</span>
    </>
  );
}

function SectionTitle({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.10)",
          backgroundColor: "rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F9F8FB",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          fontWeight: 600,
          fontSize: "1.05rem",
          letterSpacing: "-0.01em",
          color: "rgba(255,255,255,0.90)",
          margin: 0,
        }}
      >
        {label}
      </h3>
    </div>
  );
}

function PaymentBadge({
  code,
  name,
  sub,
}: {
  code: string;
  name: string;
  sub: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.10)",
        backgroundColor: "rgba(255,255,255,0.05)",
        padding: "8px 12px",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          backgroundColor: "rgba(255,255,255,0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "rgba(255,255,255,0.85)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {code}
        </span>
      </div>
      <div style={{ lineHeight: 1.3 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.55)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {sub}
        </div>
      </div>
    </div>
  );
}

function GameLinkRow({ link }: { link: FooterLink }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 12,
        border: `1px solid ${hovered ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.10)"}`,
        backgroundColor: hovered
          ? "rgba(255,255,255,0.10)"
          : "rgba(255,255,255,0.05)",
        padding: "12px 16px",
        textDecoration: "none",
        transition: "border-color 200ms ease, background-color 200ms ease",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            backgroundColor: "rgba(255,255,255,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {link.badge}
        </span>
        <span
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.75)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {link.isZeBall ? <ZeBallText /> : link.label}
        </span>
      </span>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 12,
          color: hovered ? "rgba(255,255,255,0.70)" : "rgba(255,255,255,0.45)",
          fontFamily: "var(--font-inter), sans-serif",
          transition: "color 200ms ease",
        }}
      >
        Visiter
        <ArrowRight size={16} strokeWidth={1.5} />
      </span>
    </a>
  );
}

function ContactRow({
  icon,
  title,
  sub,
  href,
  actionLabel,
  external = false,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  href: string;
  actionLabel: string;
  external?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 12,
        border: `1px solid ${hovered ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.10)"}`,
        backgroundColor: hovered
          ? "rgba(255,255,255,0.10)"
          : "rgba(255,255,255,0.05)",
        padding: "12px 16px",
        textDecoration: "none",
        transition: "border-color 200ms ease, background-color 200ms ease",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            backgroundColor: "rgba(255,255,255,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#F9F8FB",
            flexShrink: 0,
          }}
        >
          {icon}
        </span>
        <span style={{ lineHeight: 1.35 }}>
          <span
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            {title}
          </span>
          <span
            style={{
              display: "block",
              fontSize: 13,
              color: hovered
                ? "rgba(255,255,255,0.85)"
                : "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-inter), sans-serif",
              transition: "color 200ms ease",
            }}
          >
            {sub}
          </span>
        </span>
      </span>
      <span
        style={{
          fontSize: 12,
          color: hovered ? "rgba(255,255,255,0.70)" : "rgba(255,255,255,0.45)",
          fontFamily: "var(--font-inter), sans-serif",
          transition: "color 200ms ease",
          flexShrink: 0,
        }}
      >
        {actionLabel}
      </span>
    </a>
  );
}

/* ═══════════════════════════════════════════
   COMPOSANT PRINCIPAL
═══════════════════════════════════════════ */

export default function Footer() {
  const [jouerHovered, setJouerHovered] = useState(false);
  const [siteHovered, setSiteHovered] = useState(false);

  return (
    <footer
      aria-label="Pied de page IziLoto"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* ── SÉPARATEUR COURBE HAUT ── */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          transform: "translateY(-99%)",
          lineHeight: 0,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 130"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 130 }}
        >
          <path
            d="M0,96 C220,18 420,10 720,62 C1040,116 1220,106 1440,52 L1440,130 L0,130 Z"
            fill="#2F164E"
          />
        </svg>
      </div>

      {/* ── FOND + CONTENU ── */}
      <div style={{ backgroundColor: "#2F164E", position: "relative" }}>
        {/* Halos décoratifs */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 288,
            height: 288,
            borderRadius: "50%",
            filter: "blur(48px)",
            opacity: 0.3,
            background:
              "radial-gradient(circle at 30% 30%, rgba(149,26,128,0.35), rgba(149,26,128,0.25), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -96,
            left: -96,
            width: 320,
            height: 320,
            borderRadius: "50%",
            filter: "blur(48px)",
            opacity: 0.25,
            background:
              "radial-gradient(circle at 40% 40%, rgba(149,26,128,0.35), transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* ══════════════════════════════════════
              GRILLE 3 COLONNES
          ══════════════════════════════════════ */}
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 40,
              paddingTop: 56,
              paddingBottom: 40,
            }}
          >
            {/* ── COLONNE 1 — Marque ── */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a
                href="https://iziloto.cm/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: 6,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    letterSpacing: "-0.02em",
                    color: "#F2E9FF",
                  }}
                >
                  iziLoto
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.50)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  .cm
                </span>
              </a>

              <p
                style={{
                  marginTop: 12,
                  maxWidth: 280,
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.70)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                La plateforme de loterie la plus fiable au Cameroun
              </p>

              {/* Badges paiement */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  marginTop: 24,
                }}
              >
                <PaymentBadge
                  code="MTN"
                  name="Mobile Money"
                  sub="Paiement rapide"
                />
                <PaymentBadge code="OM" name="Orange Money" sub="Sécurisé" />
              </div>

              {/* Licence */}
              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-inter), sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  Licence MINAT 000001 du 21.02.2019
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-inter), sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  Le site est la propriété du PMUC
                </span>
              </div>
            </div>

            {/* ── COLONNE 2 — Jeux ── */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SectionTitle
                icon={<Gamepad2 size={18} strokeWidth={1.5} />}
                label="Nos jeux"
              />

              <nav
                aria-label="Liens des jeux"
                style={{
                  marginTop: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {GAME_LINKS.map((link) => (
                  <GameLinkRow key={link.label} link={link} />
                ))}

                {/* Bouton Jouer maintenant */}
                <a
                  href="https://iziloto.cm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setJouerHovered(true)}
                  onMouseLeave={() => setJouerHovered(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 12,
                    padding: "12px 16px",
                    textDecoration: "none",
                    background:
                      "linear-gradient(90deg, rgba(149,26,128,0.9), rgba(149,26,128,0.6))",
                    filter: jouerHovered ? "brightness(1.15)" : "brightness(1)",
                    transition: "filter 200ms ease",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 14,
                      fontWeight: 600,
                      color: "white",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    <PlayCircle size={18} strokeWidth={1.5} />
                    Jouer maintenant
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.90)",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    Ouvrir
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </a>
              </nav>
            </div>

            {/* ── COLONNE 3 — Contact ── */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SectionTitle
                icon={<MessageCircle size={18} strokeWidth={1.5} />}
                label="Nous contacter"
              />

              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <ContactRow
                  icon={<Phone size={18} strokeWidth={1.5} />}
                  title="Téléphone"
                  sub="+237 6 88 33 23 04"
                  href="tel:+237688332304"
                  actionLabel="Appeler"
                />
                <ContactRow
                  icon={<FacebookIcon />} // ← remplace <Facebook size={18} strokeWidth={1.5} />
                  title="Facebook"
                  sub="Rejoignez-nous"
                  href="https://www.facebook.com/people/IziLotocm/61585217354848/"
                  actionLabel="Ouvrir"
                  external
                />

                {/* Jeu responsable */}
                <div
                  style={{
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.10)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    padding: "14px 16px",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      backgroundColor: "rgba(255,255,255,0.10)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#F9F8FB",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <ShieldCheck size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.85)",
                        fontFamily: "var(--font-inter), sans-serif",
                      }}
                    >
                      Jeu responsable
                    </div>
                    <div
                      style={{
                        marginTop: 4,
                        fontSize: 12,
                        lineHeight: 1.55,
                        color: "rgba(255,255,255,0.60)",
                        fontFamily: "var(--font-inter), sans-serif",
                      }}
                    >
                      Jeu interdit aux{" "}
                      <strong style={{ color: "rgba(255,255,255,0.80)" }}>
                        -21 ans
                      </strong>
                      . Jouez avec modération.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════
              BARRE BAS
          ══════════════════════════════════════ */}
          <div style={{ paddingBottom: 40 }}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.10)",
                backgroundColor: "rgba(255,255,255,0.05)",
                padding: "16px 20px",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {/* Halo interne */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.6,
                  background:
                    "radial-gradient(circle at 20% 0%, rgba(149,26,128,0.18), transparent 55%), radial-gradient(circle at 80% 100%, rgba(149,26,128,0.22), transparent 55%)",
                  pointerEvents: "none",
                }}
              />

              <div
                className="footer-bottom-row"
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                {/* Copyright */}
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.60)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  © 2026{" "}
                  <strong style={{ color: "rgba(255,255,255,0.75)" }}>
                    PMUC SA
                  </strong>
                  . Tous droits réservés.
                </div>

                {/* Badges droite */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {/* Badge 21+ */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.10)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      padding: "6px 12px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        width: 24,
                        height: 24,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        backgroundColor: "rgba(255,255,255,0.10)",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.85)",
                        fontFamily: "var(--font-inter), sans-serif",
                      }}
                    >
                      21+
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.60)",
                        fontFamily: "var(--font-inter), sans-serif",
                      }}
                    >
                      Interdit aux -21 ans
                    </span>
                  </div>

                  {/* Lien site */}
                  <a
                    href="https://iziloto.cm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setSiteHovered(true)}
                    onMouseLeave={() => setSiteHovered(false)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      borderRadius: 999,
                      border: `1px solid ${siteHovered ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.10)"}`,
                      backgroundColor: siteHovered
                        ? "rgba(255,255,255,0.10)"
                        : "rgba(255,255,255,0.05)",
                      padding: "6px 12px",
                      fontSize: 12,
                      color: siteHovered
                        ? "rgba(255,255,255,0.85)"
                        : "rgba(255,255,255,0.65)",
                      fontFamily: "var(--font-inter), sans-serif",
                      textDecoration: "none",
                      transition:
                        "border-color 200ms ease, background-color 200ms ease, color 200ms ease",
                    }}
                  >
                    <Globe size={14} strokeWidth={1.5} />
                    iziloto.cm
                  </a>
                </div>
              </div>
            </div>

            {/* Note bas */}
            <div
              style={{
                marginTop: 16,
                fontSize: 11,
                color: "rgba(255,255,255,0.45)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Support &amp; paiements disponibles 7j/7 selon opérateur.
            </div>
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE ── */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
}
