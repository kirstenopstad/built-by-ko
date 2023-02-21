// import * as p from '../src/img/portfolio'
import spoons from './img/portfolio/spoons.png'
import about from './img/portfolio/ko-web.png'
import nightSoup from './img/portfolio/night-soup.png'

const portfolio = {
  1: {
    title: `Spoons`,   
    tagline: `Spoons is a web-based application using JavaScript, Python, and SQL.`,
    description: `Powered by the dynamic spoon counter deducts spoons based on activities user selects, simulating the experience of expending energy throughout the day.
  
    Registered users are able to change/update "spoon values" of activities, add new activities to their profile and change their "daily spoon count." Preferences are stored/updated in a SQL database.
    
    Prompted by a conversation with a friend about communicating one's capacity to their partner, the purpose of Spoons is built to help expand compassion between partners, roommates, collaborators & colleagues.`,
    techUsed: ["JavaScript", "Python", "Flask", "SQLite"],
    liveLink: `https://www.youtube.com/watch?v=g32EIWWSJJo&t=8s`,
    gitLink: `https://github.com/kirstenopstad/spoons`,
    image: spoons
  },
  2: {
    title: "About KO",
    tagline: `About.kirstenopstad.com is a portfolio website built using HTML & CSS.`,
    description: `Built with from scratch in an effort to capture the breadth of my experience as a designer, musician and human being while also practicing skills acquired earning a certificate in Responsive Web Design.
  
    The site showcases professional design consulting projects alongside collaborative music project, a resume alongside a personal timeline of the last fifteen years and seeks to honor the intersecting and interdisciplinary paths followed in the past fifteen years.`,
    techUsed: ["HTML", "CSS"],
    liveLink: `http://about.kirstenopstad.com/`,
    gitLink: `#`,
    image: about
  },
  3: {
    title: `Night Soup`,
    tagline: `A Record Label for a Different Time`,
    description: `Night Soup is a website for a record label built using HTML & CSS.

    Built with from scratch in an effort to capture the breadth of my experience as a designer, musician and human being while also practicing skills acquired earning a certificate in Responsive Web Design.
    
    Featuring a hand-drawn illustrations and old school image mapping with new school responsivity. Night Soup features "sounds that freeze well," and is built to invoke vintage aesthetic sensebilities in the spirit of low-fi, alt-folk and independent music.`,
    techUsed: ["HTML", "CSS"],
    liveLink: `http://nightsoup.com/http://nightsoup.com/`,
    gitLink: `#`,
    image: nightSoup
  }

}

export default portfolio;