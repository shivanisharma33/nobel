"use client";

import React from "react";

export default function PartnerMarquee() {
  const logos = [
    {
      id: "mining-ir",
      content: (
        <>
          <svg width="22" height="22" viewBox="0 0 22 22">
            <circle cx="11" cy="11" r="9.5" fill="none" stroke="#2fbf9c" strokeWidth="2" />
            <path d="M6.5 14 L9 8 L11 12 L13 8 L15.5 14" fill="none" stroke="#10262c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Mining<span style={{ color: "#1e8f77" }}>IR</span></span>
        </>
      ),
    },
    {
      id: "mining-discovery",
      content: (
        <>
          <svg width="20" height="18" viewBox="0 0 22 20">
            <path d="M4 16 Q4 5 15 4 Q9 8 8 16 Z" fill="#c99a3f" />
          </svg>
          <span style={{ fontFamily: "Inter,system-ui,sans-serif", color: "#8a6a2a", fontStyle: "italic", fontWeight: 600 }}>
            Mining Discovery
          </span>
        </>
      ),
    },
    {
      id: "rctv",
      content: (
        <>
          <svg width="12" height="12" viewBox="0 0 14 14">
            <circle cx="7" cy="7" r="6" fill="#e8442c" />
          </svg>
          <span style={{ letterSpacing: ".1em" }}>RCTV</span>
        </>
      ),
    },
    {
      id: "vid",
      content: (
        <span style={{ fontSize: "23px", fontWeight: 800, background: "linear-gradient(90deg,#25b8a0,#2f8fd4)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
          VID
        </span>
      ),
    },
    {
      id: "money-channel",
      content: (
        <span className="stk">
          <span style={{ fontFamily: "Inter,system-ui,sans-serif", color: "#10262c", fontSize: "13px" }}>THE MONEY CHANNEL</span>
          <span style={{ fontSize: "7px", letterSpacing: ".2em", color: "#6e8489", fontWeight: 600 }}>NEW YORK CITY</span>
        </span>
      ),
    },
    {
      id: "tmx",
      content: (
        <span className="stk">
          <span style={{ color: "#10262c", fontSize: "16px", letterSpacing: ".06em" }}>TMX</span>
          <span style={{ fontSize: "6.5px", letterSpacing: ".12em", color: "#6e8489", fontWeight: 600 }}>THE FUTURE IS YOURS TO SEE.</span>
        </span>
      ),
    },
    {
      id: "stifel",
      content: (
        <span style={{ fontFamily: "'Inter',system-ui,sans-serif", color: "#10262c", fontSize: "19px", letterSpacing: ".12em" }}>
          STIFEL
        </span>
      ),
    },
    {
      id: "cse",
      content: (
        <>
          <span style={{ color: "#1479c4", fontSize: "17px", letterSpacing: ".05em" }}>CSE</span>
          <span className="stk" style={{ textAlign: "left" }}>
            <span style={{ fontSize: "7px", letterSpacing: ".06em", color: "#6e8489", fontWeight: 700 }}>CANADIAN</span>
            <span style={{ fontSize: "7px", letterSpacing: ".04em", color: "#6e8489", fontWeight: 700 }}>SECURITIES EXCHANGE</span>
          </span>
        </>
      ),
    },
    {
      id: "maxit",
      content: (
        <span className="stk">
          <span style={{ color: "#10262c", fontSize: "15px", letterSpacing: ".14em" }}>MAXIT</span>
          <span style={{ color: "#10262c", fontSize: "11px", letterSpacing: ".22em" }}>CAPITAL</span>
        </span>
      ),
    },
    {
      id: "altitude",
      content: (
        <>
          <svg width="24" height="18" viewBox="0 0 26 20">
            <path d="M3 17 L8 8 L11 12 L15 4 L18 9 L21 3 L23 17 Z" fill="#1e6b3a" />
            <path d="M15 4 L18 9 L21 3" stroke="#e8b12c" strokeWidth="1.4" fill="none" />
          </svg>
          <span className="stk" style={{ textAlign: "left" }}>
            <span style={{ color: "#1e6b3a", fontSize: "10.5px", fontWeight: 800 }}>ALTITUDE<span style={{ color: "#10262c" }}>CAPITAL</span></span>
            <span style={{ fontSize: "7px", letterSpacing: ".22em", color: "#6e8489", fontWeight: 700 }}>PARTNERS</span>
          </span>
        </>
      ),
    },
    {
      id: "ventum",
      content: (
        <span className="stk">
          <span style={{ color: "#10262c", fontSize: "16px", fontWeight: 600 }}>Ventum<span style={{ color: "#c8a02c" }}>◆</span></span>
          <span style={{ fontSize: "7px", letterSpacing: ".16em", color: "#6e8489", fontWeight: 700 }}>CAPITAL MARKETS</span>
        </span>
      ),
    },
    {
      id: "red-cloud",
      content: (
        <>
          <svg width="24" height="16" viewBox="0 0 26 18">
            <path d="M4 12 Q4 6 9 6 Q10 2 15 3 Q20 2 21 7 Q25 8 23 12 Z" fill="none" stroke="#c8102e" strokeWidth="1.6" />
          </svg>
          <span style={{ color: "#c8102e", letterSpacing: ".05em" }}>RED CLOUD</span>
        </>
      ),
    },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="partners-band" aria-label="Media and Industry Partners">
      <div className="wrap">
        <div className="partners-title">FEATURED MEDIA &amp; INDUSTRY PARTNERS</div>
        <div className="marquee">
          <div className="marquee-track" id="partnerTrack">
            {duplicatedLogos.map((item, index) => (
              <span key={`${item.id}-${index}`} className="lg">
                {item.content}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
