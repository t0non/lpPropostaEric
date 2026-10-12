import React from "react";
import Image from "next/image";

interface PromoNoAlvoLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function PromoNoAlvoLogo({ className = "h-12 w-auto", variant = "dark" }: PromoNoAlvoLogoProps) {
  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo_promonoalvo.png"
        alt="Promo no Alvo"
        className="w-auto h-full object-contain filter drop-shadow-md"
      />
    </div>
  );
}
