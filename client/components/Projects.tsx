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
      detail: 'Tech/Tools Used: Backend - sqlite3, Express, Knex | Frontend - Redux, React. This was our final group project at Dev Academy, where we aimed to apply our newly acquired skill sets in a unique way by creating a virtual escape room. The project showcased a full-stack game, and each "level" utilised different technologies and libraries. Created within a week, we acknowledge that there is room for improvement and plan to refine and expand the project. Our ongoing efforts involve polishing the application, with the goal of deploying it soon for everyone to enjoy. It was a success story of good teamwork and planning. ',
    },
    {
      name: 'DigitalBiotech',
      id: 3,
      url: '#',
      description:
        'A front-end heavy visual look at digital technologies used in biotech',
      type: 'Education',
      gitHub: 'https://github.com/gabriela-ines-perez/digital-biotech',
      coverImage: '/digital-biotech.png',
      detail:
        'Tech/Tools Used: React, react-spring, parallax. Digital Biotech is a client-side-rendered learning experience where the focus was on creating an interactive scrolling interface using React and exploring new tools like react-spring and parallax libraries. It allowed me to bring a more creative edge to programming and has been great for really pushing my understanding of a complex UI. The project is still a work in progress, stay tuned for future updates as I continue to develop and refine the application. I would also like to find a way to make it more accessible. ',
    },
    {
      name: 'Planted',
      id: 1,
      url: '#',
      description: 'Using an external API to track the plants in my room',
      type: 'App',
      gitHub: 'https://github.com/gabriela-ines-perez/planted',
      coverImage: '/planted.png',
      detail:
        'Tech/Tools Used: Backend - sqlite3, Express, Knex, superagent | Frontend - Redux, React. Planted was created to build an app that allowed me to keep track of how to care for my houseplants effectively. The integration of an external API enabled users to search for plant species and access care information, such as watering needs and sunlight requirements. Please note that a valid API key is required if you decide to clone this project.',
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
      detail:
        'Tech/Tools Used: Backend - sqlite3, Express, Knex | Frontend - Handlebars.js. It is an early project focused on visually tracking daily needs, drawing inspiration from the concept of a Tamagotchi. I am currently rebuilding it using updated tech stacks to offer improved features and a better user experience.',
    },
  ]

  return (
    <>
      {projects.map((prj, i) => (
        <ProjectCard
          key={prj.id}
          description={prj.description}
          name={prj.name}
          url={prj.url}
          id={prj.id}
          gitHub={prj.gitHub}
          coverImage={prj.coverImage}
          detail={prj.detail}
        />
      ))}
    </>
  )
}
