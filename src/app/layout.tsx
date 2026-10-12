import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { proposal } from "@/config/proposal";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="pt-BR" className={sora.variable}>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="antialiased bg-white text-slate-900 selection:bg-red-600 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
