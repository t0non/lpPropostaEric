"use client";

import React from "react";
import { proposal } from "@/config/proposal";
import { PromoNoAlvoLogo } from "@/components/PromoNoAlvoLogo";
import { Globe, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-slate-200 gap-4">
          <div className="flex items-center space-x-3">
            <PromoNoAlvoLogo className="h-8 w-auto" variant="light" />
            <span className="text-xs text-slate-500">
              Proposta comercial personalizada para <strong>{proposal.client}</strong>
            </span>
          </div>

          <div className="flex items-center space-x-5 text-xs text-slate-500">
            <a
              href={proposal.agency.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center space-x-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>topmarketingbh.com.br</span>
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-600 transition-all flex items-center space-x-1 border border-slate-200"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">Topo</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>Confidencial • {proposal.agency.name} © 2026</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
