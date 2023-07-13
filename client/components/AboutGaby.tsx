import CV from './CV'
import ContactForm from './ContactForm'

export default function AboutGaby() {
  return (
    <>
      <section className="about-me">
        <h3>I am gaby</h3>
        <p>
          I am a full-stack software developer with a background in tech
          innovation and science communication, dedicated to making a positive
          impact. My journey has taken me through a diverse range of
          experiences, from operating telescopes for educational outreach to
          founding two tech startups.
        </p>
        <CV />
        <ContactForm />
      </section>
    </>
  )
}
