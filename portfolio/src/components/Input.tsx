import React, { useState } from "react";

const Input = ({ userInputCallback }) => {
    const [input, setInput] = useState("");

    return (
        <div className="flex flex-row w-full">
            <input
                autoFocus
                autoComplete="off"
                placeholder="Enter command here..."
                className="inputArea"
                type="text"
                id="command"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        userInputCallback((event.target as HTMLInputElement).value.trim());
                        setInput("");
                    }
                }}
            />
        </div>
    );
};

export default Input;
