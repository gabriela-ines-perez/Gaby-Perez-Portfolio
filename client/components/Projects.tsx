export default function Projects() {
  const projects = [
    {
      name: 'Esc',
      id: 0,
      url: '#',
      description: 'A virtual escape room',
      type: 'Game',
    },
    {
      name: 'Planted',
      id: 1,
      url: '#',
      description: 'Tracking the plants in my room',
      type: 'App',
    },
    {
      name: 'GabyWorld',
      id: 2,
      url: '#',
      description: 'Making sure a virtual Gaby gets her needs met',
      type: 'Game',
    },
    {
      name: 'DigitalBiotech',
      id: 3,
      url: '#',
      description: 'A visual look at digital technologies used in biotech',
      type: 'Education',
    },
  ]

  return (
    <>
      {projects.map((prj, i) => (
        <p key={i}>{prj.name}</p>
      ))}
    </>
  )
}
