import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = { title: `Sponsors | ${site.name}` };

export default function Sponsors() {
  return (
    <>
      <h1>Sponsors</h1>
      <p>
        Our team runs on community support. Sponsorships fund parts, tools, registration fees, and travel.
        Thank you to everyone who makes our robot possible.
      </p>
      <h2>Sponsorship Levels</h2>
      <div className="list">
        <div><h3>Platinum</h3><p>Large logo on robot and shirts, featured on website, banner at events.</p></div>
        <div><h3>Gold</h3><p>Logo on robot and website, social media shoutouts.</p></div>
        <div><h3>Silver</h3><p>Logo on website and team banner.</p></div>
        <div><h3>Supporter</h3><p>Name listed on our website. Every bit helps!</p></div>
      </div>
      <h2>Our Sponsors</h2>
      <p>Your logo could be here. <Link href="/contact">Become our first sponsor.</Link></p>
      <a className="btn" href={`mailto:${site.email}?subject=Sponsorship%20Inquiry`}>Email About Sponsoring</a>
    </>
  );
}
