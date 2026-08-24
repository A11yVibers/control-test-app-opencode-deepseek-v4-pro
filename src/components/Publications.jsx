import { publications } from '../data'

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section__title">Publications</h2>
        <ul className="publications">
          {publications.map((pub) => (
            <li key={pub.title} className="publication">
              <p className="publication__citation">
                {pub.authors} ({pub.year}). {pub.title} <em>{pub.journal}</em>
              </p>
              <a
                className="publication__link"
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read paper →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}