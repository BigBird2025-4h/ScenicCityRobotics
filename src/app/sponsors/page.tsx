import PageHeader from "@/components/PageHeader";
import { SITE, TIERS } from "@/lib/site";

export default function Sponsors() {
  return (
    <>
      <PageHeader title="Sponsors" intro="Sponsors help cover parts, registration, and travel so more students can join. We are looking for our first partners." />
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-5">
          {TIERS.map((t) => (
            <div key={t.name} className="bg-white border border-ripple/40 rounded-lg p-5">
              <h2 className="font-display text-2xl font-semibold text-river">{t.name}</h2>
              <p className="text-slate text-sm mt-1">{t.note}</p>
              <div className="mt-4 h-24 border-2 border-dashed border-ripple/60 rounded grid place-items-center text-slate text-sm">Your logo here</div>
            </div>
          ))}
        </div>
        <a
          href={`mailto:${SITE.email}?subject=Sponsoring%20${encodeURIComponent(SITE.name)}`}
          className="inline-block mt-10 bg-deep text-foam font-semibold px-6 py-3 rounded hover:bg-current"
        >
          Become a sponsor
        </a>
      </div>
    </>
  );
}
