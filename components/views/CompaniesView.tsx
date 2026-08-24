"use client";

import React, { useState } from "react";
import PartnerMarquee from "@/components/PartnerMarquee";

interface CompaniesViewProps {
  onNavigate: (view: string) => void;
}

export default function CompaniesView({ onNavigate }: CompaniesViewProps) {
  const [spPage, setSpPage] = useState(0);
  const [spZoom, setSpZoom] = useState(100);

  const handleDownload = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    alert("Sponsor Prospectus PDF coming soon!");
  };

  const handleZoomIn = () => {
    setSpZoom((prev) => Math.min(160, prev + 10));
  };

  const handleZoomOut = () => {
    setSpZoom((prev) => Math.max(60, prev - 10));
  };

  const handlePrev = () => {
    setSpPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setSpPage((prev) => Math.min(0, prev + 1));
  };
  const icons = [
    <path key="1" d="M4 21h16M6 21V8l4-3v16M14 21V10h4v11M9.5 9h.01M9.5 12h.01M9.5 15h.01" />,
    <path key="2" d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5-5-2.6-5 2.6 1-5.5-4-3.9 5.5-.8z" />,
    <path key="3" d="M4 20h16M5 20V9h14v11M3 9l9-5 9 5M9 20v-6h6v6" />,
    <React.Fragment key="4">
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 20c.7-3.7 3.1-5.6 6.5-5.6s5.8 1.9 6.5 5.6" />
    </React.Fragment>,
  ];

  return (
    <div className="pview on" id="pv-companies">
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
            PARTICIPATING COMPANIES
            <br />
            <span className="gr">&amp; SPONSORS</span>
          </h1>
          <p>
            Discover the mining companies presenting and the partners supporting THE
            Noble Mining Investment Conference.
          </p>
          <div className="hero-btns">
            <button
              className="btn-teal"
              type="button"
              onClick={() => onNavigate("register")}
            >
              REGISTER TO STAY&nbsp;UPDATED{" "}
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





      

      <PartnerMarquee />

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
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4l3 2" />
            </svg>
            ANNOUNCEMENTS PENDING
          </span>
          <h2>
            Coming <span className="gr">Soon</span>
          </h2>
          <p>
            Our participating mining companies and sponsors will be announced here
            soon. Register your interest to be the first to know as the lineup is
            confirmed.
          </p>
          <div className="pc-soon-btns">
            <button
              className="btn-teal"
              type="button"
              onClick={() => onNavigate("register")}
            >
              REGISTER TO STAY&nbsp;UPDATED{" "}
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
              onClick={() => onNavigate("register-company")}
            >
              CONTACT&nbsp;US
            </button>
          </div>
        </div>
      </section>

      {/* PLACEHOLDER ROSTER */}
      <section className="pc-roster">
        <div className="wrap">
          <div className="pc-roster-head">
            <div className="eyebrow">THE&nbsp;LINEUP</div>
            <h2>Companies &amp;&nbsp;Sponsors</h2>
          </div>
          <p className="pc-roster-note">
            Participating company and sponsor announcements will appear here as they are
            confirmed.
          </p>
          <div className="pc-roster-grid" id="pcRoster">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="pcr">
                <span className="pcr-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icons[i % icons.length]}
                  </svg>
                </span>
                <span>COMING SOON</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSOR PDF SECTION */}
      <section className="ag-pdf" id="sponsorPdf">
        <div className="wrap">
          <div className="agp-head">
            <div className="eyebrow">SPONSORSHIP&nbsp;OPPORTUNITIES</div>
            <h2>Sponsor Information &amp;&nbsp;Prospectus</h2>
          </div>
          <p className="agp-note">
            Browse our sponsorship opportunities prospectus below or download the PDF for complete details on package options, booth spaces, and presentation slots.
          </p>
          <div className="pdfv">
            <div className="pdfv-main">
              <div className="pdfv-bar">
                <button
                  className="pdfv-btn"
                  id="spPrev"
                  aria-label="Previous page"
                  onClick={handlePrev}
                  disabled={spPage === 0}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 6l-6 6 6 6" />
                  </svg>
                </button>
                <span className="lbl" id="spLbl">
                  1 / 1
                </span>
                <button
                  className="pdfv-btn"
                  id="spNext"
                  aria-label="Next page"
                  onClick={handleNext}
                  disabled={true}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 6l6 6-6 6" />
                  </svg>
                </button>
                <span className="grow"></span>
                <button
                  className="pdfv-btn"
                  id="spZOut"
                  aria-label="Zoom out"
                  onClick={handleZoomOut}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M6 12h12" />
                  </svg>
                </button>
                <span className="lbl" id="spZLbl">
                  {spZoom}%
                </span>
                <button
                  className="pdfv-btn"
                  id="spZIn"
                  aria-label="Zoom in"
                  onClick={handleZoomIn}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M12 6v12M6 12h12" />
                  </svg>
                </button>
                <button className="pdfv-dl" id="spDl" onClick={handleDownload}>
                  DOWNLOAD&nbsp;SPONSOR&nbsp;PDF{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v11M7.5 11.5L12 16l4.5-4.5M5 19.5h14" />
                  </svg>
                </button>
              </div>
              <div
                className="pdfv-stage"
                id="spStage"
                style={{
                  minHeight: "420px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  background: "linear-gradient(135deg, #072620 0%, #0c3d35 50%, #051d18 100%)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(79, 224, 187, 0.2)",
                  padding: "40px 24px",
                }}
              >
                {/* Ambient Radial Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "380px",
                    height: "380px",
                    background: "radial-gradient(circle, rgba(79, 224, 187, 0.18) 0%, rgba(0,0,0,0) 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    textAlign: "center",
                    transform: `scale(${spZoom / 100})`,
                    transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                    maxWidth: "520px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Glowing Icon Badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "72px",
                      height: "72px",
                      borderRadius: "20px",
                      background: "rgba(255, 255, 255, 0.06)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(79, 224, 187, 0.35)",
                      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(79, 224, 187, 0.25)",
                      marginBottom: "20px",
                      color: "#4fe0bb",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "36px", height: "36px" }}
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>

                  {/* Status Badge */}
                  <div style={{ marginBottom: "14px" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 16px",
                        borderRadius: "30px",
                        background: "rgba(79, 224, 187, 0.12)",
                        border: "1px solid rgba(79, 224, 187, 0.3)",
                        color: "#72edd1",
                        fontSize: "11px",
                        fontWeight: "800",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "#4fe0bb",
                          boxShadow: "0 0 8px #4fe0bb",
                        }}
                      />
                      OFFICIAL SPONSORS PENDING
                    </span>
                  </div>

                  {/* Headline */}
                  <h3
                    style={{
                      fontSize: "30px",
                      fontWeight: "800",
                      color: "#ffffff",
                      letterSpacing: "-0.01em",
                      margin: "0 0 10px",
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    }}
                  >
                    SPONSORS <span className="gr">COMING SOON</span>
                  </h3>

                  {/* Subtext */}
                  <p
                    style={{
                      fontSize: "14.5px",
                      color: "#c2e6de",
                      lineHeight: "1.65",
                      margin: "0 auto",
                      maxWidth: "440px",
                    }}
                  >
                    Our comprehensive 2026 sponsorship prospectus is currently being finalized.
                    Packages, booth allocations, and speaking slots will be released here shortly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pc-cta">
        <div className="pc-cta-band">
          <div className="pc-cta-copy">
            <div className="eyebrow">GET&nbsp;INVOLVED</div>
            <h2>Interested in Participating or&nbsp;Sponsoring?</h2>
            <p>
              Mining companies and prospective sponsors are welcome to get in touch.
              Register on this website or contact us directly for more information.
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
