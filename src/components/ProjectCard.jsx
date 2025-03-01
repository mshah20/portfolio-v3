import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ url, githubURL, image, title, description, skills }) => {
    return (
        <div className="mt-4 py-8 px-4 rounded-xl flex flex-col items-center sm:flex-row select-none bg-gradient-to-r hover:from-gray-900 hover:to-gray-800">
            <div id="image-container" className="w-64 h-32">
                <img src={image} alt="Project" className="w-64 h-32 min-w-64 rounded-lg"/>
            </div>
            <div className="min-h-32 w-full px-6 flex flex-col justify-between group">
                <div className="mt-4 flex justify-center items-center sm:justify-start sm:mt-0">
                    <h3 className="text-lg">{title}</h3>
                    <ul className="flex text-gray-300 text-lg hover:*:text-emerald-400">
                        <li className="mx-2">{githubURL && (<a href={githubURL} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>)}</li>
                        <li>{url && (<a href={url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>)}</li>
                    </ul>
                </div>
                
                <p className="my-4 mx-auto sm:mx-0 flex flex-wrap text-sm text-gray-400 text-center sm:text-left group-hover:text-gray-300">{description}</p>
                
                <ul className="flex flex-wrap text-xs justify-center sm:justify-start">
                    {skills.map((skill) => {
                        return <li key={skill} className="px-3 py-1 mx-1 mt-2 rounded-xl text-emerald-400 border border-emerald-400 bg-gradient-to-tr hover:text-gray-900 hover:from-green-500 hover:to-cyan-500 duration-200 ease-out">{skill}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}
 
export default ProjectCard;