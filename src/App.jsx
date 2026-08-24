import { useEffect } from 'react'
import './styles.css'

const EMAIL = 'maya.chen@example.edu'

const publications = [
  {
    authors: 'Chen, M., & Alvarez, R.',
    year: '2024',
    title: 'Interpretability for everyone: Designing explanations of language-model decisions for public audiences',
    venue: 'Journal of Artificial Intelligence Research, 81, 123–145',
    doi: 'https://doi.org/10.1613/jair.1.15000',
    doiLabel: '10.1613/jair.1.15000',
  },
  {
    authors: 'Chen, M., Osei, K., & Tanaka, Y.',
    year: '2023',
    title: 'Auditing fairness across eighty languages',
    venue: 'Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics, 2840–2855',
    doi: 'https://doi.org/10.18653/v1/2023.acl-long.158',
    doiLabel: '10.18653/v1/2023.acl-long.158',
  },
  {
    authors: 'Chen, M.',
    year: '2022',
    title: 'Tracking semantic drift in large social media corpora',
    venue: 'Computational Linguistics, 48(2), 401–430',
    doi: 'https://doi.org/10.1162/coli_a_00438',
    doiLabel: '10.1162/coli_a_00438',
  },
  {
    authors: 'Nguyen, T., & Chen, M.',
    year: '2021',
    title: 'User-centred evaluation of machine translation for community audiences',
    venue: 'Transactions of the Association for Computational Linguistics, 9, 102–118',
    doi: 'https://doi.org/10.1162/tacl_a_00362',
    doiLabel: '10.1162/tacl_a_00362',
  },
]

const interests = [
  'Natural language processing',
  'Human-centred artificial intelligence',
  'Fairness and explainability of language models',
  'Computational sociolinguistics',
  'Language variation and change',
]

const projects = [
  {
    title: 'Interpretability for Everyone',
    description:
      'Designing explanations for language-model decisions that people outside machine learning can genuinely understand and act on.',
  },
  {
    title: 'Multilingual Fairness Audits',
    description:
      'Building an open toolkit for auditing bias in language technology, evaluated across more than eighty languages.',
  },
  {
    title: 'Models of Language Change',
    description:
      'Using very large corpora to trace how word meaning drifts over decades and what that reveals about social change.',
  },
]

const socialLinks = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=00000000000000000' },
  { label: 'GitHub', href: 'https://github.com/maya-chen' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maya-chen' },
]

function ExternalIcon() {
  return <span className="visually-hidden">(opens in a new tab)</span>
}

function handleSubmit(event) {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  const name = String(data.get('name') || '').trim()
  const email = String(data.get('email') || '').trim()
  const message = String(data.get('message') || '').trim()
  const subject = encodeURIComponent(`Research portfolio message from ${name}`)
  const body = encodeURIComponent(
    `${message}\n\nSent from the contact form.\nName: ${name}\nEmail: ${email}`,
  )
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
}

export default function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section[id]'))
    const navLinks = Array.from(document.querySelectorAll('.site-nav a'))
    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.setAttribute('aria-current', 'location')
            } else {
              link.removeAttribute('aria-current')
            }
          })
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Maya Chen, back to top">
            Maya Chen
          </a>
          <nav className="site-nav" aria-label="Primary">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#research">Research</a>
              </li>
              <li>
                <a href="#publications">Publications</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section id="home" className="section" aria-labelledby="home-heading">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1 id="home-heading">Dr. Maya Chen</h1>
              <p className="role">Assistant Professor of Computational Linguistics</p>
              <p className="lead measure">
                I build natural language processing systems that are fair, explainable, and
                genuinely useful to the people they serve. My research connects
                computational methods with human-centred design and the social study of
                language.
              </p>
              <p className="measure">
                <a href="#research">View my research</a>
                <span aria-hidden="true"> · </span>
                <a href="#contact">Get in touch</a>
              </p>
            </div>
            <figure className="profile-figure">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=600&h=600&q=80"
                alt="Portrait of Dr. Maya Chen smiling"
                width="600"
                height="600"
              />
              <figcaption>Photo: Unsplash</figcaption>
            </figure>
          </div>
        </section>

        <section id="about" className="section section-alt" aria-labelledby="about-heading">
          <div className="container">
            <h2 id="about-heading" className="section-heading">
              About
            </h2>
            <div className="measure">
              <p>
                I am an assistant professor in the Department of Language and Information
                Science at Roxbury University, where I lead the Language, People, and
                Machines Lab. My graduate training spans linguistics and computer science,
                and my work brings together computational methods and human-centred design.
              </p>
              <p>
                I received my <abbr title="Doctor of Philosophy">Ph.D.</abbr> in
                linguistics and completed postdoctoral research in an interdisciplinary
                natural language processing group. I teach courses on computational
                linguistics and advise students who want to build language technology that
                works for everyone.
              </p>
            </div>
          </div>
        </section>

        <section id="research" className="section" aria-labelledby="research-heading">
          <div className="container">
            <h2 id="research-heading" className="section-heading">
              Research
            </h2>
            <p className="measure">
              My research asks how language technologies can be made more transparent,
              more equitable, and more accountable to the communities they affect.
            </p>

            <h3>Research interests</h3>
            <ul className="interests">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>

            <h3 className="projects-heading">Current projects</h3>
            <ul className="projects">
              {projects.map((project) => (
                <li className="project" key={project.title}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="publications"
          className="section section-alt"
          aria-labelledby="publications-heading"
        >
          <div className="container">
            <h2 id="publications-heading" className="section-heading">
              Publications
            </h2>
            <p className="measure">
              The citations below are sample placeholders to show the format; replace them
              with your own work.
            </p>
            <ol className="publications">
              {publications.map((pub) => (
                <li className="publication" key={pub.doi}>
                  <p className="citation">
                    {pub.authors} ({pub.year}). &ldquo;{pub.title}.&rdquo; <em>{pub.venue}</em>.
                  </p>
                  <p className="pub-link">
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                      DOI: {pub.doiLabel}
                      <ExternalIcon />
                    </a>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-heading">
          <div className="container">
            <h2 id="contact-heading" className="section-heading">
              Contact
            </h2>
            <div className="contact-grid">
              <div>
                <p className="measure">
                  I am always glad to hear from students, collaborators, and colleagues.
                  The best way to reach me is by email.
                </p>
                <p className="measure">
                  Email:{' '}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>

                <h3>Connect</h3>
                <ul className="contact-links">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                        <ExternalIcon />
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="https://orcid.org/0000-0002-1825-0097"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <abbr title="Open Researcher and Contributor ID">ORCID</abbr>
                      <ExternalIcon />
                    </a>
                  </li>
                </ul>
              </div>

              <form id="contact-form" onSubmit={handleSubmit} aria-describedby="form-instructions">
                <h3>Send a message</h3>
                <p id="form-instructions" className="form-note">
                  Your email app will open with a pre-filled message. Fields marked with an
                  asterisk (<span aria-hidden="true">*</span>
                  <span className="visually-hidden">asterisk</span>) are required.
                </p>
                <div className="field">
                  <label htmlFor="name">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea id="message" name="message" rows="5" required />
                </div>
                <button type="submit">Send message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© 2026 Maya Chen</p>
          <p>
            <a href="#home">Back to top</a>
          </p>
        </div>
      </footer>
    </>
  )
}