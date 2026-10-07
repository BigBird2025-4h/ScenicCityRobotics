import PageHeader from "@/components/PageHeader";
import { POSTS } from "@/lib/site";

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" intro="Updates and build logs from the team." />
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        {POSTS.map((p) => (
          <article key={p.title}>
            <time className="text-sm text-river font-semibold">{p.date}</time>
            <h2 className="font-display text-3xl font-semibold text-deep mt-1">{p.title}</h2>
            <p className="text-slate mt-3 text-lg">{p.body}</p>
          </article>
        ))}
      </div>
    </>
  );
}
