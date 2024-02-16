import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp, faMeta } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const getLogo = (company) => {
    switch(company){
        case "freeCodeCamp":
            return (<div><FontAwesomeIcon icon={faFreeCodeCamp} className="text-4xl mr-4" /></div>);
        case "Meta":
            return (<div><FontAwesomeIcon icon={faMeta} className="text-4xl mr-4" /></div>);
        default:
            break;
    }
}

const getStatus = (status) => {
    switch(status) {
        case "Completed":
            return (<p className="m-auto text-xs px-3 py-1 mx-1 rounded-xl bg-green-600">{status}</p>);
        case "In-Progress":
            return (<p className="m-auto text-xs px-3 py-1 mx-1 rounded-xl bg-yellow-600">{status}</p>);
        case "Planned":
            return (<p className="m-auto text-xs px-3 py-1 mx-1 rounded-xl bg-blue-600">{status}</p>);
        default:
            break;
    }
}

const CertificationCard = ({ title, status, company, link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="flex items-center mt-4 p-4 rounded-xl select-none bg-indigo-900 opacity-100 hover:bg-indigo-800">
            {getLogo(company)}
            <div className="w-full flex justify-between items-center">
                <div>
                    <div className="flex">
                        <h3 className="mr-1">{title}</h3>
                    </div>
                    <p className="text-xs italic">{company}</p>
                </div>
                <div className="flex items-center">
                    {getStatus(status)}
                    {link && (
                        <div className="ml-2 flex text-indigo-300 hover:*:text-indigo-200">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </div>
                    )}
                </div>
            </div> 
        </a>
    );
}
 
export default CertificationCard;