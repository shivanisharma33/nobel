"use client";

import React from "react";

interface SpeakersViewProps {
  onNavigate: (view: string) => void;
}

export default function SpeakersView({ onNavigate }: SpeakersViewProps) {
  const handleNavClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pview on" id="pv-speakers">
      {/* BREADCRUMB */}
      <div className="wrap crumbs">
        <a href="#home" onClick={(e) => handleNavClick("home", e)}>
          Home
        </a>
        <span className="sep">&rsaquo;</span>Speakers
      </div>

      {/* HERO */}
      <section className="pc-hero">
        <img
          className="hero-art"
          src="/assets/hero-art.webp"
          alt="Waterfront at sunset in Boca Raton, Florida"
        />
        <div className="hero-scrim"></div>
        <div className="wrap pc-hero-inner">
          <h1>
            SPEAKERS
            <br />
            <span className="gr">&amp; PRESENTERS</span>
          </h1>
          <p>
            Hear from the industry leaders, investors, and visionaries shaping the
            future of mining at THE Noble Mining Investment Conference.
          </p>
          <div className="hero-btns">
            <button
              className="btn-teal"
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

      {/* COMING SOON CENTERPIECE */}
      <section className="pc-soon">
        <img
          className="pc-soon-bg"
          src="/assets/hero-art.webp"
          alt="Boca Raton Waterfront"
        />
        <div className="pc-soon-scrim"></div>
        <div className="pc-soon-inner">
          <span className="pc-soon-badge">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
            LINEUP IN PROGRESS
          </span>
          <h2>
            Speakers <span className="gr">Coming Soon</span>
          </h2>
          <p>
            Our speaker and presenter lineup is being finalized. Register your interest
            to be the first to know as keynotes and presenters are confirmed.
          </p>
          <div className="pc-soon-btns">
            <button
              className="btn-teal"
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
            <button
              className="btn-ghost"
              type="button"
              onClick={() => alert("Contact form opening soon!")}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="pc-expect">
        <div className="wrap">
          <div className="pc-expect-head">
            <div className="eyebrow">WHAT TO EXPECT</div>
            <h2>Insight from Industry Leaders</h2>
          </div>
          <div className="pc-expect-grid">
            <div className="pce">
              <span className="pce-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </span>
              <b>
                Keynote
                <br />
                Speakers
              </b>
              <p>Industry leaders opening each day with keynote addresses.</p>
            </div>
            <div className="pce">
              <span className="pce-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="12" rx="2" />
                  <path d="M9 20h6M12 16v4M8 11l2.5-3 2 2 3.5-4.5" />
                </svg>
              </span>
              <b>
                Company
                <br />
                Presentations
              </b>
              <p>Up to 60 mining companies presenting to active investors.</p>
            </div>
            <div className="pce">
              <span className="pce-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <circle cx="7" cy="9" r="2.4" />
                  <circle cx="17" cy="9" r="2.4" />
                  <path d="M3 18c.4-2.4 2-3.6 4-3.6S10.6 15.6 11 18M13 18c.4-2.4 2-3.6 4-3.6S20.6 15.6 21 18" />
                </svg>
              </span>
              <b>
                Panel
                <br />
                Discussions
              </b>
              <p>Expert panels exploring market trends and opportunities.</p>
            </div>
            <div className="pce">
              <span className="pce-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="6" r="2.6" />
                  <circle cx="6" cy="17" r="2.6" />
                  <circle cx="18" cy="17" r="2.6" />
                  <path d="M10.5 8l-3 6.5M13.5 8l3 6.5M8.6 17h6.8" />
                </svg>
              </span>
              <b>
                Investor
                <br />
                Networking
              </b>
              <p>Connect directly with speakers and presenters between sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLACEHOLDER SPEAKER ROSTER */}
      <section className="pc-roster">
        <div className="wrap">
          <div className="pc-roster-head">
            <div className="eyebrow">THE LINEUP</div>
            <h2>Featured Speakers</h2>
          </div>
          <p className="pc-roster-note">
            Speaker and presenter announcements will appear here as they are confirmed.
          </p>
          <div className="pc-roster-grid" id="spRoster">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="pcr sp">
                <span className="pcr-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="8" r="3.6" />
                    <path d="M5 20c.8-4 3.4-6 7-6s6.2 2 7 6" />
                  </svg>
                </span>
                <span>COMING SOON</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pc-cta">
        <div className="pc-cta-band">
          <div className="pc-cta-copy">
            <div className="eyebrow">GET INVOLVED</div>
            <h2>Interested in Speaking?</h2>
            <p>
              If you'd like to be considered as a speaker or presenter, or to learn more
              about the program, please get in touch.
            </p>
          </div>
          <div className="pc-cta-side">
            <div className="pc-cta-row">
              <span className="ci">
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
            <div className="pc-cta-row">
              <span className="ci">
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
        </div>
      </section>
    </div>
  );
}
