import { researcher } from '../data'

export default function Contact() {
  const { email, social } = researcher

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <p className="contact__intro">
          Please reach out for collaborations, speaking engagements, or prospective student
          inquiries.
        </p>
        <a className="contact__email" href={`mailto:${email}`}>
          {email}
        </a>
        <ul className="social">
          <li>
            <a href={social.googleScholar} target="_blank" rel="noopener noreferrer">
              Google Scholar
            </a>
          </li>
          <li>
            <a href={social.orcid} target="_blank" rel="noopener noreferrer">
              ORCID
            </a>
          </li>
          <li>
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}