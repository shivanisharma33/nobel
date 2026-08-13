"use client";

import React from "react";

interface Partner {
  id: string;
  tag: string;
  content: React.ReactNode;
}

export default function PartnerMarquee() {
  const row1: Partner[] = [
    {
      id: "tmx",
      tag: "Stock Exchange",
      content: (
        <img
          src="/assets/04-TMX.png"
          alt="TMX Group"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "stifel",
      tag: "Investment Banking",
      content: (
        <img
          src="/assets/stifel-logo-resized.jpg"
          alt="Stifel"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "cse",
      tag: "Securities Exchange",
      content: (
        <img
          src="/assets/CSE-Logo-RGB.webp"
          alt="Canadian Securities Exchange"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "maxit",
      tag: "Financial Advisory",
      content: (
        <img
          src="/assets/maxit_st_cmyk_lg.webp"
          alt="Maxit Capital"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "ventum",
      tag: "Capital Markets",
      content: (
        <img
          src="/assets/Ventum_Financial_RGB.webp"
          alt="Ventum Capital Markets"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "red-cloud",
      tag: "Mining Advisory",
      content: (
        <img
          src="/assets/image (2).webp"
          alt="Red Cloud Securities"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "noble-cm",
      tag: "Capital Markets",
      content: (
        <img
          src="/assets/noble-cm.webp"
          alt="Noble Capital Markets"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "altitude",
      tag: "Capital Partners",
      content: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="28" height="22" viewBox="0 0 26 20">
            <path d="M3 17 L8 8 L11 12 L15 4 L18 9 L21 3 L23 17 Z" fill="#1e6b3a" />
            <path d="M15 4 L18 9 L21 3" stroke="#e8b12c" strokeWidth="1.4" fill="none" />
          </svg>
          <span className="stk" style={{ textAlign: "left" }}>
            <span style={{ color: "#1e6b3a", fontSize: "14px", fontWeight: 800 }}>
              ALTITUDE<span style={{ color: "#10262c" }}>CAPITAL</span>
            </span>
            <span style={{ fontSize: "8.5px", letterSpacing: ".22em", color: "#6e8489", fontWeight: 700 }}>
              PARTNERS
            </span>
          </span>
        </div>
      ),
    },
  ];

  const row2: Partner[] = [
    {
      id: "mining-ir",
      tag: "Investor Relations",
      content: (
        <img
          src="/assets/logo-miningir.png"
          alt="Mining IR"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "mining-discovery",
      tag: "Industry News",
      content: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="26" height="24" viewBox="0 0 22 20">
            <path d="M4 16 Q4 5 15 4 Q9 8 8 16 Z" fill="#c99a3f" />
          </svg>
          <span style={{ fontFamily: "Inter,system-ui,sans-serif", color: "#8a6a2a", fontStyle: "italic", fontWeight: 700, fontSize: "18px" }}>
            Mining Discovery
          </span>
        </div>
      ),
    },
    {
      id: "rctv",
      tag: "Broadcast Media",
      content: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="18" height="18" viewBox="0 0 18 18">
            <circle cx="9" cy="9" r="8" fill="#e8442c" />
          </svg>
          <span style={{ letterSpacing: ".14em", fontWeight: 800, color: "#10262c", fontSize: "19px" }}>RCTV</span>
        </div>
      ),
    },
    {
      id: "vid",
      tag: "Video Platform",
      content: (
        <span style={{ fontSize: "28px", fontWeight: 800, background: "linear-gradient(90deg,#25b8a0,#2f8fd4)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
          VID
        </span>
      ),
    },
    {
      id: "money-channel",
      tag: "Financial Media",
      content: (
        <div className="stk">
          <span style={{ fontFamily: "Inter,system-ui,sans-serif", color: "#10262c", fontSize: "15px", fontWeight: 800 }}>THE MONEY CHANNEL</span>
          <span style={{ fontSize: "8.5px", letterSpacing: ".22em", color: "#6e8489", fontWeight: 700 }}>NEW YORK CITY</span>
        </div>
      ),
    },
    {
      id: "tmx-media",
      tag: "Stock Exchange",
      content: (
        <img
          src="/assets/04-TMX.png"
          alt="TMX Group"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "cse-media",
      tag: "Securities Exchange",
      content: (
        <img
          src="/assets/CSE-Logo-RGB.webp"
          alt="Canadian Securities Exchange"
          className="partner-logo-img"
        />
      ),
    },
  ];

  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="partners-band" aria-label="Featured Media and Industry Partners">
      <div className="wrap">
        <div className="partners-header">
          <div className="partners-badge">
            <span className="partners-badge-dot"></span>
            Global Network &amp; Ecosystem
          </div>
          <h2 className="partners-title">
            FEATURED MEDIA &amp; <span className="highlight">INDUSTRY PARTNERS</span>
          </h2>
          <p className="partners-subtitle">
            Supported by leading stock exchanges, investment banks, capital market advisors, and global mining media networks.
          </p>
        </div>

        <div className="marquee-container">
          {/* Row 1: Left Marquee */}
          <div className="marquee">
            <div className="marquee-track">
              {duplicatedRow1.map((item, index) => (
                <div key={`r1-${item.id}-${index}`} className="partner-card">
                  <span className="partner-card-tag">{item.tag}</span>
                  {item.content}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right Marquee */}
          <div className="marquee">
            <div className="marquee-track-reverse">
              {duplicatedRow2.map((item, index) => (
                <div key={`r2-${item.id}-${index}`} className="partner-card">
                  <span className="partner-card-tag">{item.tag}</span>
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
