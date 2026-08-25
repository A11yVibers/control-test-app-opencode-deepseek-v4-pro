const profile = {
  name: 'Dr. Elena Marchetti',
  title: 'Assistant Professor of Computational Biology',
  affiliation: 'Department of Genomics · Northern Ridge University',
  image:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  bio: "I am a computational biologist studying how gene regulatory networks shape cellular identity. My group develops statistical and machine-learning methods for single-cell and spatial genomics, and we collaborate closely with experimentalists to translate these tools into mechanistic insight about development and disease.",
}

const researchInterests = [
  'Single-cell & spatial genomics',
  'Gene regulatory networks',
  'Probabilistic machine learning',
  'Developmental biology',
  'Cancer systems biology',
]

const projects = [
  {
    title: 'Single-cell atlas of the developing cortex',
    description:
      'Building a high-resolution multi-omic atlas of the developing mammalian cortex to map the emergence of neuronal diversity, integrating transcriptomic, epigenomic, and lineage-tracing data.',
  },
  {
    title: 'Causal inference for gene regulatory networks',
    description:
      'Developing methods that distinguish causal regulation from correlation in single-cell data, using perturbations and natural variation to reconstruct robust network models.',
  },
  {
    title: 'Spatial models of tumor microenvironments',
    description:
      'Combining spatial transcriptomics with image-based profiling to understand how cellular neighborhoods shape tumor progression and response to therapy.',
  },
]

const publications = [
  {
    year: '2024',
    title:
      'Inferring causal gene regulatory networks from multiplexed perturbation screens',
    authors: 'Marchetti, E., Okafor, D., Lee, J., & Banerjee, P.',
    venue: 'Nature Methods, 21(4), 512–524.',
    doi: 'https://doi.org/10.1038/s41592-024-02101-3',
  },
  {
    year: '2023',
    title:
      'A spatial atlas of the mouse telencephalon during neuronal differentiation',
    authors: 'Marchetti, E., & Okafor, D.',
    venue: 'Cell, 186(11), 2445–2461.',
    doi: 'https://doi.org/10.1016/j.cell.2023.04.011',
  },
  {
    year: '2022',
    title:
      'Probabilistic embedding of single-cell trajectories with uncertainty quantification',
    authors: 'Marchetti, E., Voss, K., & Ramirez, A.',
    venue: 'Genome Biology, 23, 178.',
    doi: 'https://doi.org/10.1186/s13059-022-02703-x',
  },
  {
    year: '2021',
    title:
      'Benchmarking dimensionality reduction for high-dimensional single-cell data',
    authors: 'Marchetti, E., Huang, L., & Foster, R.',
    venue: 'Nature Communications, 12, 6634.',
    doi: 'https://doi.org/10.1038/s41467-021-26899-2',
  },
]

const links = {
  email: 'elena.marchetti@nridu.edu',
  scholar: 'https://scholar.google.com/citations?user=example',
  orcid: 'https://orcid.org/0000-0002-1234-5678',
  github: 'https://github.com/elenamarchetti',
  linkedin: 'https://www.linkedin.com/in/elena-marchetti',
}

export { profile, researchInterests, projects, publications, links }