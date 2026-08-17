"use client";

import React from "react";

interface Partner {
  id: string;
  tag: string;
  content: React.ReactNode;
}

export default function PartnerMarquee() {
  const partners: Partner[] = [
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
        <img
          src="/assets/mining-discovery.png"
          alt="Mining Discovery"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "rctv",
      tag: "Broadcast Media",
      content: (
        <div className="partner-logo-img" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <svg width="24" height="24" viewBox="0 0 18 18">
            <circle cx="9" cy="9" r="8" fill="#e8442c" />
          </svg>
          <span style={{ letterSpacing: ".14em", fontWeight: 800, color: "#10262c", fontSize: "26px", lineHeight: 1 }}>RCTV</span>
        </div>
      ),
    },
    {
      id: "vid",
      tag: "Video Platform",
      content: (
        <img
          src="/assets/logo.webp"
          alt="VID"
          className="partner-logo-img"
        />
      ),
    },
    {
      id: "money-channel",
      tag: "Financial Media",
      content: (
        <img
          src="/assets/the-money-channel.jpg"
          alt="The Money Channel New York City"
          className="partner-logo-img"
        />
      ),
    },
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
      id: "altitude",
      tag: "Capital Partners",
      content: (
        <img
          src="/assets/logo.png"
          alt="Altitude Capital Partners"
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
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];

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
            Supported by leading stock exchanges, investment banks, capital market advisors and<br />global mining media networks.
          </p>
        </div>

        <div className="marquee-container">
          <div className="marquee">
            <div className="marquee-track">
              {duplicatedPartners.map((item, index) => (
                <div key={`p-${item.id}-${index}`} className="partner-card">
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
