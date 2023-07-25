interface Project {
  name: string
  url: string
  gitHub: string
  id: number
  description: string
  coverImage: string
}

export default function ProjectSinglePage({
  name,
  coverImage,
  gitHub,
  description,
}: Project) {
  return (
    <>
      <div className="project-card">
        <img src={coverImage} className="card-cover-image" alt={description} />
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={gitHub} target="_blank" rel="noreferrer">
          <img className="icon" src="/github.png" alt="github logo" />
        </a>
      </div>
    </>
  )
}