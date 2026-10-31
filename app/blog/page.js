import { site, posts } from "@/lib/site";

export const metadata = { title: `Blog | ${site.name}` };

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <div className="list">
        {posts.map((p, i) => (
          <div key={i}><span className="date">{p.date}</span><h3>{p.title}</h3><p>{p.text}</p></div>
        ))}
      </div>
    </>
  );
}
