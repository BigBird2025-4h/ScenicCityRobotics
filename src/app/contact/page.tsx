import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export default function Contact() {
  const join = `mailto:${SITE.email}?subject=${encodeURIComponent("Interested in " + SITE.name)}&body=${encodeURIComponent("Student name:\nGrade:\nParent or guardian:\nQuestions:\n")}`;
  return (
    <>
      <PageHeader title="Contact" intro="Students, parents, mentors, and sponsors are all welcome." />
      <div className="max-w-3xl mx-auto px-6 py-14 text-lg">
        <p>
          Email: <a className="text-river font-semibold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p className="mt-2 text-slate">Based in {SITE.city}.</p>
        <a href={join} className="inline-block mt-8 bg-deep text-foam font-semibold px-6 py-3 rounded hover:bg-current">
          Email us to join
        </a>
      </div>
    </>
  );
}
