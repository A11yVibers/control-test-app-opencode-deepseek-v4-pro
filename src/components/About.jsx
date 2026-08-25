import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <div className="about">
        <p>{profile.bio}</p>
        <p>
          I earned my Ph.D. in Computational Biology from the University of
          Cambridge, followed by postdoctoral training at the Broad Institute,
          where I focused on single-cell analysis of neural development. My lab
          sits at the interface of statistics, machine learning, and genomics,
          with a shared goal of turning high-dimensional data into testable
          biological hypotheses.
        </p>
        <p>
          I am committed to open science: all of our software is released under
          permissive licenses, and our data and analysis pipelines are made
          publicly available alongside every publication. I am always happy to
          hear from prospective students, postdocs, and collaborators.
        </p>
      </div>
    </section>
  )
}