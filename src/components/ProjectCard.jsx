import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ url, githubURL, imageURL, title, description, skills }) => {
    return (
        <div className="mt-4 py-8 px-4 rounded-xl flex select-none hover:bg-indigo-900">
            <div id="image-container" className="w-64 h-36">
                <img src={imageURL} alt="Project" className="w-64 h-36 max-w-64 rounded-lg"/>
            </div>
            <div className="px-6 flex flex-col justify-between">
                <div className="flex items-center">
                    <div className="text-lg">{title}</div>
                    <ul className="flex text-indigo-300 hover:*:text-indigo-200">
                        <li className="mx-2">{githubURL && (<a href={githubURL} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>)}</li>
                        <li>{url && (<a href={url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>)}</li>
                    </ul>
                </div>
                
                <div className="text-sm text-indigo-300">{description}</div>
                
                <ul className="flex text-xs">
                    {skills.map((skill) => {
                        return <li key={skill} className="px-3 py-1 mx-1 rounded-xl bg-gradient-to-tr from-purple-900 via-pink-900 to-yellow-900 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600">{skill}</li>
                    })}
                </ul>
                
            </div>
        </div>
    );
}
 
export default ProjectCard;