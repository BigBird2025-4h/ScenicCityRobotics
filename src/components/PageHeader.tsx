import { Ridges } from "./Scenery";

export default function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className="relative bg-gradient-to-b from-deep to-river text-foam overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-28">
        <h1 className="font-display text-5xl sm:text-6xl font-semibold">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-foam/90">{intro}</p>}
      </div>
      <Ridges className="absolute bottom-0 left-0 w-full h-20 text-foam" />
    </section>
  );
}
