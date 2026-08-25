import { profile } from '../data.js'

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero__text">
        <p className="hero__eyebrow">{profile.affiliation}</p>
        <h1>{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__bio">{profile.bio}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#research">
            View research
          </a>
          <a className="btn btn--ghost" href="#publications">
            Publications
          </a>
        </div>
      </div>
      <div className="hero__image">
        <img src={profile.image} alt={`Portrait of ${profile.name}`} />
      </div>
    </section>
  )
}