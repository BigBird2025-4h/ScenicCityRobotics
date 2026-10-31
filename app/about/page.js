import Link from "next/link";
import Photo from "@/components/Photo";
import { site, mentors } from "@/lib/site";

export const metadata = { title: `About | ${site.name}` };

export default function About() {
  return (
    <>
      <h1>About Us</h1>
      <p>
        {site.name} (Team {site.number}) is a rookie FRC team that meets at {site.location} in Chattanooga, Tennessee.
        FRC challenges teams to design, build, and program a full-size robot to play a new game each year.
      </p>
      <h2>Our Mission</h2>
      <p>To inspire students to pursue STEM through teamwork, creativity, and real-world engineering experience.</p>
      <h2>Sub-Teams</h2>
      <div className="list">
        <div><h3>Mechanical</h3><p>CAD, machining, and robot assembly.</p></div>
        <div><h3>Electrical</h3><p>Wiring, sensors, and control systems.</p></div>
        <div><h3>Programming</h3><p>Autonomous and driver-controlled code.</p></div>
        <div><h3>Business &amp; Media</h3><p>Fundraising, design, social media, and awards.</p></div>
      </div>
      <h2>Our Mentors</h2>
      <p>The adults and professionals who guide our team.</p>
      <div className="people">
        {mentors.map((m, i) => (
          <div key={i}>
            <Photo src={m.photo} alt={m.name} round />
            <h3>{m.name}</h3>
            <p>{m.role}<br />{m.bio}</p>
          </div>
        ))}
      </div>
      <p>Interested in mentoring? <Link href="/contact">Contact us.</Link></p>
    </>
  );
}
