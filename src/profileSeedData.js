import profileImg from './img/ko-headshot.JPG'
import githubIcon from './img/icons/github.svg'
import linkedinIcon from './img/icons/linkedin.svg'
import emailIcon from './img/icons/envelope.svg'
import calendarIcon from './img/icons/calendar3-event.svg'

const Profile = {
  background: [`Hi! I'm Kirsten. I'm currently enrolled in a full time, full stack engineering program at Epicodus.`,
    `I am passionate about building things that solve real-world problems.`,
    `Bringing fourteen years of design experience to a new chapter of my career. As a designer, my specialty is translating complex techincal concepts to collaborators so that the whole team can weigh trade-offs and make smart, sustainable choices together. As an engineer, I apply years of collaborative problem solving to a new workflow.`,
    `As a huge fan of Brene Brown's work around Living Into Our Values, in the workplace and in one's personal life; and, in the spirit of vulnerability, I share my core values to give a sense of who I am and what's important to me:`,
    `   1. Intentionality`,
    `   2. Authenticity`,
    `   3. Creativity`,
    `I live in Los Angeles and enjoy soup. To get in touch, email me.`],

  image: profileImg,

  interests: ["Learning to Write Better Code",
    "Solving Problems with Creativity",
    "Being a Tech Translator"],

  hobbies:
  ["Writing Music",
  "Camping & Hiking",
  "Reading Poetry & Fiction"],

  skills:
    ["HTML & CSS",
    "Git Workflow",
    "Procedural Programming"],

  links: {
    github: {
      img: githubIcon,
      link: "https://github.com/kirstenopstad"
    },
    linkedin: {
      img: linkedinIcon,
      link: "https://www.linkedin.com/in/kirstenopstad/"
    },
    email: {
      img: emailIcon,
      link: "mailto: kirsten.opstad@gmail.com"
    },
    calendly: {
      img: calendarIcon,
      link: "https://calendly.com/meet-with-ko/call-with-kirsten"
    }
  }
}

export default Profile