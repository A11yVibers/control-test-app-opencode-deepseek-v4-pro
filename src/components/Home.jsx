import { researcher } from '../data'

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <img className="hero__img" src={researcher.image} alt={`Portrait of ${researcher.name}`} />
        <div className="hero__text">
          <h1>{researcher.name}</h1>
          <p className="hero__title">{researcher.title}</p>
          <p className="hero__affiliation">{researcher.affiliation}</p>
          <a className="btn" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}