import PageHeader from "@/components/PageHeader";

const items = [
  { title: "Season 1 robot", text: "In design. Photos, CAD, and specs will go here." },
  { title: "Engineering notebook", text: "Our design process, documented as we go." },
];

export default function Portfolio() {
  return (
    <>
      <PageHeader title="Portfolio" intro="Our robots and engineering work will live here as our first season takes shape." />
      <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 gap-5">
        {items.map((i) => (
          <div key={i.title} className="bg-white border border-ripple/40 rounded-lg p-6">
            <div className="h-40 rounded bg-mist grid place-items-center text-slate text-sm mb-4">Photo coming soon</div>
            <h2 className="font-display text-2xl font-semibold text-deep">{i.title}</h2>
            <p className="text-slate mt-1">{i.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
