"use client";

import React, { useEffect, useState, useRef } from "react";

const SEARCH_QUERY = "melhor fone bluetooth barato";
const PHASE_DURATIONS = [700, 2600, 600, 650, 800, 2400, 600];

const RESULTS = [
  {
    favicon: "🔴",
    breadcrumb: "promonoalvo.com.br › blog › fones-bluetooth",
    title: "5 Fones Bluetooth com Bom Custo-Benefício – Promo no Alvo",
    snippet:
      "Reunimos os melhores fones sem fio abaixo de R$ 200. Comparativos, reviews e links diretos para os grupos de ofertas de tecnologia.",
    isTarget: true,
  },
  {
    favicon: "⚙️",
    breadcrumb: "techzoom.com.br › fones › bluetooth-baratos",
    title: "Os 7 melhores fones Bluetooth baratos de 2026",
    snippet:
      "Confira nossa lista com custo-benefício, qualidade de som e avaliações de usuários para cada modelo analisado.",
    isTarget: false,
  },
  {
    favicon: "🛒",
    breadcrumb: "mercadolivre.com.br › fones-bluetooth",
    title: "Fone Bluetooth Barato – Mercado Livre",
    snippet:
      "Envio grátis no dia. Compre Fone Bluetooth Barato parcelado sem juros! Confira nossas incríveis ofertas e promoções.",
    isTarget: false,
  },
];

// Google colors (exact)
const G_BLUE_LINK = "#1a0dab";
const G_BREADCRUMB = "#4d5156";
const G_SNIPPET = "#4d5156";
const G_RESULT_COUNT = "#70757a";
const G_BORDER = "#dfe1e5";
const G_FOCUS_SHADOW = "0 1px 6px rgba(32,33,36,.28)";
const G_FONT = "arial, sans-serif";

export function GoogleSearchAnimation() {
  const [phase, setPhase] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Typing
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

  // Fade on reset
  useEffect(() => {
    if (phase === 6) {
      setOpacity(0);
    } else if (phase === 0) {
      setTypedChars(0);
      setTimeout(() => setOpacity(1), 50);
    }
  }, [phase]);

  // Phase progression
  useEffect(() => {
    timerRef.current = setTimeout(
      () => setPhase((p) => (p >= 6 ? 0 : p + 1)),
      PHASE_DURATIONS[phase]
    );
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [phase]);

  const displayedText = SEARCH_QUERY.slice(0, typedChars);
  const isInputActive = phase >= 1;
  const showResults = phase >= 4;
  const showSkeleton = phase === 3;
  const highlightTarget = phase >= 5;

  return (
    <div
      style={{
        fontFamily: G_FONT,
        opacity,
        transition: "opacity 0.4s ease",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        userSelect: "none",
      }}
    >
      {/* Google logo — exact letter colors */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "0px", marginBottom: "18px" }}>
        {[
          ["G", "#4285F4"],
          ["o", "#EA4335"],
          ["o", "#FBBC05"],
          ["g", "#4285F4"],
          ["l", "#34A853"],
          ["e", "#EA4335"],
        ].map(([ch, color], i) => (
          <span
            key={i}
            style={{
              fontSize: "26px",
              fontFamily: "arial, sans-serif",
              fontWeight: 700,
              color,
              letterSpacing: "-0.5px",
              lineHeight: 1,
            }}
          >
            {ch}
          </span>
        ))}
      </div>

      {/* Search bar — exact Google style */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 16px",
          borderRadius: "24px",
          border: `1px solid ${isInputActive ? "transparent" : G_BORDER}`,
          background: "#fff",
          boxShadow: isInputActive ? G_FOCUS_SHADOW : "none",
          transition: "box-shadow 0.2s ease, border-color 0.2s ease",
          marginBottom: "6px",
        }}
      >
        {/* Search icon SVG — exact Google gray */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            stroke="#9aa0a6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Query text */}
        <div
          style={{
            flex: 1,
            fontSize: "16px",
            color: "#202124",
            fontFamily: G_FONT,
            minHeight: "22px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>{displayedText}</span>
          {phase <= 2 && (
            <span
              style={{
                display: "inline-block",
                width: "1px",
                height: "18px",
                background: "#4285f4",
                marginLeft: "1px",
                animation: "blink 1s step-end infinite",
              }}
            />
          )}
        </div>

        {/* Mic icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path
            d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z"
            stroke="#4285F4"
            strokeWidth="2"
          />
          <path
            d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v4M9 23h6"
            stroke="#4285F4"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Result count */}
      <div
        style={{
          fontSize: "13px",
          color: G_RESULT_COUNT,
          fontFamily: G_FONT,
          marginBottom: "16px",
          paddingLeft: "2px",
          opacity: showResults ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        Cerca de 4.320.000 resultados (0,42 segundos)
      </div>

      {/* Skeleton */}
      {showSkeleton && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[72, 88, 65].map((w, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div
                style={{
                  height: "12px",
                  borderRadius: "4px",
                  background: "#f1f3f4",
                  width: `${w * 0.55}%`,
                  animation: "pulse 1.4s ease-in-out infinite",
                }}
              />
              <div
                style={{
                  height: "18px",
                  borderRadius: "4px",
                  background: "#e8eaed",
                  width: `${w}%`,
                  animation: "pulse 1.4s ease-in-out infinite",
                  animationDelay: "0.1s",
                }}
              />
              <div
                style={{
                  height: "13px",
                  borderRadius: "4px",
                  background: "#f1f3f4",
                  width: `${w * 0.8}%`,
                  animation: "pulse 1.4s ease-in-out infinite",
                  animationDelay: "0.2s",
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {RESULTS.map((r, i) => {
            const highlighted = r.isTarget && highlightTarget;
            return (
              <div
                key={i}
                style={{
                  padding: highlighted ? "8px 10px" : "0",
                  borderRadius: highlighted ? "8px" : "0",
                  background: highlighted ? "#f8f9ff" : "transparent",
                  outline: highlighted ? "1px solid #c5d0ff" : "none",
                  transition: "all 0.4s ease",
                  transitionDelay: `${i * 60}ms`,
                  cursor: "pointer",
                }}
              >
                {/* Breadcrumb row */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                  {/* Favicon circle */}
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: r.isTarget ? "#E50914" : "#e8eaed",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {r.isTarget ? (
                      <span style={{ fontSize: "8px", fontWeight: 900, color: "#fff", fontFamily: "arial" }}>P</span>
                    ) : (
                      <span style={{ fontSize: "9px" }}>{r.favicon}</span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "13px",
                      color: G_BREADCRUMB,
                      fontFamily: G_FONT,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {r.breadcrumb}
                  </span>
                  {highlighted && (
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#E50914",
                        background: "#fff0f0",
                        border: "1px solid #fca5a5",
                        borderRadius: "999px",
                        padding: "1px 7px",
                        flexShrink: 0,
                        animation: "pulse 1.5s ease-in-out infinite",
                      }}
                    >
                      ← Aqui!
                    </span>
                  )}
                </div>

                {/* Title */}
                <div
                  style={{
                    fontSize: "18px",
                    color: highlighted ? "#1558d6" : G_BLUE_LINK,
                    fontFamily: G_FONT,
                    fontWeight: 400,
                    lineHeight: "24px",
                    marginBottom: "4px",
                    transition: "color 0.3s ease",
                  }}
                >
                  {r.title}
                </div>

                {/* Snippet */}
                <div
                  style={{
                    fontSize: "14px",
                    color: G_SNIPPET,
                    fontFamily: G_FONT,
                    lineHeight: "20px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {r.snippet}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* CSS for animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
