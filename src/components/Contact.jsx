import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


const Contact = () => {

    const [showContact, setShowContact] = useState(false);

    const controlContact = () => {
        const currentScrollY = window.scrollY;

        if(currentScrollY < 150) {
            setShowContact(false);
        } else {
            setShowContact(true);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", controlContact);
        return () => {window.removeEventListener("scroll", controlContact);}
    })

    return (
        <>
            {showContact && (
                <div className="hidden lg:flex flex-col items-end fixed bottom-0 right-12 text-gray-300">
                    <ul>
                        <li>
                            <a href="https://github.com/mshah20/" target="_blank" rel="noreferrer" className="flex items-center group float-right">
                                <span className="mx-2 opacity-0 group-hover:text-emerald-400 group-hover:opacity-100 transition-all duration-200">Github</span>
                                <FontAwesomeIcon icon={faGithub} className="group-hover:text-emerald-400 text-2xl" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:mshah058.work@gmail.com" className="my-4 flex items-center group float-right">
                                <span className="mx-2 opacity-0 group-hover:text-emerald-400 group-hover:opacity-100 transition-all duration-200">Email</span>
                                <FontAwesomeIcon icon={faEnvelope} className="group-hover:text-emerald-400 text-2xl relative" />
                            </a>
                        </li>
                    </ul>
                    <div className="w-1 h-12 mr-3 bg-gray-300"></div>
                </div>
            )}
        </>
    );
}
 
export default Contact;