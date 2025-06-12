import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { userData } from "../userData";


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
                <div className="hidden lg:flex flex-col items-center fixed bottom-0 right-12 text-gray-300">
                    <ul className="flex flex-col items-center">
                        {userData.contact.map((contact) => {
                            return (
                                <li className="w-[24px] mb-3">
                                    <a href={contact.url} target="_blank" rel="noreferrer" className="flex items-center group float-right">
                                        <span className="mx-2 opacity-0 group-hover:text-emerald-400 group-hover:opacity-100 transition-all duration-200">{contact.title}</span>
                                        <FontAwesomeIcon icon={contact.icon} className="group-hover:text-emerald-400 text-2xl relative" />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="w-1 h-12 bg-gray-300"></div>
                </div>
            )}
        </>
    );
}
 
export default Contact;