import React from "react";
import PatrickNguyenResume from "../assets/PatrickNguyenResume.pdf";

const Resume = ({ userInput }) => {
    return (
        <div className="pb-10">
            <h2 className="pt-2 pb-2 text-gray-400">{"$ " + userInput}</h2>
            <a href={PatrickNguyenResume} download="PatrickNguyenResume.pdf">
                <p className="text-blue-600 underline pt-2">Click here to download my resume</p>
            </a>
        </div>
    );
};

export default Resume;
