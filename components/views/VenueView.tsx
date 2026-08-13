"use client";

import React from "react";

interface VenueViewProps {
  onNavigate: (view: string) => void;
}

export default function VenueView({ onNavigate }: VenueViewProps) {
  const handleNavClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hotels = [
    {
      name: "The Embassy Suites",
      dist: "4.6 km",
      pal: ["#1d3b5a", "#e8b968", "#2a4a6a"],
    },
    {
      name: "Boca Raton Marriott",
      dist: "6 km",
      pal: ["#3a2a2a", "#e89a4e", "#5a3a2a"],
    },
    {
      name: "Hyatt Place Boca Raton",
      dist: "8 km",
      pal: ["#2a3a6a", "#6a8ac4", "#e8c987"],
    },
    {
      name: "The Boca Raton Resort",
      dist: "10 km",
      pal: ["#2a4a3a", "#e8c987", "#3a5a4a"],
    },
  ];

  const renderHotelArt = (pal: string[]) => {
    const [a, b, c] = pal;
    const gradId = `hs${a.slice(1)}`;
    return (
      <svg
        viewBox="0 0 280 150"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1a2a44" />
            <stop offset=".6" stopColor={a} />
            <stop offset="1" stopColor={c} />
          </linearGradient>
        </defs>
        <rect width="280" height="150" fill={`url(#${gradId})`} />
        <rect x="60" y="34" width="160" height="90" fill={c} />
        <g fill={b} opacity=".85">
          <rect x="72" y="46" width="12" height="14" />
          <rect x="94" y="46" width="12" height="14" />
          <rect x="116" y="46" width="12" height="14" />
          <rect x="138" y="46" width="12" height="14" />
          <rect x="160" y="46" width="12" height="14" />
          <rect x="182" y="46" width="12" height="14" />
          <rect x="196" y="46" width="12" height="14" />
          <rect x="72" y="70" width="12" height="14" />
          <rect x="94" y="70" width="12" height="14" />
          <rect x="116" y="70" width="12" height="14" />
          <rect x="138" y="70" width="12" height="14" />
          <rect x="160" y="70" width="12" height="14" />
          <rect x="182" y="70" width="12" height="14" />
          <rect x="196" y="70" width="12" height="14" />
          <rect x="72" y="94" width="12" height="14" />
          <rect x="94" y="94" width="12" height="14" />
          <rect x="116" y="94" width="12" height="14" />
          <rect x="138" y="94" width="12" height="14" />
          <rect x="160" y="94" width="12" height="14" />
          <rect x="182" y="94" width="12" height="14" />
          <rect x="196" y="94" width="12" height="14" />
        </g>
        <g fill="#0d2018">
          <g transform="translate(28,50)">
            <rect x="-3" y="0" width="6" height="74" />
            <path d="M0 0 Q-26 -12 -42 4 Q-21 -2 0 8 Q21 -2 42 4 Q26 -12 0 0" />
          </g>
          <g transform="translate(252,54)">
            <rect x="-3" y="0" width="6" height="70" />
            <path d="M0 0 Q-26 -12 -42 4 Q-21 -2 0 8 Q21 -2 42 4 Q26 -12 0 0" />
          </g>
        </g>
        <rect y="124" width="280" height="26" fill="#0a3540" />
        <g stroke={b} strokeWidth="1.4" opacity=".5">
          <path d="M60 134 h50M150 138 h60M100 144 h50" />
        </g>
      </svg>
    );
  };

  return (
    <div className="pview on" id="pv-venue">
      {/* BREADCRUMB */}
      <div className="wrap crumbs">
        <a href="#home" onClick={(e) => handleNavClick("home", e)}>
          Home
        </a>
        <span className="sep">&rsaquo;</span>Venue &amp; Accommodations
      </div>

      {/* HERO */}
      <section className="vn-hero">
        <svg
          className="hero-art"
          viewBox="0 0 900 460"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="vsky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2f7fb8" />
              <stop offset=".55" stopColor="#7fc0dd" />
              <stop offset="1" stopColor="#bfe2ee" />
            </linearGradient>
            <linearGradient id="vpool" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1a8f8a" />
              <stop offset=".5" stopColor="#0f6e6a" />
              <stop offset="1" stopColor="#0a4f4c" />
            </linearGradient>
          </defs>
          <rect width="900" height="460" fill="url(#vsky)" />
          <g fill="#fff" opacity=".7">
            <ellipse cx="620" cy="70" rx="80" ry="16" />
            <ellipse cx="760" cy="100" rx="60" ry="13" />
          </g>
          <rect x="360" y="150" width="540" height="150" fill="#e8ecee" />
          <g fill="#c4ccd0">
            <rect x="360" y="150" width="540" height="14" />
            <rect x="360" y="204" width="540" height="6" />
            <rect x="360" y="250" width="540" height="6" />
          </g>
          <g fill="#8a969c" opacity=".6">
            <rect x="380" y="170" width="26" height="30" />
            <rect x="420" y="170" width="26" height="30" />
            <rect x="460" y="170" width="26" height="30" />
            <rect x="500" y="170" width="26" height="30" />
            <rect x="540" y="170" width="26" height="30" />
            <rect x="580" y="170" width="26" height="30" />
            <rect x="620" y="170" width="26" height="30" />
            <rect x="660" y="170" width="26" height="30" />
            <rect x="700" y="170" width="26" height="30" />
            <rect x="740" y="170" width="26" height="30" />
            <rect x="780" y="170" width="26" height="30" />
            <rect x="820" y="170" width="26" height="30" />
            <rect x="860" y="170" width="26" height="30" />
          </g>
          <g fill="#0e3a2a">
            <g transform="translate(430,120)">
              <rect x="-4" y="0" width="8" height="120" />
              <path d="M0 0 Q-44 -20 -68 4 Q-34 -2 0 10 Q34 -2 68 4 Q44 -20 0 0 M0 0 Q-20 -38 -44 -42 Q-14 -24 0 6 Q14 -24 44 -42 Q20 -38 0 0" />
            </g>
            <g transform="translate(370,140)">
              <rect x="-3" y="0" width="6" height="100" />
              <path d="M0 0 Q-38 -16 -60 4 Q-30 -2 0 8 Q30 -2 60 4 Q38 -16 0 0" />
            </g>
            <g transform="translate(560,80)">
              <rect x="-4" y="0" width="8" height="30" />
              <path d="M0 0 Q-40 -18 -62 4 Q-31 -2 0 8 Q31 -2 62 4 Q40 -18 0 0" />
            </g>
          </g>
          <path d="M300 460 L300 340 Q560 300 900 330 L900 460 Z" fill="#6a5844" />
          <path
            d="M320 350 Q600 320 900 344 L900 460 L360 460 Q330 400 320 350 Z"
            fill="url(#vpool)"
          />
          <g fill="#7fe0d4" opacity=".4">
            <ellipse cx="560" cy="400" rx="180" ry="26" />
          </g>
          <g stroke="#bfeee6" strokeWidth="1.6" opacity=".4">
            <path d="M420 380 h120M560 410 h140M480 430 h100" />
          </g>
        </svg>
        <div className="hero-scrim"></div>
        <div className="wrap vn-hero-inner">
          <h1>
            TRAVEL &amp;
            <br />
            <span className="gr">ACCOMMODATIONS</span>
          </h1>
          <p>
            Everything you need to plan your trip to THE Noble Mining Investment
            Conference in beautiful Boca Raton, Florida.
          </p>
        </div>
      </section>

      {/* FACT CARD */}
      <section className="vn-facts">
        <div className="wrap">
          <div className="vf-card">
            <div className="vf">
              <span className="vf-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <path d="M12 21s-6.5-5.3-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.7-6.5 10-6.5 10z" />
                  <circle cx="12" cy="11" r="2.3" />
                </svg>
              </span>
              <div>
                <b>CONFERENCE VENUE</b>
                <p>
                  Boca Raton Innovation Campus
                  <small>
                    5000 T-Rex Ave,
                    <br />
                    Boca Raton, Florida
                  </small>
                </p>
              </div>
            </div>
            <div className="vf">
              <span className="vf-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <rect x="4" y="5" width="16" height="15" rx="2" />
                  <path d="M4 9.5h16M8 3v4M16 3v4" />
                </svg>
              </span>
              <div>
                <b>CONFERENCE DATES</b>
                <p>February 17–18, 2027</p>
              </div>
            </div>
            <div className="vf">
              <span className="vf-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <circle cx="9" cy="8" r="3.2" />
                  <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
                  <circle cx="16.5" cy="9" r="2.6" />
                  <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
                </svg>
              </span>
              <div>
                <b>GALA NETWORKING EVENT – FEB 17</b>
                <p>
                  The Boca Raton Resort
                  <small>
                    501 East Camino Real,
                    <br />
                    Boca Raton, Florida
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE VENUE */}
      <section className="aboutv">
        <div className="wrap aboutv-grid">
          <div>
            <div className="eyebrow">ABOUT THE VENUE</div>
            <h2>
              Boca Raton
              <br />
              Innovation Campus
            </h2>
            <p className="vp">
              Originally built by IBM in the late 1960s as its North American R&amp;D
              center, the Boca Raton Innovation Campus now features modern conference
              facilities surrounded by beautiful landscaped grounds and waterfront
              views.
            </p>
            <div className="vfeat">
              <span className="vi">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 21h16M6 21V8l6-4 6 4v13M9.5 21v-5h5v5M9 11h.01M15 11h.01" />
                </svg>
              </span>
              Historic Landmark
            </div>
            <div className="vfeat">
              <span className="vi">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <circle cx="9" cy="8" r="3.2" />
                  <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
                  <circle cx="16.5" cy="9" r="2.6" />
                  <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
                </svg>
              </span>
              State-of-the-Art
              <br />
              Conference Facilities
            </div>
            <div className="vfeat">
              <span className="vi">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 14h2l1.5-4 2 8 2-10 2 12 2-7 1.5 1H20M3 19q3 2 6 0t6 0 6 0" />
                </svg>
              </span>
              Scenic Waterfront Setting
            </div>
          </div>
          <div className="vgrid">
            <div className="vshot big">
              <svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg">
                <rect width="620" height="300" fill="#e6ebef" />
                <g fill="#f2f5f7">
                  <rect x="0" y="0" width="620" height="60" />
                </g>
                <g fill="#d0d8dd">
                  <rect x="70" y="60" width="26" height="200" />
                  <rect x="180" y="60" width="26" height="200" />
                  <rect x="300" y="60" width="26" height="200" />
                  <rect x="420" y="60" width="26" height="200" />
                  <rect x="530" y="60" width="26" height="200" />
                </g>
                <g transform="translate(310,90)">
                  <g fill="#e8442c">
                    <circle cx="0" cy="0" r="6" />
                    <circle cx="-16" cy="10" r="5" />
                    <circle cx="16" cy="10" r="5" />
                    <circle cx="-8" cy="24" r="5" />
                    <circle cx="10" cy="26" r="5" />
                    <circle cx="0" cy="40" r="6" />
                  </g>
                  <g fill="#f0b429">
                    <circle cx="-22" cy="-6" r="4" />
                    <circle cx="22" cy="-4" r="4" />
                    <circle cx="-14" cy="34" r="4" />
                  </g>
                  <g fill="#3b9eff">
                    <circle cx="14" cy="-8" r="4" />
                    <circle cx="-6" cy="14" r="4" />
                    <circle cx="8" cy="34" r="4" />
                  </g>
                </g>
                <rect x="40" y="250" width="540" height="50" fill="#cdd6db" />
                <g fill="#1a2530">
                  <rect x="120" y="220" width="70" height="34" rx="6" />
                  <rect x="230" y="224" width="54" height="30" rx="6" />
                  <rect x="420" y="220" width="70" height="34" rx="6" />
                </g>
                <rect x="238" y="234" width="38" height="20" rx="3" fill="#eef2f5" />
                <g fill="#2f6b3f">
                  <rect x="52" y="230" width="30" height="24" rx="3" />
                  <rect x="540" y="230" width="30" height="24" rx="3" />
                </g>
                <circle cx="310" cy="200" r="7" fill="#8a6a4a" />
                <rect x="305" y="207" width="10" height="30" fill="#6a4f36" />
              </svg>
            </div>
            <div className="vshot">
              <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="220" fill="#c9a878" />
                <rect x="0" y="0" width="300" height="120" fill="#d8b984" />
                <g fill="#8a6a45">
                  <rect x="30" y="30" width="16" height="90" />
                  <rect x="90" y="30" width="16" height="90" />
                  <rect x="150" y="30" width="16" height="90" />
                  <rect x="210" y="30" width="16" height="90" />
                  <rect x="256" y="30" width="16" height="90" />
                </g>
                <g fill="#3a5a8a" opacity=".7">
                  <path d="M46 60 q14-20 28 0 v50 h-28 z" />
                  <path d="M106 60 q14-20 28 0 v50 h-28 z" />
                  <path d="M166 60 q14-20 28 0 v50 h-28 z" />
                  <path d="M226 60 q14-20 28 0 v50 h-28 z" />
                </g>
                <ellipse cx="150" cy="46" rx="24" ry="10" fill="#f0d9a8" />
                <rect x="0" y="120" width="300" height="100" fill="#7a5a3a" />
                <g fill="#5a4028">
                  <rect x="40" y="140" width="220" height="60" rx="8" />
                </g>
                <g fill="#d8b984">
                  <circle cx="80" cy="150" r="8" />
                  <circle cx="150" cy="150" r="8" />
                  <circle cx="220" cy="150" r="8" />
                </g>
                <g fill="#2a5a3a">
                  <ellipse cx="30" cy="170" rx="18" ry="30" />
                  <ellipse cx="270" cy="170" rx="18" ry="30" />
                </g>
              </svg>
            </div>
            <div className="vshot">
              <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="220" fill="#b89968" />
                <path d="M0 0 H300 V70 Q150 40 0 70 Z" fill="#8a6a3a" />
                <g fill="#e8c987">
                  <path d="M150 20 L160 50 L150 46 L140 50 Z" />
                </g>
                <g fill="#c9a86a">
                  <rect x="30" y="70" width="20" height="120" />
                  <rect x="90" y="70" width="20" height="120" />
                  <rect x="150" y="70" width="20" height="120" />
                  <rect x="210" y="70" width="20" height="120" />
                  <rect x="256" y="70" width="20" height="120" />
                </g>
                <g fill="#f0e0b8" opacity=".5">
                  <circle cx="150" cy="60" r="14" />
                </g>
                <rect x="0" y="180" width="300" height="40" fill="#9a7a4a" />
                <g fill="#c8b088">
                  <circle cx="60" cy="200" r="12" />
                  <circle cx="120" cy="200" r="12" />
                  <circle cx="180" cy="200" r="12" />
                  <circle cx="240" cy="200" r="12" />
                </g>
                <g fill="#6a4f2e">
                  <rect x="52" y="200" width="16" height="16" />
                  <rect x="112" y="200" width="16" height="16" />
                  <rect x="172" y="200" width="16" height="16" />
                  <rect x="232" y="200" width="16" height="16" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* GALA VENUE */}
      <section className="gala-v">
        <div className="wrap">
          <div className="gala-card">
            <div className="g-art">
              <svg
                viewBox="0 0 560 380"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gvsky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#132a4a" />
                    <stop offset=".55" stopColor="#2a3a5a" />
                    <stop offset=".8" stopColor="#d99a6a" />
                    <stop offset="1" stopColor="#3a4a5a" />
                  </linearGradient>
                </defs>
                <rect width="560" height="380" fill="url(#gvsky)" />
                <g fill="#f6e3b8" opacity=".6">
                  <circle cx="120" cy="52" r="1.6" />
                  <circle cx="300" cy="36" r="1.4" />
                  <circle cx="470" cy="58" r="1.6" />
                </g>
                <g fill="#8a5a3f">
                  <rect x="140" y="150" width="280" height="120" />
                  <rect x="240" y="98" width="80" height="60" />
                  <path d="M234 100 L280 72 L326 100 Z" />
                  <rect x="120" y="190" width="30" height="80" />
                  <rect x="410" y="190" width="30" height="80" />
                </g>
                <g fill="#f3cf8a" opacity=".9">
                  <rect x="156" y="170" width="12" height="18" />
                  <rect x="186" y="170" width="12" height="18" />
                  <rect x="216" y="170" width="12" height="18" />
                  <rect x="246" y="170" width="12" height="18" />
                  <rect x="276" y="170" width="12" height="18" />
                  <rect x="306" y="170" width="12" height="18" />
                  <rect x="336" y="170" width="12" height="18" />
                  <rect x="366" y="170" width="12" height="18" />
                  <rect x="396" y="170" width="12" height="18" />
                  <rect x="156" y="216" width="12" height="18" />
                  <rect x="196" y="216" width="12" height="18" />
                  <rect x="236" y="216" width="12" height="18" />
                  <rect x="276" y="216" width="12" height="18" />
                  <rect x="316" y="216" width="12" height="18" />
                  <rect x="356" y="216" width="12" height="18" />
                  <rect x="396" y="216" width="12" height="18" />
                  <rect x="256" y="116" width="10" height="14" />
                  <rect x="284" y="116" width="10" height="14" />
                </g>
                <g fill="#1d2b1e">
                  <g transform="translate(80,200)">
                    <rect x="-4" y="0" width="8" height="90" />
                    <path d="M0 0 Q-40 -18 -62 2 Q-30 -2 0 8 Q30 -2 62 2 Q40 -18 0 0 M0 0 Q-18 -34 -38 -36 Q-14 -20 0 4 Q14 -20 38 -36 Q18 -34 0 0" />
                  </g>
                  <g transform="translate(480,190)">
                    <rect x="-4" y="0" width="8" height="100" />
                    <path d="M0 0 Q-42 -18 -64 2 Q-32 -2 0 8 Q32 -2 64 2 Q42 -18 0 0 M0 0 Q-18 -36 -40 -38 Q-14 -22 0 4 Q14 -22 40 -38 Q18 -36 0 0" />
                  </g>
                  <g transform="translate(180,240)">
                    <rect x="-3" y="0" width="6" height="56" />
                    <path d="M0 0 Q-28 -12 -44 2 Q-22 -2 0 6 Q22 -2 44 2 Q28 -12 0 0" />
                  </g>
                </g>
                <rect y="292" width="560" height="88" fill="#0e2438" />
                <g stroke="#f3cf8a" strokeWidth="2" opacity=".55">
                  <path d="M100 312 h80M240 330 h110M400 316 h90M170 352 h80M330 360 h70" />
                </g>
              </svg>
            </div>
            <div className="gala-body">
              <div className="eyebrow">GALA NETWORKING EVENT – FEB 17</div>
              <h2>The Boca Raton Resort</h2>
              <div className="gv-row">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <path d="M12 21s-6.5-5.3-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.7-6.5 10-6.5 10z" />
                  <circle cx="12" cy="11" r="2.3" />
                </svg>
                <span>
                  501 East Camino Real,
                  <br />
                  Boca Raton, Florida
                </span>
              </div>
              <div className="gv-row desc">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <rect x="4" y="5" width="16" height="15" rx="2" />
                  <path d="M4 9.5h16M8 3v4M16 3v4" />
                  <circle cx="15.5" cy="15" r="3" />
                </svg>
                <span>
                  Join us for an exclusive gala networking event on February 17 at this
                  iconic oceanfront resort.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED HOTELS */}
      <section className="hotels">
        <div className="wrap">
          <div className="hotels-head">
            <div className="eyebrow">ACCOMMODATIONS</div>
            <h2>Recommended Hotels Near the Venue</h2>
            <p>
              We are pleased to recommend the following hotels near the Boca Raton
              Innovation Campus.
            </p>
            <p className="hotels-note">
              Please contact the hotel directly to book your accommodations.
              <br />
              We do not have room blocks at any of the recommended hotels.
            </p>
          </div>
          <div className="hotel-grid" id="hotelGrid">
            {hotels.map((h, idx) => (
              <article key={idx} className="hotel">
                <div className="hotel-img">
                  {renderHotelArt(h.pal)}
                  <span className="hotel-dist">{h.dist}</span>
                </div>
                <div className="hotel-body">
                  <b>{h.name}</b>
                  <a
                    className="btn-hotel"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VISIT WEBSITE{" "}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 4h6v6M20 4l-8 8M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="hotels-foot">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 8h.01" />
            </svg>
            Distances are approximate from the Boca Raton Innovation Campus.
          </div>
        </div>
      </section>

      {/* EXPERIENCE CTA */}
      <section className="experience">
        <div className="wrap exp-inner">
          <span className="exp-ic">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <rect x="4" y="5" width="16" height="15" rx="2" />
              <path d="M4 9.5h16M8 3v4M16 3v4M8 13.5h3M8 16.5h5" />
            </svg>
          </span>
          <div className="exp-copy">
            <b>BE PART OF THE EXPERIENCE</b>
            <p>
              Join industry leaders and investors for two days of high-impact
              presentations, meetings, and networking in Boca Raton.
            </p>
          </div>
          <button
            className="btn-teal"
            type="button"
            onClick={() => alert("Registration opening soon!")}
          >
            REGISTER HERE{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
