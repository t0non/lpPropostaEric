"use client";

import React, { useEffect, useState, useRef } from "react";

const SEARCH_QUERY = "melhor fone bluetooth barato";
const PHASE_DURATIONS = [700, 2600, 600, 650, 800, 2400, 600];

// Exact Google result page values
const ARIAL = "arial, sans-serif";
const TITLE_COLOR = "#1a0dab";
const BREADCRUMB_COLOR = "#4d5156";
const SNIPPET_COLOR = "#4d5156";
const COUNT_COLOR = "#70757a";

const RESULTS = [
  {
    breadcrumb: "promonoalvo.com.br › blog › fones-bluetooth",
    title: "5 Fones Bluetooth com Bom Custo-Benefício – Promo no Alvo",
    snippet:
      "Reunimos os melhores fones sem fio abaixo de R$ 200. Comparativos, reviews e links diretos para os grupos de ofertas de tecnologia.",
    isTarget: true,
  },
  {
    breadcrumb: "techzoom.com.br › fones › bluetooth-baratos",
    title: "Os 7 melhores fones Bluetooth baratos de 2026",
    snippet:
      "Confira nossa lista com custo-benefício, qualidade de som e avaliações de usuários para cada modelo analisado.",
    isTarget: false,
  },
  {
    breadcrumb: "mercadolivre.com.br › fones-bluetooth",
    title: "Fone Bluetooth Barato – Mercado Livre",
    snippet:
      "Envio grátis no dia. Compre Fone Bluetooth Barato parcelado sem juros! Confira nossas incríveis ofertas e promoções.",
    isTarget: false,
  },
];

const GOOGLE_COLORS: Record<string, string> = {
  G: "#4285F4", o1: "#EA4335", o2: "#FBBC05", g: "#4285F4", l: "#34A853", e: "#EA4335",
};
const LOGO_CHARS = [
  { ch: "G", color: "#4285F4" },
  { ch: "o", color: "#EA4335" },
  { ch: "o", color: "#FBBC05" },
  { ch: "g", color: "#4285F4" },
  { ch: "l", color: "#34A853" },
  { ch: "e", color: "#EA4335" },
];

