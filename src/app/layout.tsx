import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { proposal } from "@/config/proposal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Proposta Comercial | ${proposal.brand} • ${proposal.agency.name}`,
  description: `Apresentação comercial e técnica da plataforma digital ${proposal.brand} para ${proposal.client}.`,
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/logo_promonoalvo.png",
    shortcut: "/logo_promonoalvo.png",
    apple: "/logo_promonoalvo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="antialiased bg-white text-slate-900 selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
