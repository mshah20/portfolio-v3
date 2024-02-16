import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ url, githubURL, imageURL, title, description, skills }) => {
    return (
        <div className="mt-4 py-8 px-4 rounded-xl flex flex-col items-center sm:flex-row select-none hover:bg-indigo-900">
            <div id="image-container" className="w-64 h-32">
                <img src={imageURL} alt="Project" className="w-64 h-32 min-w-64 rounded-lg"/>
            </div>
            <div className="min-h-32 w-full px-6 flex flex-col justify-between">
                <div className="mt-4 flex justify-center items-center sm:justify-start sm:mt-0">
                    <h3 className="text-lg">{title}</h3>
                    <ul className="flex text-indigo-300 text-lg hover:*:text-indigo-200">
                        <li className="mx-2">{githubURL && (<a href={githubURL} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>)}</li>
                        <li>{url && (<a href={url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>)}</li>
                    </ul>
                </div>
                
                <p className="my-4 mx-auto sm:mx-0 flex flex-wrap text-sm text-indigo-300 text-center sm:text-left">{description}</p>
                
                <ul className="flex flex-wrap text-xs justify-center sm:justify-start">
                    {skills.map((skill) => {
                        return <li key={skill} className="px-3 py-1 mx-1 mt-2 rounded-xl bg-gradient-to-tr from-purple-900 via-pink-900 to-yellow-900 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600">{skill}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}
 
export default ProjectCard;