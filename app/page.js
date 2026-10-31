import Link from "next/link";
import { site, posts } from "@/lib/site";

export default function Home() {
  const latest = posts[0];
  return (
    <>
      <div className="hero">
        <div className="hero-in">
          <h1>Building robots. Building futures.</h1>
          <p>
            {site.name}, FRC Team {site.number}, is a new FIRST Robotics Competition team based at {site.location}.
            We bring students together to design, build, and compete.
          </p>
          <Link className="btn" href="/contact">Join the Team</Link>
          <Link className="btn alt" href="/sponsors">Sponsor Us</Link>
        </div>
      </div>
      <div className="list">
        <div><h3>Engineer</h3><p>Hands-on design, fabrication, wiring, and programming.</p></div>
        <div><h3>Compete</h3><p>Build a robot in six weeks and take it to regional competition.</p></div>
        <div><h3>Give Back</h3><p>Share STEM with our Chattanooga community.</p></div>
      </div>
      <h2>Latest Update</h2>
      <div className="list">
        <div><span className="date">{latest.date}</span><h3>{latest.title}</h3><p>{latest.text}</p></div>
      </div>
    </>
  );
}
