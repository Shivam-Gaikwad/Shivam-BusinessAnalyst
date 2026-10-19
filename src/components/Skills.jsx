import { skills } from "../data";
import Chips from "./Chips";
export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="two">
        {skills.map(([title, items]) => (
          <div className="card" key={title}><h3>{title}</h3><Chips items={items} /></div>
        ))}
      </div>
    </section>
  );
}
