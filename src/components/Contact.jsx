import { profile as p } from "../data";
export default function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <div>
          <h2>Let’s work together</h2>
          <p>I’m available for Business Analyst, Associate BA, Functional Analyst and Data Analyst roles. Send a note and I’ll reply quickly.</p>
        </div>
        <ul>
          <li>Email: <a href={`mailto:${p.email}`}>{p.email}</a></li>
          <li>Phone: <a href={`tel:${p.phone.replace(/\s/g, "")}`}>{p.phone}</a></li>
          <li>LinkedIn: <a href={p.linkedin} target="_blank" rel="noopener noreferrer">shivamgaikwad572</a></li>
          <li>GitHub: <a href={p.github} target="_blank" rel="noopener noreferrer">Shivam-Gaikwad</a></li>
          <li>Location: {p.location}</li>
        </ul>
      </div>
    </section>
  );
}
