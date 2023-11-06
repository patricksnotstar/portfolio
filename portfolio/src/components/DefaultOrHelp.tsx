import React from "react";
import CommandItems from "../constants/CommandItems";

export const DefaultOrHelp = ({ userInput, type }) => {
    const isHelp = type === "help";
    return (
        <div className="pb-10">
            <h2 className="pt-2 pb-2 text-gray-400">{"$ " + userInput}</h2>
            <CommandItems />
            {!isHelp && (
                <h2 className="pb-2">
                    Invalid command. Please try again with one of the following commands:{" "}
                </h2>
            )}
        </div>
    );
};

export default DefaultOrHelp;
