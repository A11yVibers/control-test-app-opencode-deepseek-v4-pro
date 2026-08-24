import { researchInterests, projects } from '../data'

export default function Research() {
  return (
    <section id="research" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Research</h2>

        <h3 className="subsection__title">Key Interests</h3>
        <ul className="interests">
          {researchInterests.map((interest) => (
            <li key={interest} className="interest">
              {interest}
            </li>
          ))}
        </ul>

        <h3 className="subsection__title">Current Projects</h3>
        <div className="projects">
          {projects.map((project) => (
            <article key={project.title} className="project">
              <h4 className="project__title">{project.title}</h4>
              <p className="project__desc">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}