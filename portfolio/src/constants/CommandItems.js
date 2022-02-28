import React from "react";
import Separator from "./Separator";

const commandItems = () => {
    return (
        <div>
            <h3> {"$ "} Resume </h3>
            <h3> {"$ "} Projects </h3>
            <h3> {"$ "} Experience </h3>
            <h3> {"$ "} Skills </h3>
            <h3> {"$ "} Hobbies </h3>
            <h3> {"$ "} Contact Info </h3>
            <h3> {"$ "} References </h3>
            <h3> {"$ "} Clear </h3>
            <Separator />
        </div>
    );
};

export default commandItems;
