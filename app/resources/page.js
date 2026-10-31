import { site } from "@/lib/site";

export const metadata = { title: `Resources | ${site.name}` };

const links = [
  ["FIRST Robotics Competition", "https://www.firstinspires.org/robotics/frc", "firstinspires.org/robotics/frc", ""],
  ["The Blue Alliance", "https://www.thebluealliance.com", "thebluealliance.com", " for team and event data."],
  ["WPILib Docs", "https://docs.wpilib.org", "docs.wpilib.org", " for robot programming."],
  ["Chief Delphi", "https://www.chiefdelphi.com", "chiefdelphi.com", ", the FRC community forum."],
];

export default function Resources() {
  return (
    <>
      <h1>Resources</h1>
      <div className="list">
        {links.map(([title, href, label, note]) => (
          <div key={href}>
            <h3>{title}</h3>
            <p><a href={href} target="_blank" rel="noopener noreferrer">{label}</a>{note}</p>
          </div>
        ))}
      </div>
      <h2>Team Documents</h2>
      <p>Team handbook, permission forms, and safety guidelines will be posted here.</p>
    </>
  );
}
