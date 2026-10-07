import Link from "next/link";
import { SITE } from "@/lib/site";
import { Wave } from "./Scenery";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="text-deep">
        <Wave className="block w-full h-10" />
      </div>
      <div className="bg-deep text-foam">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="font-display text-xl">{SITE.name}</p>
          <p className="text-sm text-foam/70 mt-1">
            FTC Team #{SITE.teamNumber} &middot; {SITE.city}
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm font-semibold">
            <Link href="/sponsors" className="hover:text-ripple">Sponsors</Link>
            <Link href="/outreach" className="hover:text-ripple">Outreach</Link>
            <Link href="/contact" className="hover:text-ripple">Contact</Link>
          </div>
          <p className="mt-4 text-xs text-foam/50">&copy; {new Date().getFullYear()} {SITE.name}</p>
        </div>
      </div>
    </footer>
  );
}
