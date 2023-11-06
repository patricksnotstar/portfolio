import React from "react";
import ArrowSymbol from "../constants/ArrowSymbol";

const Education = ({ userInput }) => {
    return (
        <div className="pb-10">
            <h2 className="pb-2 text-gray-400">{"$ " + userInput}</h2>

            <h2 className="font-bold text-lg text-sky-200">
                Bachelor of Science in Computing Science
            </h2>
            <h3 className="pb-2">
                <span className="italic">Simon Fraser University</span>
            </h3>
            <h3>
                <ArrowSymbol /> 2x Dean's honour roll, 1x President's honour roll
            </h3>
        </div>
    );
};

export default Education;
