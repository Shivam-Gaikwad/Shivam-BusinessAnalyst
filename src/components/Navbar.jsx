const links = ["about", "skills", "experience", "projects", "education", "contact"];
export default function Navbar({ name }) {
  return (
    <nav aria-label="Main">
      <b>{name}</b>
      <ul>
        {links.map((l) => (
          <li key={l}><a href={`#${l}`}>{l[0].toUpperCase() + l.slice(1)}</a></li>
        ))}
      </ul>
    </nav>
  );
}
