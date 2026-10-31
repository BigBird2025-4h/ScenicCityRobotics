import Photo from "@/components/Photo";
import { site, photos } from "@/lib/site";

export const metadata = { title: `Portfolio | ${site.name}` };

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <p>Robots, designs, and projects from our team.</p>
      <div className="list">
        <div><h3>Rookie Robot</h3><p>Our first competition robot. Details coming soon.</p></div>
        <div><h3>Prototype Lab</h3><p>Early mechanisms and testing.</p></div>
      </div>
      <h2>Photo Gallery</h2>
      <div className="gallery">
        {photos.map((p, i) => (
          <figure key={i}>
            <Photo src={p.src} alt={p.caption} />
            <figcaption>{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
