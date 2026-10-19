import { projects, profile } from "../data";
import Chips from "./Chips";
export default function Projects() {
  return (
    <section id="projects">
      <h2>Business analysis case studies</h2>
      <p style={{ color: "var(--muted)", maxWidth: "68ch", margin: "-8px 0 24px" }}>
        Portfolio projects that show the full BA workflow: discovery, documentation, analysis and validation.
      </p>
      <div className="proj">
        {projects.map((x) => (
          <article className="card" key={x.title}>
            <div>
              <div className="tag">{x.tag}</div>
              <h3>{x.title}</h3>
              <p style={{ color: "var(--muted)" }}>{x.blurb}</p>
              <Chips items={x.tools} />
              <a className="gh" href={profile.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <dl>
              <dt>Problem</dt><dd>{x.problem}</dd>
              <dt>What I did</dt><dd>{x.did}</dd>
              <dt>Deliverables</dt><dd>{x.deliverables}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
