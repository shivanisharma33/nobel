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
          <p className="dek">
            THE Noble Mining Investment Conference brings together global leaders,
            innovators and investors to shape a more sustainable and prosperous mining
            industry.
          </p>
          <div className="hero-btns">
            <button
              className="btn-teal"
              type="button"
              onClick={() => onNavigate("register")}
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
            <img
              src="/assets/images (1).jpeg"
              alt="Noble Mining Conference Collaboration"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
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
                style={{ whiteSpace: "nowrap" }}
              >
                Noble Capital Markets
              </a>
              .
            </p>
            <p>
              Over two days, the conference features up to 60 mining companies with
              one on one meetings, presentations and exceptional networking
              opportunities.
            </p>
            <div className="feat-list">
              <div className="feat-li">
                <span className="fi">
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
                One on one investor meetings
              </div>
              <div className="feat-li">
                <span className="fi">
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
              <div className="feat-li">
                <span className="fi">
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
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}
      <section className="aud">
        <div className="wrap">
          <div className="aud-head">
            <div className="eyebrow">WHO SHOULD ATTEND</div>
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
              <p>Funds, family offices, HNWIs and institutional investors.</p>
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
              <p>Legal, financial and strategic advisors supporting the sector.</p>
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
      <section className="exp">
        <div className="wrap">
          <div className="exp-head">
            <div className="eyebrow">WHY ATTEND</div>
            <h2>A Premier Mining Investment Experience</h2>
          </div>
          <div className="exp-grid">
            <div className="exp-i">
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
            <div className="exp-i">
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
              <p>Pre-scheduled one on one meetings with active investors.</p>
            </div>
            <div className="exp-i">
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
            <div className="exp-i">
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
    </div>
  );
}
