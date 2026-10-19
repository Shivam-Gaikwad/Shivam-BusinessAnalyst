import { profile as p } from "../data";
export default function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="kv">
        {p.facts.map(([b, s]) => (<div key={b}><b>{b}</b><span>{s}</span></div>))}
      </div>
      <p style={{ maxWidth: "70ch", color: "var(--muted)" }}>{p.about}</p>
    </section>
  );
}
