export default function Chips({ items }) {
  return <ul className="chips">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}
