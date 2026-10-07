"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { MountainMark, Truss } from "./Scenery";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-deep text-foam">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold" onClick={() => setOpen(false)}>
          <MountainMark className="w-8 h-8 text-ripple" />
          {SITE.name}
        </Link>

        <button
          className="md:hidden border border-ripple/60 rounded px-3 py-1.5 text-sm font-semibold"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} md:flex absolute md:static top-full left-0 right-0 flex-col md:flex-row gap-1 bg-deep md:bg-transparent px-5 pb-4 md:p-0`}
        >
          {NAV.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-1.5 rounded text-sm font-semibold hover:bg-white/10 ${active ? "bg-river" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
      {/* Walnut Street Bridge truss as the bridge deck under the nav */}
      <div className="h-3 text-ripple/70 border-t border-ripple/30">
        <Truss />
      </div>
    </header>
  );
}
