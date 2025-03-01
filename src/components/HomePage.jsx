import { userData } from "../userData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";
import CourseCard from "./CourseCard";
import CertificationCard from "./CertificationCard";
import Contact from "./Contact";
import eduversePage from "../media/eduverse.png";
import patchHQPage from "../media/patch-hq.png";
import weatherPage from "../media/weather-search.png";

const getImage = (title) => {
    switch(title) {
        case "Eduverse":
            return eduversePage;
        case "Patch HQ":
            return patchHQPage;
        case "Weather Search":
            return weatherPage;
        default:
            break;
    }
}

const HomePage = () => {
    return (
        <div id="homepage-container" className="w-full py-24 bg-gray-900 font-karla text-gray-100 flex justify-center">
            <div id="sections-container" className="w-[750px] max-w-[90%]">
                <section id="header-container">
                    <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                        <div>
                            <div className="text-5xl font-bold ">{userData.name}</div>
                            <div className="text-xl">{userData.jobTitle} @{userData.company}</div>
                        </div>
                        <div className="text-2xl text-gray-300 mt-2 hover:*:text-emerald-400">
                            <a href="https://github.com/mshah20/" target="_blank" rel="noreferrer" title="Github">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                            <a href="mailto:mshah058.work@gmail.com" title="Email">
                                <FontAwesomeIcon icon={faEnvelope} className="ml-4" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="mt-6 text-center sm:text-left">{userData.about}</div>
                </section>

                <section id="projects-container" className="mt-24">
                    <h2 className="font-bold text-lg">Projects</h2>
                    
                    <ul className="group">
                        {userData.projects.map((project) => {
                            return <li className="sm:group-hover:opacity-30 sm:group-hover:hover:opacity-100 transition-all duration-500" key={project.title} ><ProjectCard url={project.url} githubURL={project.githubURL} image={getImage(project.title)} title={project.title} description={project.description} skills={project.skills} /></li>
                        })}
                    </ul>

                    <a href="https://github.com/mshah20?tab=repositories" target="_blank" rel="noreferrer">
                        <div className="mt-4 mx-auto text-center group w-fit relative">
                            <span>View More Projects</span>
                            <FontAwesomeIcon icon={faArrowRight} className="mx-2 group-hover:animate-wiggle" />
                            <div className="w-full h-0 mt-1 absolute group-hover:h-1 transition-all duration-300 ease-in-out bg-gradient-to-tr from-green-500 to-cyan-500" />
                            <div className="w-full h-1 mt-1 absolute group-hover:h-0 transparent" />
                        </div>
                    </a>
                </section>

                <section id="courses-container" className="mt-24">
                    <h2 className="font-bold text-lg">Notable Courses</h2>

                    <ul className="group">
                        {userData.courses.map((course) => {
                            return <li className="sm:group-hover:opacity-70 sm:group-hover:hover:opacity-100 transition-all duration-500" key={course.title}><CourseCard title={course.title} languages={course.languages} skills={course.skills} /></li>
                        })}
                    </ul>
                </section>

                <section id="certifications-container" className="mt-24">
                    <h2 className="font-bold text-lg">Certifications</h2>

                    <ul>
                        {userData.certifications.map((certification) => {
                            return <li key={certification.title}>{<CertificationCard title={certification.title} status={certification.status} company={certification.company} link={certification.link} />}</li>
                        })}
                    </ul>
                </section>
            </div>

            <Contact />
        </div>
    );
}
 
export default HomePage;