import React from "react";
import ArrowSymbol from "../constants/ArrowSymbol";
import experience from "../constants/Experiences";
import Line from "../constants/Line";

const Experiences = ({ userInput }) => {
    return (
        <div className="pb-10">
            <h2 className="pb-2 text-gray-400">{"$ " + userInput}</h2>
            {Object.entries(experience).map(([company, jobDesc]) => {
                return (
                    <div>
                        <h1 className="font-bold text-lg text-sky-200">{company}</h1>
                        <Line />
                        <h3 className="pb-2">
                            <span className="italic">{jobDesc.title}</span> |{" "}
                            <span className="italic">{jobDesc.date}</span>
                        </h3>
                        {jobDesc.desc.map((item) => {
                            return (
                                <h3>
                                    <ArrowSymbol />
                                    {item}
                                </h3>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Experiences;
