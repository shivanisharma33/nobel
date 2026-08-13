"use client";

import React from "react";

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const handleNavClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pview on" id="pv-home">
      {/* ================= HERO ================= */}
      <section className="hero" id="top">
        <img
          className="hero-art"
          src="/assets/hero-art.webp"
          alt="Waterfront at sunset in Boca Raton, Florida"
        />
        <svg
          className="hero-defs"
          aria-hidden="true"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        >
          <g id="resortScene">
            <defs>
              <linearGradient id="rsky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0b2a3e" />
                <stop offset=".42" stopColor="#1d4a63" />
                <stop offset=".62" stopColor="#8a6a6e" />
                <stop offset=".74" stopColor="#e8a06a" />
                <stop offset=".82" stopColor="#f2c081" />
                <stop offset="1" stopColor="#3a5a6a" />
              </linearGradient>
              <linearGradient id="rpool" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#12303c" />
                <stop offset="1" stopColor="#071a24" />
              </linearGradient>
            </defs>
            <rect width="900" height="620" fill="url(#rsky)" />
            <g fill="#e8eef8" opacity=".5">
              <circle cx="150" cy="60" r="1.4" />
              <circle cx="420" cy="40" r="1.3" />
              <circle cx="700" cy="70" r="1.4" />
              <circle cx="820" cy="45" r="1.2" />
            </g>
            <g fill="#25404e" opacity=".7">
              <ellipse cx="250" cy="200" rx="130" ry="18" />
              <ellipse cx="640" cy="170" rx="150" ry="20" />
            </g>
            <g>
              <rect x="240" y="330" width="440" height="120" fill="#2a2430" />
              <g fill="#3a3040">
                <rect x="220" y="318" width="480" height="16" rx="4" />
              </g>
              <rect x="420" y="258" width="84" height="76" fill="#332b3a" />
              <path d="M414 260 L462 226 L510 260 Z" fill="#241f2b" />
              <circle cx="462" cy="244" r="7" fill="#17131d" />
              <g fill="#f3c477">
                <path d="M260 380 q12-24 24 0 v70 h-24 z" />
                <path d="M300 380 q12-24 24 0 v70 h-24 z" />
                <path d="M340 380 q12-24 24 0 v70 h-24 z" />
                <path d="M380 380 q12-24 24 0 v70 h-24 z" />
                <path d="M420 380 q12-24 24 0 v70 h-24 z" />
                <path d="M460 380 q12-24 24 0 v70 h-24 z" />
                <path d="M500 380 q12-24 24 0 v70 h-24 z" />
                <path d="M540 380 q12-24 24 0 v70 h-24 z" />
                <path d="M580 380 q12-24 24 0 v70 h-24 z" />
                <path d="M620 380 q12-24 24 0 v70 h-24 z" />
              </g>
              <g fill="#f3c477" opacity=".85">
                <rect x="272" y="342" width="14" height="20" />
                <rect x="312" y="342" width="14" height="20" />
                <rect x="352" y="342" width="14" height="20" />
                <rect x="392" y="342" width="14" height="20" />
                <rect x="436" y="342" width="14" height="20" />
                <rect x="476" y="342" width="14" height="20" />
                <rect x="516" y="342" width="14" height="20" />
                <rect x="556" y="342" width="14" height="20" />
                <rect x="596" y="342" width="14" height="20" />
                <rect x="636" y="342" width="14" height="20" />
                <rect x="432" y="276" width="12" height="18" />
                <rect x="456" y="276" width="12" height="18" />
                <rect x="480" y="276" width="12" height="18" />
              </g>
            </g>
            <g fill="#0a1c22">
              <g transform="translate(160,250)">
                <rect x="-5" y="0" width="10" height="130" />
                <path d="M0 0 Q-50 -22 -78 4 Q-38 -2 0 10 Q38 -2 78 4 Q50 -22 0 0 M0 0 Q-22 -42 -48 -46 Q-16 -26 0 6 Q16 -26 48 -46 Q22 -42 0 0" />
              </g>
              <g transform="translate(760,240)">
                <rect x="-5" y="0" width="10" height="140" />
                <path d="M0 0 Q-52 -24 -80 4 Q-40 -2 0 10 Q40 -2 80 4 Q52 -24 0 0 M0 0 Q-24 -44 -50 -48 Q-17 -27 0 6 Q17 -27 50 -48 Q24 -44 0 0" />
              </g>
              <g transform="translate(560,200)">
                <rect x="-4" y="0" width="8" height="120" />
                <path d="M0 0 Q-42 -18 -66 4 Q-33 -2 0 8 Q33 -2 66 4 Q42 -18 0 0 M0 0 Q-18 -36 -40 -38 Q-13 -22 0 5 Q13 -22 40 -38 Q18 -36 0 0" />
              </g>
              <g transform="translate(330,215)">
                <rect x="-4" y="0" width="8" height="110" />
                <path d="M0 0 Q-40 -16 -62 4 Q-31 -2 0 8 Q31 -2 62 4 Q40 -16 0 0" />
              </g>
            </g>
            <rect y="450" width="900" height="170" fill="url(#rpool)" />
            <g opacity=".55">
              <g fill="#f3c477">
                <path d="M262 460 q10 16 20 0 v40 q-10 10 -20 0 z" opacity=".5" />
                <path d="M342 460 q10 16 20 0 v44 q-10 10 -20 0 z" opacity=".45" />
                <path d="M422 460 q10 16 20 0 v48 q-10 10 -20 0 z" opacity=".5" />
                <path d="M502 460 q10 16 20 0 v44 q-10 10 -20 0 z" opacity=".45" />
                <path d="M582 460 q10 16 20 0 v40 q-10 10 -20 0 z" opacity=".5" />
              </g>
              <g stroke="#e8b478" strokeWidth="1.6" opacity=".6">
                <path d="M180 480 h70M300 502 h90M470 490 h80M620 510 h90M240 540 h80M420 556 h100M560 580 h70" />
              </g>
            </g>
          </g>
        </svg>
        <div className="hero-scrim"></div>

        <div className="wrap hero-inner">
          <h1 id="heroTitle">
            THE NOBLE
            <br />
            <span className="gr">MINING INVESTMENT</span>
            <br />
            CONFERENCE
          </h1>

          <div className="hero-meta">
            <div className="hm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M12 21s-6.5-5.3-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.7-6.5 10-6.5 10z" />
                <circle cx="12" cy="11" r="2.3" />
              </svg>
              <span>
                The Boca Raton Innovation Campus,
                <br />
                Boca Raton, Florida
              </span>
            </div>
            <div className="hm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M4 9.5h16M8 3v4M16 3v4" />
              </svg>
              <span>February 17–18, 2027</span>
            </div>
          </div>

          <div className="hero-btns">
            <a
              className="btn-teal"
              href="#contact"
              onClick={(e) => handleNavClick("about", e)}
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
            </a>
            <a
              className="btn-ghost"
              href="#agenda"
              onClick={(e) => handleNavClick("agenda", e)}
            >
              VIEW AGENDA
            </a>
          </div>

          <div className="partner-line">IN PARTNERSHIP WITH</div>
          <div className="hero-partners">
            <span className="noble-cm">
              <img src="/assets/noble-cm.webp" alt="Noble Capital Markets" />
              <span className="ncm-cap">NOBLE CAPITAL MARKETS</span>
            </span>
            <svg
              className="hero-seal"
              viewBox="0 0 200 200"
              aria-label="THE Mining Investment Event"
            >
              <defs>
                <path id="nArcT" d="M 40 100 A 60 60 0 0 1 160 100" />
              </defs>
              <circle cx="100" cy="100" r="96" fill="#111" />
              <circle cx="100" cy="100" r="78" fill="#fff" />
              <text
                x="100"
                y="82"
                textAnchor="middle"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="22"
                fontWeight="700"
                fill="#111"
              >
                THE
              </text>
              <text
                x="100"
                y="103"
                textAnchor="middle"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="16"
                fontStyle="italic"
                fill="#111"
              >
                Mining
              </text>
              <text
                x="100"
                y="120"
                textAnchor="middle"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="16"
                fontStyle="italic"
                fill="#111"
              >
                Investment
              </text>
              <text
                x="100"
                y="142"
                textAnchor="middle"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="20"
                fontWeight="700"
                fill="#111"
              >
                EVENT
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats" id="stats">
        <div className="wrap">
          <div className="stats-title">A PREMIER MINING INVESTMENT EXPERIENCE</div>
          <div className="stats-grid">
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="9" cy="8" r="3.2" />
                <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
                <circle cx="16.5" cy="9" r="2.6" />
                <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
              </svg>
              <b>500+</b>
              <span className="lb">Attendees</span>
              <p>Investors, funds, brokers &amp; industry leaders</p>
            </div>
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" />
              </svg>
              <b>25+</b>
              <span className="lb">Countries</span>
              <p>Global participation and reach</p>
            </div>
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 21h16M6 21V8l4-3v16M14 21V10h4v11M12 8h.01M12 12h.01M12 16h.01" />
              </svg>
              <b>Up to 60</b>
              <span className="lb">Mining Companies</span>
              <p>Presenting &amp; meeting with active investors</p>
            </div>
            <div className="stat">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8.5 12.5L5 9.5 8 6l4 1.5L16 6l3 3.5-3.5 3M8.5 12.5l3.5 3.4 3.5-3.4M8.5 12.5L11 15M15.5 12.5L13 15" />
              </svg>
              <b>1:1</b>
              <span className="lb">Meetings</span>
              <p>Pre-scheduled one-on-one investor meetings</p>
            </div>
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="6" r="2.6" />
                <circle cx="6" cy="17" r="2.6" />
                <circle cx="18" cy="17" r="2.6" />
                <path d="M10.5 8l-3 6.5M13.5 8l3 6.5M8.6 17h6.8" />
              </svg>
              <b>Unmatched</b>
              <span className="lb">Networking</span>
              <p>Presentations, panels &amp; exclusive events</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT THE CONFERENCE ================= */}
      <section className="aconf" id="aboutconf">
        <div className="wrap aconf-grid">
          <div>
            <h2>ABOUT THE CONFERENCE</h2>
            <p>
              THE Noble Mining Investment Conference brings together global leaders,
              innovators, and investors to shape a more sustainable and prosperous
              mining industry.
            </p>
            <p>
              Join us for two days of high-impact presentations, one-on-one meetings, and
              exceptional networking opportunities—including a gala networking event on
              February 17.
            </p>
            <a
              className="btn-ghost"
              href="#about"
              onClick={(e) => handleNavClick("about", e)}
              style={{ marginTop: "8px" }}
            >
              LEARN MORE ABOUT THE CONFERENCE{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="aconf-photo">
            <svg viewBox="0 0 620 400" xmlns="http://www.w3.org/2000/svg">
              <g id="hallScene">
                <rect width="620" height="400" fill="#0b1e2a" />
                <g fill="#10394a" opacity=".7">
                  <path d="M40 400 L90 120 L140 400 Z" />
                  <path d="M480 400 L530 120 L580 400 Z" />
                </g>
                <rect x="140" y="70" width="340" height="150" rx="6" fill="#123c4c" />
                <rect x="148" y="78" width="324" height="134" rx="4" fill="#1a5a60" />
                <g transform="translate(250,128)">
                  <path
                    d="M0 32 V0 L7 0 L21 24 V0 L28 0 V32 L21 32 L7 8 V32 Z"
                    fill="#fff"
                    transform="scale(0.9)"
                  />
                  <text
                    x="38"
                    y="16"
                    fontFamily="Inter,system-ui,sans-serif"
                    fontSize="17"
                    fontWeight="600"
                    fill="#fff"
                    letterSpacing="2"
                  >
                    NOBLE
                  </text>
                  <text
                    x="38"
                    y="29"
                    fontFamily="Inter,sans-serif"
                    fontSize="6.5"
                    fontWeight="700"
                    letterSpacing="1.8"
                    fill="#a9d8ce"
                  >
                    MINING CONFERENCE
                  </text>
                </g>
                <rect x="150" y="230" width="320" height="34" rx="5" fill="#0e2f3d" />
                <g fill="#0a1c26">
                  <circle cx="205" cy="222" r="10" />
                  <rect x="196" y="232" width="18" height="24" rx="5" />
                  <circle cx="265" cy="220" r="10" />
                  <rect x="256" y="230" width="18" height="26" rx="5" />
                  <circle cx="325" cy="222" r="10" />
                  <rect x="316" y="232" width="18" height="24" rx="5" />
                  <circle cx="385" cy="220" r="10" />
                  <rect x="376" y="230" width="18" height="26" rx="5" />
                </g>
                <g fill="#08141d">
                  <ellipse cx="80" cy="330" rx="26" ry="15" />
                  <ellipse cx="140" cy="345" rx="28" ry="16" />
                  <ellipse cx="205" cy="332" rx="26" ry="15" />
                  <ellipse cx="268" cy="348" rx="28" ry="16" />
                  <ellipse cx="330" cy="334" rx="26" ry="15" />
                  <ellipse cx="394" cy="349" rx="28" ry="16" />
                  <ellipse cx="458" cy="332" rx="26" ry="15" />
                  <ellipse cx="520" cy="346" rx="28" ry="16" />
                  <ellipse cx="575" cy="334" rx="24" ry="14" />
                  <ellipse cx="110" cy="376" rx="30" ry="17" />
                  <ellipse cx="180" cy="388" rx="32" ry="18" />
                  <ellipse cx="252" cy="378" rx="30" ry="17" />
                  <ellipse cx="326" cy="390" rx="32" ry="18" />
                  <ellipse cx="398" cy="378" rx="30" ry="17" />
                  <ellipse cx="470" cy="390" rx="32" ry="18" />
                  <ellipse cx="540" cy="380" rx="30" ry="17" />
                </g>
                <g fill="#2fbf9c" opacity=".25">
                  <path d="M0 400 L60 160 L120 400 Z" />
                  <path d="M500 400 L560 160 L620 400 Z" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ================= WHY ATTEND ================= */}
      <section className="why" id="why">
        <div className="wrap">
          <div className="why-title">WHY ATTEND?</div>
          <div className="why-grid">
            <div className="wy">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="9" cy="8" r="3.2" />
                <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6S13.9 16 14.5 19" />
                <circle cx="16.5" cy="9" r="2.6" />
                <path d="M16 14.6c2.4.1 4 1.6 4.5 4.4" />
              </svg>
              <b>NETWORK</b>
              <p>Connect with investors, industry leaders and key decision makers.</p>
            </div>
            <div className="wy">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="6.5" />
                <path d="M20 20l-4-4" />
              </svg>
              <b>DISCOVER</b>
              <p>Gain insights on market trends and investment opportunities.</p>
            </div>
            <div className="wy">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-4.5L21 9l-9 4.5z" />
                <path d="M7 11.5V16c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4.5M21 9v5" />
              </svg>
              <b>LEARN</b>
              <p>Hear from experts and visionaries shaping the future of mining.</p>
            </div>
            <div className="wy">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinejoin="round"
              >
                <path d="M7 4h10l4 5-9 11L3 9z" />
                <path d="M3 9h18M9.5 4L8 9l4 11 4-11-1.5-5" />
              </svg>
              <b>INVEST</b>
              <p>Identify opportunities and build valuable relationships.</p>
            </div>
            <div className="wy">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
                <rect x="4" y="13" width="4" height="7" rx="1" />
                <rect x="10" y="9" width="4" height="11" rx="1" />
                <rect x="16" y="5" width="4" height="15" rx="1" />
              </svg>
              <b>GROW</b>
              <p>Position your company and portfolio for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMING SOON ================= */}
      <section className="coming" id="coming">
        <svg
          className="coming-art"
          viewBox="0 0 700 300"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="700" height="300" fill="#0a2f2c" />
          <g>
            <path d="M300 300 L360 90 L430 300 Z" fill="#1e8f77" />
            <path d="M360 90 L430 300 L392 300 Z" fill="#43dcb4" opacity=".8" />
            <path d="M410 300 L480 130 L560 300 Z" fill="#15705f" />
            <path d="M480 130 L560 300 L512 300 Z" fill="#2fbf9c" opacity=".85" />
            <path d="M540 300 L600 170 L672 300 Z" fill="#0f5a4c" />
            <path d="M600 170 L672 300 L628 300 Z" fill="#38c9a4" opacity=".7" />
            <path d="M230 300 L280 180 L340 300 Z" fill="#0f5045" />
            <path d="M280 180 L340 300 L302 300 Z" fill="#27ae8d" opacity=".7" />
            <path d="M620 300 L664 220 L700 300 Z" fill="#1a7a66" />
          </g>
          <g fill="#c8f5e8" opacity=".55">
            <path d="M360 90 L372 132 L352 128 Z" />
            <path d="M480 130 L492 168 L470 164 Z" />
            <path d="M600 170 L610 202 L592 198 Z" />
          </g>
          <g fill="#eafff8" opacity=".5">
            <circle cx="366" cy="82" r="2.2" />
            <circle cx="486" cy="122" r="2" />
            <circle cx="606" cy="162" r="2" />
          </g>
        </svg>
        <div className="coming-scrim"></div>
        <div className="wrap coming-inner">
          <span className="coming-ic">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 20h16M5 20V9h14v11M3 9l9-5 9 5M9 20v-6h6v6M12 12h.01" />
            </svg>
          </span>
          <div className="coming-copy">
            <div className="eyebrow">PARTICIPATING COMPANIES &amp; SPONSORS</div>
            <h2>COMING SOON</h2>
            <p>Participating companies and sponsors will be announced soon. Stay tuned!</p>
            <button
              className="btn-ghost"
              type="button"
              onClick={() => alert("Registration opening soon!")}
            >
              REGISTER TO STAY UPDATED{" "}
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
        </div>
      </section>

      {/* ================= INFO BAR ================= */}
      <section className="infobar" id="infobar">
        <div className="wrap info-grid">
          <div className="info">
            <span className="info-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M4 9.5h16M8 3v4M16 3v4M8 13.5h2M11 13.5h2M14 13.5h2M8 16.5h2M11 16.5h2" />
              </svg>
            </span>
            <div>
              <b>DATES</b>
              <p>
                February 17–18, 2027
                <br />
                Gala Networking Event – Feb 17
              </p>
            </div>
          </div>
          <div className="info">
            <span className="info-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <path d="M12 21s-6.5-5.3-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.7-6.5 10-6.5 10z" />
                <circle cx="12" cy="11" r="2.3" />
              </svg>
            </span>
            <div>
              <b>VENUE</b>
              <p>
                Boca Raton Innovation Campus
                <br />
                5000 T-Rex Ave,
                <br />
                Boca Raton, Florida
              </p>
            </div>
          </div>
          <div className="info">
            <span className="info-ic">
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
            <div>
              <b>AUDIENCE</b>
              <p>
                Family Offices, HNWIs, Funds, Brokers, Analysts and Corporate
                Development Teams
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
