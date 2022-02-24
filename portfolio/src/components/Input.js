import React, { useState } from "react";

const Input = ({ userInputCallback }) => {
    const [input, setInput] = useState("");

    return (
        <div className="flex flex-row w-full">
            <label for="command"> $&nbsp; </label>
            <input
                autoFocus
                autoComplete="off"
                className="w-11/12 bg-transparent border-b-2"
                type="text"
                id="command"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        userInputCallback(event.target.value.trim());
                        setInput("");
                    }
                }}
            />
        </div>
    );
};

export default Input;
