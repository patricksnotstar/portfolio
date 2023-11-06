import React from "react";
import { commands } from "./CommandLists";

const commandItems = () => {
    return (
        <div className="pb-5">
            {Object.entries(commands).map(([item, value]) => {
                return <h3 className="pt-2">{"$ " + value}</h3>;
            })}
        </div>
    );
};

export default commandItems;
