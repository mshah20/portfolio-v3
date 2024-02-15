import { userData } from "../userData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";
import CourseCard from "./CourseCard";
import CertificationCard from "./CertificationCard";

const HomePage = () => {
    return (
        <div id="homepage-container" className="w-full py-24 bg-indigo-950 font-poppins text-indigo-100 flex justify-center">
            <div id="sections-container" className="w-[850px] max-w-[90%]">
                <section id="header-container">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-5xl font-bold ">{userData.name}</div>
                            <div className="text-xl">{userData.jobTitle} @{userData.company}</div>
                        </div>
                        <div className="text-2xl">
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faEnvelope} className="ml-4" />
                        </div>
                    </div>
                    
                    <div className="mt-6">{userData.about}</div>
                </section>

                <section id="projects-container" className="mt-24">
                    <div className="font-bold text-lg">Projects</div>
                    
                    <ul className="group">
                        {userData.projects.map((project) => {
                            return <li className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-all duration-500" key={project.title} ><ProjectCard url={project.url} githubURL={project.githubURL} imageURL={project.imageURL} title={project.title} description={project.description} skills={project.skills} /></li>
                        })}
                    </ul>

                    <a href="https://github.com/mshah20/" target="_blank" rel="noreferrer">
                        <div className="mt-4 mx-auto text-center group w-fit relative">
                            View More Projects
                            <FontAwesomeIcon icon={faArrowRight} className="mx-2 group-hover:animate-wiggle" />
                            <div className="w-full h-0 mt-1 absolute group-hover:h-1 transition-all duration-300 ease-in-out bg-gradient-to-tr from-purple-900 via-pink-900 to-yellow-900" />
                            <div className="w-full h-1 mt-1 absolute group-hover:h-0 bg-indigo-950" />
                        </div>
                    </a>
                </section>

                <section id="courses-container" className="mt-24">
                    <div className="font-bold text-lg">Notable Courses</div>

                    <ul className="group">
                        {userData.courses.map((course) => {
                            return <li className="group-hover:opacity-70 group-hover:hover:opacity-100 transition-all duration-500" key={course.title}><CourseCard title={course.title} languages={course.languages} skills={course.skills} /></li>
                        })}
                    </ul>
                </section>

                <section id="certifications-container" className="mt-24">
                    <div className="font-bold text-lg">Certifications</div>

                    <ul>
                        {userData.certifications.map((certification) => {
                            return <li key={certification.title}>{<CertificationCard title={certification.title} status={certification.status} company={certification.company} link={certification.link} />}</li>
                        })}
                    </ul>
                </section>
            </div>
        </div>
    );
}
 
export default HomePage;