import PageHeader from "@/components/PageHeader";
import { RESOURCES } from "@/lib/site";

export default function Resources() {
  return (
    <>
      <PageHeader title="Resources" intro="Starting points for new teams, students, and parents." />
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-4">
        {RESOURCES.map((r) => (
          <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" className="block bg-white border border-ripple/40 rounded-lg p-5 hover:shadow-md transition">
            <h2 className="font-display text-2xl font-semibold text-river">{r.label}</h2>
            <p className="text-slate mt-1">{r.note}</p>
          </a>
        ))}
      </div>
    </>
  );
}
