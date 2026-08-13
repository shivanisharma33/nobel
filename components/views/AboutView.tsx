"use client";

import React from "react";

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  const handleNavClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pview on" id="pv-about">
      {/* BREADCRUMB */}
      <div className="wrap crumbs">
        <a href="#home" onClick={(e) => handleNavClick("home", e)}>
          Home
        </a>
        <span className="sep">&rsaquo;</span>About
      </div>

      {/* ABOUT HERO */}
      <section className="ab-hero">
        <img
          className="hero-art"
          src="/assets/hero-art.webp"
          alt="Waterfront at sunset in Boca Raton, Florida"
        />
        <div className="hero-scrim"></div>
        <div className="wrap ab-hero-inner">
          <h1>
            ABOUT
            <br />
            <span className="gr">THE CONFERENCE</span>
          </h1>
          <p>
            THE Noble Mining Investment Conference brings together global leaders,
            innovators, and investors to shape a more sustainable and prosperous mining
            industry.
          </p>
          <div className="hero-btns">
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
            <a
              className="btn-ghost"
              href="#agenda"
              onClick={(e) => handleNavClick("agenda", e)}
            >
              VIEW AGENDA{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.9"
                strokeLinecap="round"
              >
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M4 9.5h16M8 3v4M16 3v4" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="collab">
        <div className="wrap collab-grid">
          <div className="collab-photo">
            <svg viewBox="0 0 620 460" xmlns="http://www.w3.org/2000/svg">
              <rect width="620" height="460" fill="#0b1e2a" />
              <g fill="#10394a" opacity=".7">
                <path d="M40 460 L90 140 L140 460 Z" />
                <path d="M480 460 L530 140 L580 460 Z" />
              </g>
              <rect x="140" y="80" width="340" height="170" rx="6" fill="#123c4c" />
              <rect x="148" y="88" width="324" height="154" rx="4" fill="#1a5a60" />
              <g transform="translate(248,146)">
                <path
                  d="M0 32 V0 L7 0 L21 24 V0 L28 0 V32 L21 32 L7 8 V32 Z"
                  fill="#fff"
                  transform="scale(0.95)"
                />
                <text
                  x="40"
                  y="17"
                  fontFamily="Inter,system-ui,sans-serif"
                  fontSize="18"
                  fontWeight="600"
                  fill="#fff"
                  letterSpacing="2"
                >
                  NOBLE
                </text>
                <text
                  x="40"
                  y="31"
                  fontFamily="Inter,sans-serif"
                  fontSize="6.8"
                  fontWeight="700"
                  letterSpacing="1.9"
                  fill="#a9d8ce"
                >
                  MINING CONFERENCE
                </text>
              </g>
              <rect x="150" y="262" width="320" height="36" rx="5" fill="#0e2f3d" />
              <g fill="#0a1c26">
                <circle cx="180" cy="248" r="10" />
                <rect x="171" y="258" width="18" height="28" rx="5" />
                <circle cx="240" cy="252" r="10" />
                <rect x="231" y="262" width="18" height="26" rx="5" />
                <circle cx="300" cy="250" r="10" />
                <rect x="291" y="260" width="18" height="27" rx="5" />
                <circle cx="360" cy="252" r="10" />
                <rect x="351" y="262" width="18" height="26" rx="5" />
                <circle cx="420" cy="248" r="10" />
                <rect x="411" y="258" width="18" height="28" rx="5" />
              </g>
              <g fill="#08141d">
                <ellipse cx="80" cy="370" rx="27" ry="16" />
                <ellipse cx="142" cy="386" rx="29" ry="17" />
                <ellipse cx="208" cy="372" rx="27" ry="16" />
                <ellipse cx="272" cy="388" rx="29" ry="17" />
                <ellipse cx="336" cy="374" rx="27" ry="16" />
                <ellipse cx="400" cy="389" rx="29" ry="17" />
                <ellipse cx="464" cy="372" rx="27" ry="16" />
                <ellipse cx="528" cy="386" rx="29" ry="17" />
                <ellipse cx="582" cy="374" rx="25" ry="15" />
                <ellipse cx="112" cy="420" rx="31" ry="18" />
                <ellipse cx="184" cy="432" rx="33" ry="19" />
                <ellipse cx="258" cy="422" rx="31" ry="18" />
                <ellipse cx="332" cy="434" rx="33" ry="19" />
                <ellipse cx="406" cy="422" rx="31" ry="18" />
                <ellipse cx="480" cy="434" rx="33" ry="19" />
                <ellipse cx="550" cy="424" rx="31" ry="18" />
              </g>
              <g fill="#2fbf9c" opacity=".25">
                <path d="M0 460 L60 190 L120 460 Z" />
                <path d="M500 460 L560 190 L620 460 Z" />
              </g>
            </svg>
          </div>
          <div>
            <div className="eyebrow">ABOUT THE CONFERENCE</div>
            <h2>
              A Collaboration Built
              <br />
              for Impact
            </h2>
            <p>
              A collaboration between{" "}
              <a
                href="https://www.themininginvestmentevent.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                THE Mining Investment Event
              </a>{" "}
              and{" "}
              <a
                href="https://www.noblecon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Noble Capital Markets
              </a>
              .
            </p>
            <p>
              Over two days, the conference features up to 60 mining companies with
              one-on-one meetings, presentations, and exceptional networking
              opportunities.
            </p>
            <div className="cfeat">
              <span className="ci">
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
              One-on-one investor meetings
            </div>
            <div className="cfeat">
              <span className="ci">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="5" width="16" height="12" rx="2" />
                  <path d="M9 20h6M12 17v3M8 12l2.5-3 2 2 3-4" />
                </svg>
              </span>
              Company presentations &amp; keynotes
            </div>
            <div className="cfeat">
              <span className="ci">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="6" r="2.6" />
                  <circle cx="6" cy="17" r="2.6" />
                  <circle cx="18" cy="17" r="2.6" />
                  <path d="M10.5 8l-3 6.5M13.5 8l3 6.5M8.6 17h6.8" />
                </svg>
              </span>
              Exclusive networking events
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}
      <section className="audience">
        <div className="wrap">
          <div className="aud-head">
            <div className="eyebrow">WHO SHOULD ATTEND?</div>
            <h2>Connect with the Right Audience</h2>
          </div>
          <div className="aud-grid">
            <div className="aud-card">
              <span className="aud-ic">
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
              <b>Investors</b>
              <p>Funds, family offices, HNWIs, and institutional investors.</p>
            </div>
            <div className="aud-card">
              <span className="aud-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="6.5" r="2.8" />
                  <path d="M12 9.5v3M8 21l1.5-8h5L16 21M9.5 13l-2 3M14.5 13l2 3" />
                </svg>
              </span>
              <b>Industry Leaders</b>
              <p>Mining executives and corporate development teams.</p>
            </div>
            <div className="aud-card">
              <span className="aud-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="13" rx="2" />
                  <path d="M8 20h8M12 17v3M7.5 13l2.5-3.5 2 2 3.5-4.5M15 7h1.5v1.5" />
                </svg>
              </span>
              <b>Analysts &amp; Brokers</b>
              <p>Equity research analysts and sell-side professionals.</p>
            </div>
            <div className="aud-card">
              <span className="aud-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8.5 12.5L5 9.5 8 6l4 1.5L16 6l3 3.5-3.5 3M8.5 12.5l3.5 3.4 3.5-3.4M8.5 12.5L11 15M15.5 12.5L13 15" />
                </svg>
              </span>
              <b>Advisors</b>
              <p>Legal, financial, and strategic advisors supporting the sector.</p>
            </div>
            <div className="aud-card">
              <span className="aud-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" />
                </svg>
              </span>
              <b>Global Network</b>
              <p>Build connections across international markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ATTEND */}
      <section className="why2">
        <div className="wrap">
          <div className="why2-head">
            <div className="eyebrow">WHY ATTEND?</div>
            <h2>A Premier Mining Investment Experience</h2>
          </div>
          <div className="why2-grid">
            <div className="w2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" />
              </svg>
              <b>Global Participation</b>
              <p>Engage with investors and industry leaders from more than 25+ countries.</p>
            </div>
            <div className="w2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <circle cx="9" cy="8" r="3.2" />
                <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
                <circle cx="16.5" cy="9" r="2.6" />
                <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
              </svg>
              <b>Quality Connections</b>
              <p>Pre-scheduled one-on-one meetings with active investors.</p>
            </div>
            <div className="w2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinejoin="round"
              >
                <path d="M7 4h10l4 5-9 11L3 9z" />
                <path d="M3 9h18M9.5 4L8 9l4 11 4-11-1.5-5" />
              </svg>
              <b>Actionable Insights</b>
              <p>Gain market intelligence and explore new investment opportunities.</p>
            </div>
            <div className="w2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M4 9.5h16M8 3v4M16 3v4" />
                <path d="M12 13l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3z" />
              </svg>
              <b>Exclusive Networking</b>
              <p>Unmatched networking opportunities including a gala event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HAVE QUESTIONS */}
      <section className="quest">
        <svg
          className="quest-art"
          viewBox="0 0 700 260"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="700" height="260" fill="#0d3040" />
          <path d="M0 260 L0 190 Q160 150 320 176 Q500 205 700 168 L700 260 Z" fill="#0a4a58" />
          <path d="M0 260 L0 216 Q180 186 360 206 Q540 226 700 200 L700 260 Z" fill="#0e5d68" />
          <g fill="#f3cf8a" opacity=".8">
            <rect x="120" y="196" width="4" height="6" />
            <rect x="180" y="188" width="4" height="6" />
            <rect x="240" y="192" width="4" height="6" />
            <rect x="320" y="184" width="4" height="6" />
            <rect x="400" y="192" width="4" height="6" />
            <rect x="480" y="186" width="4" height="6" />
            <rect x="560" y="180" width="4" height="6" />
            <rect x="620" y="176" width="4" height="6" />
          </g>
          <path
            d="M0 150 Q200 120 420 140 Q580 152 700 130 L700 172 Q520 200 340 178 Q160 160 0 192 Z"
            fill="#e8d9b0"
            opacity=".35"
          />
          <g fill="#0a2530">
            <ellipse cx="160" cy="120" rx="40" ry="10" />
            <ellipse cx="420" cy="98" rx="55" ry="12" />
            <ellipse cx="600" cy="116" rx="44" ry="10" />
          </g>
        </svg>
        <div className="quest-scrim"></div>
        <div className="wrap quest-inner">
          <div>
            <h2>Have Questions?</h2>
            <p className="qc">We're here to help you with any inquiries about the conference.</p>
          </div>
          <div className="qrow">
            <span className="qi">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
            </span>
            647-964-0292
          </div>
          <div className="qrow">
            <span className="qi">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinejoin="round">
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                <path d="M4 7l8 6 8-6" />
              </svg>
            </span>
            <a href="mailto:jchoi@irinc.ca">jchoi@irinc.ca</a>
          </div>
          <button
            className="btn-ghost"
            type="button"
            onClick={() => alert("Contact form opening soon!")}
          >
            CONTACT US{" "}
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
