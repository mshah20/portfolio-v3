const CourseCard = ({ title, languages, skills }) => {
    return (
        <div className="mt-4 p-4 flex flex-col items-center rounded-xl select-none hover:bg-gray-800">
            <div className="flex">
                <h3 className="text-lg mr-1">{title}</h3>
                <ul className="flex text-xs">
                    {languages.map((language) => {
                        return <li key={language} className="m-auto px-3 py-1 mx-1 rounded-xl bg-gradient-to-tr from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500">{language}</li>
                    })}
                </ul>
            </div>
            
            <ul className="flex flex-wrap text-xs mt-4">
                    {skills.map((skill) => {
                        return <li key={skill} className="px-3 py-1 mx-1 mb-2 rounded-xl bg-gradient-to-tr from-purple-900 via-pink-900 to-yellow-900 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600">{skill}</li>
                    })}
            </ul>
        </div>
    );
}
 
export default CourseCard;