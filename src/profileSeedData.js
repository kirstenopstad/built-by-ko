import profileImg from './img/ko-headshot.JPG'
import githubIcon from './img/icons/github.svg'
import linkedinIcon from './img/icons/linkedin.svg'
import emailIcon from './img/icons/envelope.svg'
import calendarIcon from './img/icons/calendar3-event.svg'

const Profile = {
  background: [`Hi! I'm Kirsten. I'm passionate about building things that solve real-world problems.`,
    `Bringing fifteen years of design experience to a new chapter of my career, my specialty is translating complex technical concepts to collaborators so that the whole team can weigh trade-offs and make smart, sustainable choices together. I have a proven track record of taking projects from conceptual ideas to technical deliverables.`,
    // `After years of developing web products as side projects, I am now focused on codifying & intentionally applying those technical skills as a central part of my career. I've earned certifications in Computer Science and Full Stack Software Engineering – and continue to actively grow those skills every week.`,
    `As a huge fan of Brene Brown's work around "living into our values," in the workplace and in one's personal life; and, in the spirit of vulnerability, I share my core values to give a sense of who I am and what's important to me:`,
    `1. Intentionality`,
    `2. Authenticity`,
    `3. Creativity`,
    `I live in Los Angeles with my wife and musical instruments. To get in touch, email me.`],

  image: profileImg,

  interests: ["Learning to Write Better Code",
    "Solving Problems with Creativity",
    "Being a Tech Translator"],

  hobbies:
  ["Writing Music",
  "Camping & Hiking",
  "Reading Poetry & Fiction"],

  skills:
    [
    "Project Management",
    "Full Stack Engineering",
    "Detailed Documentation",
    "Git Workflow",
    "C# | ASP.Net Core 6",
    "JavaScript | React",
    "Python | Flask",
    "SQL | NoSQL",
    "HTML & CSS",
    ],

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