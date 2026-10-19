import { education, certifications } from "../data";
export default function Education() {
  return (
    <section id="education">
      <h2>Education &amp; certifications</h2>
      <div className="two">
        <div className="card"><h3>Education</h3><ul className="l">{education.map((e) => <li key={e}>{e}</li>)}</ul></div>
        <div className="card"><h3>Certifications</h3><ul className="l">{certifications.map((c) => <li key={c}>{c}</li>)}</ul></div>
      </div>
    </section>
  );
}
