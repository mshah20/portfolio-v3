import eduversePage from "./media/eduverse.png";
import patchHQPage from "./media/patch-hq.png";
import weatherPage from "./media/weather-search.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const userData = {
    "name": "Mueed Shah",
    "jobTitle": "Software Engineer",
    "company": "myhome",
    "about": "Achieved my Bachelor of Science in Computer Science from Florida International University (FIU). Always eager to learn and grow—currently exploring new projects to push my limits and make an impact. Always happy to connect and collaborate!",
    "projects": [{
        "githubURL": "https://github.com/mshah20/eduverse",
        "title": "Eduverse",
        "image": eduversePage,
        "description": "A modern Learning Management System tailored for students and teachers alike.",
        "skills": ["React", "TailwindCSS", "Node", "Firebase", "Firestore"]
    }, {
        "url": "https://mshah20.github.io/patch-hq",
        "githubURL": "https://github.com/mshah20/patch-hq",
        "title": "Patch HQ",
        "image": patchHQPage,
        "description": "Stay up to date with updates to your favorite games, all in one place.",
        "skills": ["React", "TailwindCSS", "Axios", "Express.js", "MongoDB"]
    }, {
        "url": "https://mshah20.github.io/weather-app/",
        "githubURL": "https://github.com/mshah20/weather-app",
        "title": "Weather Search",
        "image": weatherPage,
        "description": "Whether it's the next city over or across the world, find out the weather with soothing visuals.",
        "skills": ["React", "Javascript", "Axios", "CSS", "API"]
    }],
    "courses": [{
        "title": "Programming I & II",
        "description": "",
        "languages": ["Java"],
        "skills": ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"]
    },{
        "title": "Systems Programming",
        "description": "",
        "languages": ["C"],
        "skills": ["UNIX", "Pointers", "Malloc", "Threading"]
    }, {
        "title": "Data Structures",
        "description": "",
        "languages": ["C++"],
        "skills": ["Sort Algorithms", "Vectors", "Queues", "Trees", "Heaps", "Big O Notation"]
    }, {
        "title": "Database Management I & II",
        "description": "",
        "languages": ["PostgreSQL", "mySQL"],
        "skills": ["pgAdmin4", "Tables", "Relationships", "Warehousing", "OLAP"] 
    }],
    "certifications": [{
        "title": "Responsive Web Design",
        "company": "freeCodeCamp",
        "status": "Completed",
        "link": "https://www.freecodecamp.org/certification/mshah/responsive-web-design"
    }, {
        "title": "Back End Development and APIs",
        "company": "freeCodeCamp",
        "status": "Completed",
        "link": "https://www.freecodecamp.org/certification/mshah/back-end-development-and-apis"
    }, {
        "title": "Meta Front-End Developer Professional Certificate",
        "company": "Meta",
        "status": "In-Progress"
    }, {
        "title": "Meta Back-End Developer Professional Certificate",
        "company": "Meta",
        "status": "In-Progress"
    }],
    "contact": [{
        "title": "Github",
        "url": "https://github.com/mshah20/",
        "icon": faGithub
    }, {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/in/mueed-s-022249268/",
        "icon": faLinkedin
    }, {
        "title": "Email",
        "url": "mailto:mshah058.work@gmail.com",
        "icon": faEnvelope
    }]
}