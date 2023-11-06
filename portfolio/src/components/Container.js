import React, { useState, useEffect, useRef } from "react";
import CommandItems from "../constants/CommandItems";
import Typewriter from "typewriter-effect";
import PatrickNguyenResume from "../assets/PatrickNguyenResume.pdf";
import LifeBoosterRecommendationLetter from "../assets/LifeBoosterRecommendationLetter.pdf";
import TerrameraReferenceLetter from "../assets/TerrameraReferenceLetter.pdf";
import ArrowSymbol from "../constants/ArrowSymbol";
import Resume from "./Resume";
import DefaultOrHelp from "./DefaultOrHelp";
import Education from "./Education";
import Contact from "./Contact";
import References from "./References";
import Experiences from "./Experiences";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
import Skills from "./Skills";
import { commands } from "../constants/CommandLists";

const Container = ({ userRequest }) => {
    const [loading, setLoading] = useState(true);
    const [elements, setElements] = useState([]);
    const bottomPageRef = useRef(null);

    const responseCenter = (response) => {
        setElements((oldArray) => [...oldArray, response]);
    };

    const checkUserCommand = () => {
        if (!userRequest.value) return;

        switch (userRequest.value.toLowerCase()) {
            case "resume":
                responseCenter(<Resume userInput={userRequest.value} />);
                break;
            case "experience":
                responseCenter(<Experiences userInput={userRequest.value} />);
                break;
            case "projects":
                responseCenter(<Projects userInput={userRequest.value} />);
                break;
            case "contact":
                responseCenter(<Contact userInput={userRequest.value} />);
                break;
            case "hobbies":
                responseCenter(<Hobbies userInput={userRequest.value} />);
                break;
            case "skills":
                responseCenter(<Skills userInput={userRequest.value} />);
                break;
            case "references":
                responseCenter(<References userInput={userRequest.value} />);
                break;
            case "education":
                responseCenter(<Education userInput={userRequest.value} />);
                break;
            case "clear":
                setElements([]);
                break;
            case "":
                break;
            case "help":
                responseCenter(<DefaultOrHelp userInput={userRequest.value} type={"help"} />);
                break;
            default:
                responseCenter(<DefaultOrHelp userInput={userRequest.value} type={"default"} />);
                break;
        }
    };

    const scrollToBottom = () => {
        bottomPageRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        checkUserCommand();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userRequest.id]);

    useEffect(scrollToBottom, [elements]);

    return (
        <div className="overflow-y-scroll">
            <div className="text-3xl pb-12">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(35)
                            .typeString("Hi there! ")
                            .pauseFor(800)
                            .typeString(
                                "Welcome to my personal website. My name is Patrick Nguyen."
                            )
                            .pauseFor(600)
                            .callFunction(() => {
                                setLoading(false);
                            })
                            .start();
                    }}
                />
            </div>

            {loading ? null : (
                <>
                    <h2 className="pb-2">
                        Type <span className="text-yellow-200">help</span> to see this list of
                        commands
                    </h2>
                    <CommandItems />
                </>
            )}

            {elements.map((item) => (
                <div key={Math.floor(Math.random() * 10000)}>{item}</div>
            ))}

            <div ref={bottomPageRef}></div>
        </div>
    );
};

export default Container;
