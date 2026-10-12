"use client";

import React, { useState, useEffect } from "react";
import { proposal } from "@/config/proposal";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Por que um site?", href: "#problema" },
    { label: "A Solução", href: "#solucao" },
    { label: "Prévia", href: "#previa" },
    { label: "SEO & IA", href: "#seo" },
    { label: "Anúncios", href: "#anuncios" },
    { label: "Painel", href: "#painel" },
    { label: "O que inclui", href: "#incluso" },
    { label: "Investimento", href: "#investimento" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Oficial + Agência */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a href="#topo" className="flex items-center space-x-3 group focus:outline-none">
              <PromoNoAlvoLogo className="h-10 sm:h-11 w-auto" variant="light" />
              <div className="hidden sm:block border-l border-slate-200 pl-3">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                  Proposta Comercial
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  por {proposal.agency.name}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Minimalista */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Header Clean */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#investimento"
              className="inline-flex items-center space-x-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#E50914] hover:bg-[#B91C1C] text-white transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <span>Ver Investimento (R$ 997)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Clean */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          <div className="py-2 px-3 mb-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-slate-400">Cliente:</p>
              <p className="text-sm font-bold text-slate-800">{proposal.client} • {proposal.brand}</p>
            </div>
            <span className="text-xs font-black text-[#E50914] bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
              R$ 997,00
            </span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 border-t border-slate-100">
            <a
              href="#investimento"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-[#E50914] text-white font-bold text-sm hover:bg-[#B91C1C] transition-colors"
            >
              <span>Ver Investimento (R$ 997,00)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
