import React from "react";
import ArrowSymbol from "../constants/ArrowSymbol";
import hobbies from "../constants/Hobbies";

const Hobbies = ({ userInput }) => {
    return (
        <div className="pb-10">
            <h2 className="pb-2 text-gray-400">{"$ " + userInput}</h2>
            {Object.entries(hobbies).map(([hobbie, description]) => {
                return (
                    <div className="pb-4">
                        <h2 className="pb-2 font-bold text-lg text-sky-200">{`${hobbie}${
                            description.length > 0 ? ":" : ""
                        }`}</h2>
                        {description.map((desc) => {
                            return (
                                <h3>
                                    <ArrowSymbol /> {desc}
                                </h3>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Hobbies;
