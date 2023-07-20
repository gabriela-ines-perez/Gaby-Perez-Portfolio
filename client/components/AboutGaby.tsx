import CV from './CV'
import ContactForm from './ContactForm'
import { useState } from 'react'

export default function AboutGaby() {
  const [viewForm, setViewForm] = useState(false)

  const handleClick = () => {
    setViewForm(!viewForm)
  }

  return (
    <>
      <section className="about-me" id="about">
        <h3>I am gaby</h3>
        <p>
          I am a full-stack software developer with a background in tech
          innovation and science communication, dedicated to making a positive
          impact. My journey has taken me through a diverse range of
          experiences, from operating telescopes for educational outreach to
          founding two tech startups.
        </p>
        <CV />
        <button onClick={handleClick}>
          {viewForm ? 'Hide' : 'Flick me a message'}
        </button>
        {viewForm && <ContactForm />}
      </section>
    </>
  )
}
