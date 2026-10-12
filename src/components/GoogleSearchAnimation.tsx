"use client";

import React, { useEffect, useState, useRef } from "react";
import { Search, Mic } from "lucide-react";

const SEARCH_QUERY = "melhor fone bluetooth barato";

// Phases timings (ms)
// 0: empty bar blink    800
// 1: typing             2400
// 2: pause complete     600
// 3: skeleton loading   700
// 4: results appear     900
// 5: highlight result   2200
// 6: fade out / reset   700
const PHASE_DURATIONS = [800, 2400, 600, 700, 900, 2200, 700];

const RESULTS = [
  {
    url: "promonoalvo.com.br › blog › fones-bluetooth",
    title: "5 Fones Bluetooth com Bom Custo-Benefício – Promo no Alvo",
    desc: "Reunimos os melhores fones sem fio abaixo de R$ 200. Comparativos, reviews e links diretos para os grupos de ofertas.",
    isTarget: true,
  },
  {
    url: "techzoom.com.br › fones › bluetooth-baratos",
    title: "Os 7 melhores fones Bluetooth baratos de 2026",
    desc: "Confira nossa lista com custo-benefício, qualidade de som e avaliações para cada modelo analisado.",
    isTarget: false,
  },
  {
    url: "mercadolivre.com.br › fones-bluetooth",
    title: "Fone Bluetooth Barato – Mercado Livre",
    desc: "Compre Fone Bluetooth Barato parcelado sem juros! Confira nossas incríveis ofertas e promoções.",
    isTarget: false,
  },
];

export function GoogleSearchAnimation() {
  const [phase, setPhase] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Typing during phase 1
  useEffect(() => {
    if (phase === 1) {
      setTypedChars(0);
      let count = 0;
      const delay = PHASE_DURATIONS[1] / SEARCH_QUERY.length;
      typeIntervalRef.current = setInterval(() => {
        count++;
        setTypedChars(count);
        if (count >= SEARCH_QUERY.length) {
          if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
        }
      }, delay);
    } else {
      if (typeIntervalRef.current) clearInterval(typeIntervalRef.current);
    }
  }, [phase]);

  // Fade out on reset phase
  useEffect(() => {
    if (phase === 6) setVisible(false);
    else setVisible(true);
  }, [phase]);

  // Phase progression
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPhase((p) => (p >= 6 ? 0 : p + 1));
    }, PHASE_DURATIONS[phase]);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [phase]);

  const displayedText = SEARCH_QUERY.slice(0, typedChars);
  const showCursor = phase <= 2;
  const showSkeleton = phase === 3;
  const showResults = phase >= 4;
  const highlightTarget = phase >= 5;

  return (
    <div
      className="w-full max-w-2xl mx-auto select-none transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Google wordmark */}
      <div className="flex items-center gap-1.5 mb-5">
        {["G","o","o","g","l","e"].map((ch, i) => (
          <span
            key={i}
            className="text-2xl font-black leading-none"
            style={{ color: ["#4285F4","#EA4335","#FBBC05","#4285F4","#34A853","#EA4335"][i] }}
          >
            {ch}
          </span>
        ))}
      </div>

      {/* Search bar */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-full border-2 bg-white mb-2 transition-all duration-300"
        style={{
          borderColor: phase >= 1 ? "#93C5FD" : "#E2E8F0",
          boxShadow: phase >= 1 ? "0 4px 20px rgba(147,197,253,0.25)" : "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <Search className="w-4 h-4 text-slate-400 shrink-0" />
        <div className="flex-1 text-sm text-slate-800 font-medium min-h-[20px] flex items-center">
          <span>{displayedText}</span>
          {showCursor && (
            <span className="inline-block w-0.5 h-4 bg-blue-500 ml-px animate-pulse" />
          )}
        </div>
        <Mic className="w-4 h-4 text-slate-300 shrink-0" />
      </div>

      {/* Result count */}
      <div
        className="text-[11px] text-slate-400 mb-3 pl-1 transition-opacity duration-300"
        style={{ opacity: showResults ? 1 : 0 }}
      >
        Cerca de 4.320.000 resultados (0,42 segundos)
      </div>

      {/* Skeleton */}
      {showSkeleton && (
        <div className="space-y-5 pt-1">
          {[85, 100, 72].map((w, i) => (
            <div key={i} className="space-y-2 animate-pulse">
              <div className="h-3 bg-slate-100 rounded" style={{ width: `${w * 0.5}%` }} />
              <div className="h-4 bg-slate-200 rounded" style={{ width: `${w}%` }} />
              <div className="h-3 bg-slate-100 rounded" style={{ width: `${w * 0.8}%` }} />
            </div>
          ))}
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div className="space-y-4">
          {RESULTS.map((r, i) => {
            const isHighlighted = r.isTarget && highlightTarget;
            return (
              <div
                key={i}
                className="rounded-xl p-3 transition-all duration-500"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  background: isHighlighted ? "#EFF6FF" : "#FFFFFF",
                  border: isHighlighted ? "2px solid #93C5FD" : "2px solid transparent",
                  boxShadow: isHighlighted ? "0 4px 18px rgba(147,197,253,0.3)" : "none",
                  transform: isHighlighted ? "scale(1.01)" : "scale(1)",
                }}
              >
                {/* URL row */}
                <div className="flex items-center gap-2 mb-1">
                  {r.isTarget && (
                    <div className="w-4 h-4 rounded-full bg-[#E50914] flex items-center justify-center shrink-0">
                      <span className="text-[7px] font-black text-white">P</span>
                    </div>
                  )}
                  <span className="text-xs text-slate-400 truncate">{r.url}</span>
                  {isHighlighted && (
                    <span className="shrink-0 text-[10px] font-bold text-[#E50914] bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-full animate-pulse">
                      ← Aqui!
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4
                  className="text-sm font-semibold mb-1 leading-snug transition-colors duration-300"
                  style={{ color: isHighlighted ? "#1D4ED8" : "#2563EB" }}
                >
                  {r.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{r.desc}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
