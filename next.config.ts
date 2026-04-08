// next.config.mjs — VERSION COMPLÈTE
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Domaines autorisés pour next/image
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iziloto.cm",
      },
      {
        protocol: "https",
        hostname: "loto10-landing-page.vercel.app",
      },
      {
        protocol: "https",
        hostname: "loto9expresso.vercel.app",
      },
      {
        protocol: "https",
        hostname: "ze-ball-landing-page.vercel.app",
      },
    ],
  },
  // Désactive le header X-Powered-By pour la sécurité
  poweredByHeader: false,
};

export default nextConfig;
