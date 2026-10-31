import Image from "next/image";

// Shows a real photo if src is set, otherwise a striped placeholder.
export default function Photo({ src, alt, label = "Photo", round = false }) {
  if (src) {
    return (
      <div className={"photo" + (round ? " round" : "")}>
        <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 300px" style={{ objectFit: "cover" }} />
      </div>
    );
  }
  return <div className={"photo ph" + (round ? " round" : "")} aria-label={alt}>{round ? "" : label}</div>;
}
