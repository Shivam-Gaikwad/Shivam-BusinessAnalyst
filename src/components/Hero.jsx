import { useState, useEffect } from "react";
import { profile as p, process } from "../data";

const words = ["Technology & Data", "Requirements & Process", "Agile Delivery", "Insights & Analytics"];

export default function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true);
  const [w, setW] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setW((x) => (x + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <header className="hero" id="top">
        <div>
          <h1>{p.name}</h1>
          <div className="role">Business Analyst · <span key={w} className="rot sw">{words[w]}</span></div>
          <p>{p.pitch}</p>
          <div className="btns">
            <a className="btn p" href="#projects">View case studies</a>
            <a className="btn s" href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn s" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        {/* Put your photo at public/photo.webp. If it is missing, initials show instead. */}
        <div className="photo" role="img" aria-label={`Photo of ${p.name}`}>
          {hasPhoto ? (
            <img src={`${import.meta.env.BASE_URL}photo.webp`} alt={p.name} onError={() => setHasPhoto(false)} />
          ) : (
            <span>SG</span>
          )}
        </div>
      </header>
      <div className="rtm">
        <h2>How I work: every requirement stays traceable</h2>
        <p>A single thread from business need to release, so nothing is built without a reason and nothing ships untested.</p>
        <div className="flow">
          {process.map(([t, s]) => (
            <div key={t}>{t}<small>{s}</small></div>
          ))}
        </div>
      </div>
    </>
  );
}
