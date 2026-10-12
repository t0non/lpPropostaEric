"use client";

import React, { useEffect, useState, useRef } from "react";
import { Search, Mic } from "lucide-react";

const SEARCH_QUERY = "melhor fone bluetooth barato";

// Phases:
// 0 = cursor blinking, empty
// 1 = typing query
// 2 = query complete, small pause
// 3 = results loading (skeleton)
// 4 = results visible
// 5 = highlight / hover on result
// 6 = pause + reset

const PHASE_DURATIONS = [800, 2200, 500, 700, 800, 2000, 600];

const RESULTS = [
  {
    url: "promonoalvo.com.br › blog › fones-bluetooth",
    title: "5 Fones Bluetooth com Bom Custo-Benefício – Promo no Alvo",
    desc: "Reunimos os melhores fones sem fio abaixo de R$ 200. Comparativos, reviews e links diretos para os grupos de ofertas de tecnologia.",
    isTarget: true,
  },
  {
    url: "techzoom.com.br › fones › bluetooth-baratos",
    title: "Os 7 melhores fones Bluetooth baratos de 2026",
    desc: "Confira nossa lista com custo-benefício, qualidade de som e avaliações de usuários para cada modelo analisado.",
    isTarget: false,
  },
  {
    url: "mercadolivre.com.br › fones-bluetooth",
    title: "Fone Bluetooth Barato – Mercado Livre",
    desc: "Envio grátis no dia. Compre Fone Bluetooth Barato parcelado sem juros! Confira nossas incríveis ofertas e promoções.",
    isTarget: false,
  },
];

export function GoogleSearchAnimation() {
  const [phase, setPhase] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // typing effect during phase 1
  useEffect(() => {
    if (phase === 1) {
      setTypedChars(0);
      let count = 0;
      const totalChars = SEARCH_QUERY.length;
      // type one char every ~80ms
      typeIntervalRef.current = setInterval(() => {
        count++;
        setTypedChars(count);
        if (count >= totalChars) {
          if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
        }
      }, SEARCH_QUERY.length > 0 ? PHASE_DURATIONS[1] / SEARCH_QUERY.length : 80);
    } else {
      if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
    }
  }, [phase]);

  // phase progression
  useEffect(() => {
    const advance = () => {
      setPhase((p) => {
        const next = p + 1;
        if (next > 6) return 0; // loop
        return next;
      });
    };
    timerRef.current = setTimeout(advance, PHASE_DURATIONS[phase]);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase]);

  const displayedText = SEARCH_QUERY.slice(0, typedChars);
  const showCursor = phase <= 2;
  const showSkeleton = phase === 3;
  const showResults = phase >= 4;
  const highlightTarget = phase >= 5;

  return (
    <div className="w-full max-w-2xl mx-auto select-none">
      {/* Google-style header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex items-center gap-0.5">
          <span className="text-xl font-black" style={{ color: "#4285F4" }}>G</span>
          <span className="text-xl font-black" style={{ color: "#EA4335" }}>o</span>
          <span className="text-xl font-black" style={{ color: "#FBBC05" }}>o</span>
          <span className="text-xl font-black" style={{ color: "#4285F4" }}>g</span>
          <span className="text-xl font-black" style={{ color: "#34A853" }}>l</span>
          <span className="text-xl font-black" style={{ color: "#EA4335" }}>e</span>
        </div>
        <span className="text-xs text-slate-400 font-medium mt-0.5">Busca</span>
      </div>

      {/* Search bar */}
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-full border-2 bg-white mb-1 transition-all duration-300 ${
          phase >= 1 ? "border-blue-400 shadow-md shadow-blue-100" : "border-slate-200 shadow-sm"
        }`}
      >
        <Search className="w-4 h-4 text-slate-400 shrink-0" />
        <div className="flex-1 text-sm text-slate-800 font-medium min-h-[20px] flex items-center">
          <span>{displayedText}</span>
          {showCursor && (
            <span className="inline-block w-0.5 h-4 bg-blue-500 ml-px animate-pulse" />
          )}
          {!showCursor && phase >= 2 && (
            <span className="text-slate-800">{displayedText.length === 0 ? "" : ""}</span>
          )}
        </div>
        <Mic className="w-4 h-4 text-slate-300 shrink-0" />
      </div>

      {/* Search stats bar */}
      {showResults && (
        <p className="text-[11px] text-slate-400 mb-3 pl-1 animate-fade-in">
          Cerca de 4.320.000 resultados (0,42 segundos)
        </p>
      )}

      {/* Skeleton loading */}
      {showSkeleton && (
        <div className="space-y-4 pt-2">
          {[80, 95, 70].map((w, i) => (
            <div key={i} className="space-y-2 animate-pulse">
              <div className="h-3 bg-slate-200 rounded" style={{ width: `${w * 0.55}%` }} />
              <div className="h-4 bg-slate-200 rounded" style={{ width: `${w}%` }} />
              <div className="h-3 bg-slate-200 rounded" style={{ width: `${w * 0.85}%` }} />
            </div>
          ))}
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div className="space-y-5 pt-1">
          {RESULTS.map((r, i) => {
            const isHighlighted = r.isTarget && highlightTarget;
            return (
              <div
                key={i}
                style={{
                  animationDelay: `${i * 100}ms`,
                  transitionDuration: "300ms",
                }}
                className={`rounded-xl p-3 transition-all cursor-pointer ${
                  isHighlighted
                    ? "bg-blue-50 border-2 border-blue-300 shadow-md shadow-blue-100 scale-[1.01]"
                    : "bg-white border border-transparent hover:border-slate-200"
                }`}
              >
                {/* URL */}
                <div className="flex items-center gap-2 mb-1">
                  {r.isTarget && (
                    <div className="w-4 h-4 rounded-full bg-[#E50914] flex items-center justify-center shrink-0">
                      <span className="text-[7px] font-black text-white">P</span>
                    </div>
                  )}
                  <span className="text-xs text-slate-500 truncate">{r.url}</span>
                  {isHighlighted && (
                    <span className="shrink-0 text-[10px] font-bold text-[#E50914] bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-full">
                      ← Este!
                    </span>
                  )}
                </div>
                {/* Title */}
                <h4
                  className={`text-sm font-semibold mb-1 leading-snug transition-colors ${
                    isHighlighted ? "text-blue-700 underline decoration-blue-400" : "text-blue-600 hover:underline"
                  }`}
                >
                  {r.title}
                </h4>
                {/* Desc */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{r.desc}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Loop indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {PHASE_DURATIONS.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === phase
                ? "w-4 h-1.5 bg-[#E50914]"
                : "w-1.5 h-1.5 bg-slate-200"
            }`}
          />
        ))}
        <span className="text-[10px] text-slate-400 ml-2 font-medium">em loop</span>
      </div>
    </div>
  );
}
