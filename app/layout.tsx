import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Criatório Nossa Senhora de Nazareth | Ovos Férteis e Galinhas Poedeiras em Saquarema - RJ",
  description:
    "Criatório em Saquarema com produção própria desde 2018. Ovos férteis, pintinhos, matrizes e galinhas poedeiras com qualidade genética e manejo responsável. Atendimento direto com o produtor.",
  keywords: [
    "Ovos férteis em Saquarema",
    "Galinhas poedeiras em Saquarema RJ",
    "Criatório em Saquarema",
    "Pintinhos Saquarema",
    "Matrizes galinhas RJ",
  ],
  openGraph: {
    title:
      "Criatório Nossa Senhora de Nazareth | Ovos Férteis e Galinhas Poedeiras em Saquarema - RJ",
    description:
      "Produção própria desde 2018 em Saquarema - RJ. Ovos férteis, pintinhos, matrizes e galinhas poedeiras com qualidade genética e atendimento direto.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
      },
    ],
    apple: "/icon.png",
  },
};

export const viewport = {
  themeColor: "#6b7a3a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
