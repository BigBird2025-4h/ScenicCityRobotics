import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = { title: `Outreach | ${site.name}` };

export default function Outreach() {
  return (
    <>
      <h1>Outreach</h1>
      <p>FIRST is about more than robots. We’re committed to sharing STEM with Chattanooga and the surrounding region.</p>
      <div className="list">
        <div><h3>School Demos</h3><p>Bringing our robot to local classrooms and showing students what engineering looks like.</p></div>
        <div><h3>Community Events</h3><p>Booths and demos at festivals, libraries, and STEM nights.</p></div>
        <div><h3>Mentoring Younger Teams</h3><p>Helping FLL and FTC teams get started.</p></div>
        <div><h3>Campus Partnership</h3><p>Working with Chattanooga State to grow STEM interest on campus.</p></div>
      </div>
      <h2>Request a Demo</h2>
      <p>Want us at your school or event? <Link href="/contact">Get in touch.</Link></p>
    </>
  );
}
