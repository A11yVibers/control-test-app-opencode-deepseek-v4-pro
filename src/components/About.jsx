import { bio } from '../data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About</h2>
        <p className="about__text">{bio}</p>
      </div>
    </section>
  )
}