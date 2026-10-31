"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, nav } from "@/lib/site";

export default function Header() {
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="bar">
        <Link className="logo" href="/">
          {site.name.replace(" Robotics", "")} <span>Robotics</span> · {site.number}
        </Link>
        <nav>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={path === n.href ? "on" : ""}>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
