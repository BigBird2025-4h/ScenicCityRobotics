import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const ideas = [
  "Robot demos at local schools and libraries",
  "Open build days for students who are curious",
  "Community events and STEM nights",
  "Mentoring younger students in FIRST LEGO League",
];

export default function Outreach() {
  return (
    <>
      <PageHeader title="Outreach" intro="We want more students in Chattanooga to see what robotics can be." />
      <div className="max-w-3xl mx-auto px-6 py-14">
        <ul className="space-y-3 text-lg text-slate list-disc pl-6">
          {ideas.map((i) => <li key={i}>{i}</li>)}
        </ul>
        <p className="mt-8 text-lg">
          Want us at your event? <Link className="text-river font-semibold underline" href="/contact">Get in touch</Link>.
        </p>
      </div>
    </>
  );
}
