"use client";

import React from "react";

interface Partner {
  id: string;
  alt: string;
  src: string;
}

export default function PartnerMarquee() {
  const partners: Partner[] = [
    { id: "logo-10", alt: "Partner Logo 10", src: "/logo/10.svg" },
    { id: "logo-11", alt: "Partner Logo 11", src: "/logo/11.svg" },
    { id: "logo-12", alt: "Partner Logo 12", src: "/logo/12.svg" },
    { id: "logo-13", alt: "Partner Logo 13", src: "/logo/13.svg" },
    { id: "logo-14", alt: "Partner Logo 14", src: "/logo/14.svg" },
    { id: "logo-15", alt: "Partner Logo 15", src: "/logo/15.svg" },
    { id: "logo-16", alt: "Partner Logo 16", src: "/logo/16.svg" },
    { id: "logo-17", alt: "Partner Logo 17", src: "/logo/17.svg" },
    { id: "logo-18", alt: "Partner Logo 18", src: "/logo/18.svg" },
    { id: "logo-19", alt: "Partner Logo 19", src: "/logo/19.svg" },
    { id: "logo-20", alt: "Partner Logo 20", src: "/logo/20.svg" },
    { id: "logo-21", alt: "Partner Logo 21", src: "/logo/21.svg" },
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="partners-band" aria-label="Featured Media and Industry Partners">
      <div className="wrap">
        <div className="partners-header">
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
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="partner-logo-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

