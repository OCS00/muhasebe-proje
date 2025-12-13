/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // İŞTE LOGONUN ORİJİNAL RENGİ
        primary: {
          DEFAULT: "#203478", // SMMM Logo Mavisi
          hover: "#1a2b63",   // Üstüne gelince az koyusu
          light: "#eef2ff",   // Çok açık mavi (Arka plan süsleri için)
        },
        secondary: {
          DEFAULT: "#334155", // Yazılar için koyu gri
          light: "#64748b",   // Açıklamalar için gri
        },
        bg: {
          DEFAULT: "#ffffff", // Zemin Beyaz
          alt: "#f8fafc",     // Alternatif Zemin (Açık Gri)
        }
      },
    },
  },
  plugins: [],
};