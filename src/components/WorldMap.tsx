"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

interface Location {
  id: string;
  labelKey: string;
  // Approximate pixel coordinates on the 784x459 SVG viewBox
  svgX: number;
  svgY: number;
}

// Coordinates mapped to the actual SVG viewBox (30.767, 241.591, 784.077, 458.627)
// So absolute coords: x from ~31 to ~815, y from ~242 to ~700
const locations: Location[] = [
  { id: "taiwan",      labelKey: "taiwan",      svgX: 677, svgY: 477 },
  { id: "shanghai",    labelKey: "shanghai",     svgX: 662, svgY: 457 },
  { id: "guangzhou",   labelKey: "guangzhou",    svgX: 645, svgY: 480 },
  { id: "vietnam",     labelKey: "vietnam",      svgX: 640, svgY: 503 },
  { id: "philippines", labelKey: "philippines",  svgX: 688, svgY: 510 },
];

// Countries to highlight (our business regions)
const highlightCountries = ["cn", "tw", "vn", "ph"];

export default function WorldMap() {
  const t = useTranslations("regions");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    fetch("/world-map.svg")
      .then((res) => res.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, "image/svg+xml");
        const svg = doc.querySelector("svg");
        if (!svg) return;

        // Style the SVG
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "auto");
        svg.style.display = "block";

        // Style all paths — dark theme base
        svg.querySelectorAll("path").forEach((path) => {
          path.setAttribute("fill", "#1e2a45");
          path.setAttribute("stroke", "#2a3a5a");
          path.setAttribute("stroke-width", "0.3");
        });

        // Highlight business region countries
        highlightCountries.forEach((code) => {
          const el = svg.querySelector(`#${code}`);
          if (el) {
            el.querySelectorAll("path").forEach((p) => {
              p.setAttribute("fill", "#2d1a1a");
              p.setAttribute("stroke", "#E94F05");
              p.setAttribute("stroke-width", "0.8");
            });
            // If el itself is a path
            if (el.tagName === "path") {
              el.setAttribute("fill", "#2d1a1a");
              el.setAttribute("stroke", "#E94F05");
              el.setAttribute("stroke-width", "0.8");
            }
          }
        });

        // Add location markers
        const svgNS = "http://www.w3.org/2000/svg";
        locations.forEach((loc) => {
          const g = document.createElementNS(svgNS, "g");

          // Pulse ring
          const pulse = document.createElementNS(svgNS, "circle");
          pulse.setAttribute("cx", String(loc.svgX));
          pulse.setAttribute("cy", String(loc.svgY));
          pulse.setAttribute("r", "6");
          pulse.setAttribute("fill", "#E94F05");
          pulse.setAttribute("opacity", "0.3");
          const animR = document.createElementNS(svgNS, "animate");
          animR.setAttribute("attributeName", "r");
          animR.setAttribute("values", "4;10;4");
          animR.setAttribute("dur", "2s");
          animR.setAttribute("repeatCount", "indefinite");
          pulse.appendChild(animR);
          const animO = document.createElementNS(svgNS, "animate");
          animO.setAttribute("attributeName", "opacity");
          animO.setAttribute("values", "0.3;0.05;0.3");
          animO.setAttribute("dur", "2s");
          animO.setAttribute("repeatCount", "indefinite");
          pulse.appendChild(animO);
          g.appendChild(pulse);

          // Marker dot
          const dot = document.createElementNS(svgNS, "circle");
          dot.setAttribute("cx", String(loc.svgX));
          dot.setAttribute("cy", String(loc.svgY));
          dot.setAttribute("r", "3");
          dot.setAttribute("fill", "#E94F05");
          dot.setAttribute("stroke", "#0f1423");
          dot.setAttribute("stroke-width", "1.5");
          g.appendChild(dot);

          // Label
          const text = document.createElementNS(svgNS, "text");
          text.setAttribute("x", String(loc.svgX));
          text.setAttribute("y", String(loc.svgY - 8));
          text.setAttribute("text-anchor", "middle");
          text.setAttribute("fill", "#F7BA00");
          text.setAttribute("font-size", "7");
          text.setAttribute("font-weight", "600");
          text.setAttribute("font-family", "Inter, Noto Sans TC, sans-serif");
          text.textContent = t(loc.labelKey);
          g.appendChild(text);

          svg.appendChild(g);
        });

        // Clear and insert
        container.innerHTML = "";
        container.appendChild(svg);
      });
  }, [t]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto select-none"
      style={{ minHeight: "200px" }}
    >
      {/* Loading placeholder */}
      <div className="flex items-center justify-center h-48 text-gray-600 text-sm">
        Loading map...
      </div>
    </div>
  );
}
