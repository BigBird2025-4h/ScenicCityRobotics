import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  title: `${site.name} | FRC Team ${site.number}`,
  description: `${site.name}, FRC Team ${site.number}, a FIRST Robotics Competition team at ${site.location}.`,
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
