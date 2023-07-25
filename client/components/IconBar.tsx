export default function IconBar() {
  const icons = [
    {
      id: 0,
      name: 'Github',
      image: '/github.png',
      url: 'https://github.com/gabriela-ines-perez',
    },
    {
      id: 1,
      name: 'LinkedIn',
      image: '/linkedin.png',
      url: 'https://www.linkedin.com/in/gabrielainesperez/',
    },
    {
      id: 2,
      name: 'Email',
      image: '/email.png',
      url: 'mailto:gaby@perez.co.nz',
    },
  ]

  return (
    <div className="icons-bar">
      {icons.map((icon) => (
        <a key={icon.id} target="_blank" href={icon.url} rel="noreferrer">
          <img className="icon" src={icon.image} alt={icon.name} />
        </a>
      ))}
    </div>
  )
}
