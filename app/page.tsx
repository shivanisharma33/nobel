"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import PartnerMarquee from "@/components/PartnerMarquee";
import Footer from "@/components/Footer";
import HomeView from "@/components/views/HomeView";
import AboutView from "@/components/views/AboutView";
import VenueView from "@/components/views/VenueView";
import AgendaView from "@/components/views/AgendaView";
import CompaniesView from "@/components/views/CompaniesView";
import SpeakersView from "@/components/views/SpeakersView";

export default function Page() {
  const [activeView, setActiveView] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["home", "about", "venue", "agenda", "companies", "speakers"].includes(hash)) {
        setActiveView(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (view: string) => {
    setActiveView(view);
    if (window.history.pushState) {
      window.history.pushState(null, "", `#${view}`);
    } else {
      window.location.hash = view;
    }
  };

  return (
    <>
      <Header activeView={activeView} onNavigate={handleNavigate} />

      <main>
        {activeView === "home" && <HomeView onNavigate={handleNavigate} />}
        {activeView === "about" && <AboutView onNavigate={handleNavigate} />}
        {activeView === "venue" && <VenueView onNavigate={handleNavigate} />}
        {activeView === "agenda" && <AgendaView onNavigate={handleNavigate} />}
        {activeView === "companies" && <CompaniesView onNavigate={handleNavigate} />}
        {activeView === "speakers" && <SpeakersView onNavigate={handleNavigate} />}
      </main>

      <PartnerMarquee />
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
