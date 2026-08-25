import { links } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <h2>Contact</h2>
      <p className="contact__intro">
        Please get in touch if you are interested in collaboration, joining the
        lab, or have questions about our research.
      </p>
      <p>
        <a className="contact__email" href={`mailto:${links.email}`}>
          {links.email}
        </a>
      </p>
      <ul className="contact__links">
        <li>
          <a href={links.scholar} target="_blank" rel="noopener noreferrer">
            Google Scholar
          </a>
        </li>
        <li>
          <a href={links.orcid} target="_blank" rel="noopener noreferrer">
            ORCID
          </a>
        </li>
        <li>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  )
}