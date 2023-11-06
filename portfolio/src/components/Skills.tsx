import React from "react";
import ArrowSymbol from "../constants/ArrowSymbol";
import skills from "../constants/Skills";

const Skills = ({ userInput }) => {
    return (
        <div className="pb-10">
            <h2 className="pb-2 text-gray-400">{"$ " + userInput}</h2>
            {Object.entries(skills).map(([skillType, skills]) => {
                return (
                    <div className="pb-4">
                        <h2 className="pb-2 font-bold text-lg text-sky-200">{skillType}:</h2>
                        {skills.map((skill) => {
                            return (
                                <h3>
                                    <ArrowSymbol /> {skill}
                                </h3>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Skills;