export function GoogleSearchAnimation() {
  const [phase, setPhase] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [fade, setFade] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typeRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (phase === 1) {
      setTypedChars(0);
      let c = 0;
      const delay = PHASE_DURATIONS[1] / SEARCH_QUERY.length;
      typeRef.current = setInterval(() => {
        c++;
        setTypedChars(c);
        if (c >= SEARCH_QUERY.length && typeRef.current) clearInterval(typeRef.current);
      }, delay);
    } else {
      if (typeRef.current) clearInterval(typeRef.current);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 6) setFade(0);
    else if (phase === 0) { setTypedChars(0); setTimeout(() => setFade(1), 80); }
  }, [phase]);

  useEffect(() => {
    timerRef.current = setTimeout(
      () => setPhase((p) => (p >= 6 ? 0 : p + 1)),
      PHASE_DURATIONS[phase]
    );
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [phase]);

  const displayed = SEARCH_QUERY.slice(0, typedChars);
  const focused = phase >= 1;
  const showSkeleton = phase === 3;
  const showResults = phase >= 4;
  const highlighted = phase >= 5;

  return (
    <>
      {/* Load Roboto (same as Google uses) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Product+Sans:wght@700&display=swap');
        @keyframes g-blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes g-pulse { 0%,100%{opacity:1} 50%{opacity:.55} }
        @keyframes g-fadein { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div style={{
        fontFamily: ARIAL,
        textAlign: "left",
        opacity: fade,
        transition: "opacity 0.45s ease",
        width: "100%",
        maxWidth: "590px",
        margin: "0 auto",
        userSelect: "none",
      }}>

        {/* ── Google logo ── */}
        <div style={{ display: "flex", alignItems: "baseline", marginBottom: "20px" }}>
          {LOGO_CHARS.map((item, i) => (
            <span key={i} style={{
              fontFamily: "'Product Sans', 'Roboto', arial, sans-serif",
              fontSize: "28px",
              fontWeight: 700,
              color: item.color,
              letterSpacing: "-0.3px",
              lineHeight: 1,
            }}>
              {item.ch}
            </span>
          ))}
        </div>

        {/* ── Search bar ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "0 16px",
          height: "44px",
          borderRadius: "24px",
          border: focused ? "1px solid transparent" : "1px solid #dfe1e5",
          background: "#fff",
          boxShadow: focused
            ? "0 1px 6px rgba(32,33,36,.28), 0 0 0 1px rgba(32,33,36,.04)"
            : "none",
          transition: "box-shadow 0.2s ease",
          marginBottom: "8px",
        }}>
          {/* Search icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="7" stroke="#9aa0a6" strokeWidth="2" />
            <path d="M16.5 16.5L21 21" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" />
          </svg>

          {/* Query text */}
          <div style={{
            flex: 1,
            fontFamily: ARIAL,
            fontSize: "16px",
            color: "#202124",
            lineHeight: "22px",
            display: "flex",
            alignItems: "center",
            minHeight: "22px",
          }}>
            <span>{displayed}</span>
            {phase <= 2 && (
              <span style={{
                display: "inline-block",
                width: "1.5px",
                height: "18px",
                background: "#4285f4",
                marginLeft: "1px",
                animation: "g-blink 1s step-end infinite",
              }} />
            )}
          </div>

          {/* Mic icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <rect x="9" y="2" width="6" height="12" rx="3" fill="#4285F4" />
            <path d="M5 10v2a7 7 0 0 0 14 0v-2" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 19v3" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 22h6" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* ── Result count ── */}
        <div style={{
          fontFamily: ARIAL,
          fontSize: "13px",
          color: COUNT_COLOR,
          lineHeight: "16px",
          marginBottom: "18px",
          paddingLeft: "2px",
          opacity: showResults ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}>
          Cerca de 4.320.000 resultados (0,42 segundos)
        </div>

        {/* ── Skeleton ── */}
        {showSkeleton && (
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {[78, 95, 68].map((w, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {[w * 0.48, w, w * 0.75].map((bw, j) => (
                  <div key={j} style={{
                    height: j === 1 ? "18px" : "12px",
                    borderRadius: "4px",
                    background: j === 1 ? "#e8eaed" : "#f1f3f4",
                    width: `${bw}%`,
                    animation: `g-pulse 1.4s ease-in-out ${j * 0.1}s infinite`,
                  }} />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* ── Results ── */}
        {showResults && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {RESULTS.map((r, i) => {
              const isHigh = r.isTarget && highlighted;
              return (
                <div
                  key={i}
                  style={{
                    padding: isHigh ? "10px 12px" : "0",
                    borderRadius: isHigh ? "8px" : "0",
                    background: isHigh ? "#f8f9ff" : "transparent",
                    outline: isHigh ? "1px solid #c5d0ff" : "none",
                    transition: "all 0.4s ease",
                    animation: `g-fadein 0.3s ease ${i * 70}ms both`,
                    cursor: "pointer",
                  }}
                >
                  {/* Breadcrumb row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
                    {/* Favicon */}
                    <div style={{
                      width: "18px", height: "18px", borderRadius: "50%",
                      background: r.isTarget ? "#E50914" : "#e8eaed",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {r.isTarget ? (
                        <span style={{ fontSize: "8px", fontWeight: 900, color: "#fff", fontFamily: "arial" }}>P</span>
                      ) : (
                        <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: "#bbb" }} />
                      )}
                    </div>

                    <span style={{
                      fontFamily: ARIAL,
                      fontSize: "13px",
                      color: BREADCRUMB_COLOR,
                      lineHeight: "20px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>
                      {r.breadcrumb}
                    </span>

                    {isHigh && (
                      <span style={{
                        fontSize: "10px", fontWeight: 600,
                        fontFamily: ARIAL,
                        color: "#E50914",
                        background: "#fff0f0",
                        border: "1px solid #fca5a5",
                        borderRadius: "999px",
                        padding: "2px 8px",
                        flexShrink: 0,
                        animation: "g-pulse 1.8s ease-in-out infinite",
                      }}>
                        ← Aqui!
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div style={{
                    fontFamily: ARIAL,
                    textAlign: "left",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: isHigh ? "#1558d6" : TITLE_COLOR,
                    lineHeight: "26px",
                    marginBottom: "3px",
                    transition: "color 0.3s ease",
                  }}>
                    {r.title}
                  </div>

                  {/* Snippet */}
                  <div style={{
                    fontFamily: ARIAL,
                    textAlign: "left",
                    fontSize: "14px",
                    color: SNIPPET_COLOR,
                    lineHeight: "20px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>
                    {r.snippet}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
