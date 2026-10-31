import { site } from "@/lib/site";

export const metadata = { title: `Contact | ${site.name}` };

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>Interested in joining, mentoring, or sponsoring? We’d love to hear from you.</p>
      <div className="list">
        <div><h3>Email</h3><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div>
        <div><h3>Meeting Location</h3><p>{site.location}<br />{site.address}</p></div>
        <div><h3>Social</h3><p>Instagram, YouTube, and more coming soon.</p></div>
      </div>
      <a className="btn" href={`mailto:${site.email}?subject=Joining%20the%20Team`}>Email Us</a>
    </>
  );
}
