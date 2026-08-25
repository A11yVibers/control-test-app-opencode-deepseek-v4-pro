import { researchInterests, projects } from '../data.js'

export default function Research() {
  return (
    <section id="research" className="section section--alt">
      <h2>Research</h2>

      <h3>Key interests</h3>
      <ul className="interests">
        {researchInterests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>

      <h3>Current projects</h3>
      <div className="projects">
        {projects.map((project) => (
          <article key={project.title} className="project">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}