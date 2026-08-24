export const researcher = {
  name: 'Dr. Elena Martínez',
  title: 'Assistant Professor of Computational Biology',
  affiliation: 'Department of Bioengineering, Westfield University',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
  email: 'e.martinez@westfield.edu',
  social: {
    googleScholar: 'https://scholar.google.com/citations?user=placeholder',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
    github: 'https://github.com/elenamartinez-lab',
    linkedin: 'https://www.linkedin.com/in/elena-martinez',
  },
}

export const bio =
  'I am a computational biologist studying how machine learning can decode regulatory genomics. My work bridges statistical modeling and high-throughput experiments to understand how the genome encodes cell identity, and how that code breaks down in disease.'

export const researchInterests = [
  'Machine learning for genomics',
  'Single-cell data analysis',
  'Gene regulatory networks',
  'Statistical genetics of complex disease',
]

export const projects = [
  {
    title: 'Deciphering cis-regulatory logic with deep sequence models',
    description:
      'Developing interpretable deep neural networks that predict gene expression from DNA sequence and reveal the combinatorial grammar of enhancers and promoters.',
  },
  {
    title: 'Single-cell atlases of the developing brain',
    description:
      'Building reference atlases of cell types across brain development using single-cell transcriptomics and chromatin accessibility, with applications to neurodevelopmental disorders.',
  },
  {
    title: 'Polygenic risk models for autoimmune disease',
    description:
      'Constructing transferable polygenic risk scores and dissecting their underlying cell-type-specific regulatory effects across diverse human cohorts.',
  },
]

export const publications = [
  {
    authors: 'Martínez, E., Chen, L., & Novak, R.',
    year: '2024',
    title: 'Deep sequence models reveal combinatorial cis-regulatory grammar.',
    journal: 'Genome Biology, 25(1), 118.',
    link: 'https://doi.org/10.1186/s13059-024-03118-2',
  },
  {
    authors: 'Martínez, E., & Patel, S.',
    year: '2023',
    title: 'Single-cell transcriptomics of cortical development.',
    journal: 'Nature Communications, 14, 6072.',
    link: 'https://doi.org/10.1038/s41467-023-41707-8',
  },
  {
    authors: 'Osei, K., Martínez, E., Weiss, J., & Yang, M.',
    year: '2022',
    title: 'Polygenic risk scores for autoimmune disease in diverse cohorts.',
    journal: 'Cell Genomics, 2(9), 100187.',
    link: 'https://doi.org/10.1016/j.xgen.2022.100187',
  },
  {
    authors: 'Martínez, E.',
    year: '2021',
    title: 'Statistical methods for rare variant association testing.',
    journal: 'Annual Review of Genomics and Human Genetics, 22, 465–489.',
    link: 'https://doi.org/10.1146/annurev-genom-120220-082002',
  },
  {
    authors: 'Nguyen, T., Martínez, E., & Rossi, F.',
    year: '2020',
    title: 'Integrating chromatin accessibility with expression quantitative trait loci.',
    journal: 'PLOS Genetics, 16(7), e1008925.',
    link: 'https://doi.org/10.1371/journal.pgen.1008925',
  },
]