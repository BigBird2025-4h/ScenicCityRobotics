import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} {site.name} · FRC Team {site.number} · {site.location} · Chattanooga, TN
    </footer>
  );
}
