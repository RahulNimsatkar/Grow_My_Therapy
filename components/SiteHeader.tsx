"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { href: "#approach", label: "My approach" },
  { href: "#services", label: "Services" },
  { href: "#office", label: "Our office" },
  { href: "#faqs", label: "FAQs" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <a className="brand" href="#top" aria-label="Dr. Maya Reynolds home" onClick={() => setOpen(false)}>
          <span className="brand-mark">m<span>.</span></span>
          <span className="brand-copy"><strong>Dr. Maya Reynolds</strong><small>Psychology · Santa Monica</small></span>
        </a>
        <nav className={`desktop-nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.8} /></a>
        </nav>
        <button className="mobile-menu-button" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen((current) => !current)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
