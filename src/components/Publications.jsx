import { publications } from '../data.js'

export default function Publications() {
  return (
    <section id="publications" className="section">
      <h2>Publications</h2>
      <ol className="publications">
        {publications.map((pub) => (
          <li key={pub.title} className="publication">
            <span className="publication__year">{pub.year}</span>
            <div className="publication__body">
              <h4>{pub.title}</h4>
              <p>{pub.authors}</p>
              <p className="publication__venue">{pub.venue}</p>
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="publication__link"
              >
                DOI →
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}