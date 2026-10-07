import PageHeader from "@/components/PageHeader";
import { LANDMARKS } from "@/lib/site";

const roles = [
  ["Build", "Mechanical design, CAD, and assembly."],
  ["Programming", "Autonomous routines and driver controls."],
  ["Outreach", "Events, demos, and community partners."],
  ["Business", "Sponsors, budget, and the team notebook."],
];

export default function About() {
  return (
    <>
      <PageHeader title="About us" intro="Scenic City Robotics is a student robotics team based in Chattanooga, Tennessee, competing in FIRST Tech Challenge." />
      <div className="max-w-6xl mx-auto px-6 py-14">
        <p className="max-w-3xl text-lg text-slate">
          In FTC, teams design, build, and program a robot to play a new game each season. Chattanooga has always been a
          place where things get built and moved, from the railroads to the river. We want to give local students a
          hands-on place to do the same with technology.
        </p>
        <h2 className="font-display text-3xl font-semibold text-deep mt-12">Team roles</h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {roles.map(([t, d]) => (
            <div key={t} className="bg-white border border-ripple/40 rounded-lg p-5">
              <h3 className="font-display text-xl font-semibold text-river">{t}</h3>
              <p className="text-slate mt-1">{d}</p>
            </div>
          ))}
        </div>
        <h2 className="font-display text-3xl font-semibold text-deep mt-12">What guides us</h2>
        <ul className="mt-4 space-y-2 text-slate">
          {LANDMARKS.map((l) => (
            <li key={l.name}><strong className="text-deep">{l.trait}.</strong> {l.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
