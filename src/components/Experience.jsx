import { experience } from "../data";
export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((e, i) => (
        <div className="card job" key={e.title} style={i ? { marginTop: 20 } : undefined}>
          <div className="d">{e.dates}<br />{e.place}</div>
          <div>
            <h3>{e.title}</h3>
            <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      ))}
    </section>
  );
}
