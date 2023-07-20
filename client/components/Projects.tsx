import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      name: 'Esc',
      id: 0,
      url: '#',
      description: 'A fullstack virtual escape room',
      type: 'Game',
      gitHub: 'https://github.com/gabriela-ines-perez/Esc',
      coverImage: '/esc.png',
    },
    {
      name: 'DigitalBiotech',
      id: 3,
      url: '#',
      description: 'A front-end heavy visual look at digital technologies used in biotech',
      type: 'Education',
      gitHub: 'https://github.com/gabriela-ines-perez/digital-biotech',
      coverImage: '/digital-biotech.png',
    },
    {
      name: 'Planted',
      id: 1,
      url: '#',
      description: 'Using an external API to track the plants in my room',
      type: 'App',
      gitHub: 'https://github.com/gabriela-ines-perez/planted',
      coverImage: '/planted.png',
    },
    {
      name: 'GabyWorld',
      id: 2,
      url: '#',
      description: 'Making sure a virtual Gaby gets her needs met',
      type: 'Game',
      gitHub:
        'https://github.com/gabriela-ines-perez/gaby-personal-project-needspace',
      coverImage: '/gabyworld.png',
    },
  ]

  return (
    <>
      <section className="projects-container" id='projects'>
        {projects.map((prj, i) => (
          <ProjectCard
            key={prj.id}
            description={prj.description}
            name={prj.name}
            url={prj.url}
            id={prj.id}
            gitHub={prj.gitHub}
            coverImage={prj.coverImage}
          />
        ))}
      </section>
    </>
  )
}
