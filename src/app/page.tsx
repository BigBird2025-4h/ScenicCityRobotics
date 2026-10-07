import Link from "next/link";
import { Bubbles, Fish, Ridges } from "@/components/Scenery";
import { LANDMARKS } from "@/lib/site";

const exhibits = [
  { n: "01", title: "Portfolio", href: "/portfolio", text: "Our robots and engineering work." },
  { n: "02", title: "Blog", href: "/blog", text: "Build logs and updates from the team." },
  { n: "03", title: "Sponsors", href: "/sponsors", text: "The partners who keep us afloat." },
  { n: "04", title: "Resources", href: "/resources", text: "Guides and tools for FTC teams." },
];

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-deep via-current to-river text-foam overflow-hidden">
        <Bubbles />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-52">
          <p className="inline-flex items-center gap-2 text-ripple font-semibold tracking-wide uppercase text-sm">
            <Fish className="w-8 h-4" /> FIRST Tech Challenge &middot; Chattanooga, TN
          </p>
          <h1 className="font-display font-semibold text-5xl sm:text-7xl leading-[1.02] mt-4 max-w-3xl">
            Built on the river. Climbing the mountain.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foam/90">
            Scenic City Robotics is a new team for students across the Chattanooga area. We design, build, and
            program robots, and we are recruiting our first members.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="bg-foam text-deep font-semibold px-6 py-3 rounded hover:bg-mist">Join the team</Link>
            <Link href="/sponsors" className="border-2 border-foam/80 font-semibold px-6 py-3 rounded hover:bg-white/10">Sponsor us</Link>
          </div>
        </div>
        <Ridges className="absolute bottom-0 left-0 w-full h-40 text-foam" />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display text-4xl font-semibold text-deep">Explore the exhibits</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {exhibits.map((e) => (
            <Link key={e.n} href={e.href} className="group block bg-white border border-ripple/40 rounded-lg p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <p className="text-xs font-semibold tracking-widest text-river">EXHIBIT {e.n}</p>
              <h3 className="font-display text-2xl font-semibold text-deep mt-1">{e.title}</h3>
              <p className="text-slate mt-2 text-sm">{e.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-semibold text-deep">Only in Chattanooga</h2>
          <p className="mt-3 max-w-2xl text-slate">Four landmarks shape how we build as a team.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {LANDMARKS.map((l) => (
              <div key={l.name} className="bg-white rounded-lg p-6 border-l-8 border-river">
                <p className="text-sm font-semibold text-river uppercase tracking-wide">{l.trait}</p>
                <h3 className="font-display text-2xl font-semibold text-deep mt-1">{l.name}</h3>
                <p className="mt-2 text-slate">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
