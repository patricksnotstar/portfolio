import React from "react";
import contactInfo from "../constants/Contacts";

const Contact = ({ userInput }) => {
    return (
        <div className="pb-10">
            <h2 className="pb-2 text-gray-400">{"$ " + userInput}</h2>

            {Object.entries(contactInfo).map(([method, info]) => {
                const isEmail = method === "Email";
                return (
                    <h3 className="pt-1">
                        {" "}
                        {method}:{" "}
                        <a
                            href={!isEmail ? info : "mailto:" + info}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            {info}
                        </a>
                    </h3>
                );
            })}
        </div>
    );
};

export default Contact;
