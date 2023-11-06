import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
    const [input, setInput] = useState({});

    const userInput = (command) => {
        setInput({
            id: Math.floor(Math.random() * Math.floor(new Date() / 1000)),
            value: command,
        });
    };

    return (
        <div className="flex w-screen h-screen bg-[#1E1C1C] text-white justify-center place-items-center relative text">
            <div className="flex flex-col w-screen h-full p-8 items-start">
                <Container userRequest={input} />
                <div className="flex absolute bottom-0 left-0 pb-8 pl-8 w-3/5 pt-10 block">
                    {"$"}&nbsp;
                    <Input userInputCallback={(command) => userInput(command)} />
                </div>
            </div>
        </div>
    );
}

export default App;
