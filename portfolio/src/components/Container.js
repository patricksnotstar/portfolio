import React, { useState, useEffect, useRef } from "react";
import CommandItems from "../constants/CommandItems";
import Typewriter from "typewriter-effect";
import PatrickNguyenResume from "../assets/PatrickNguyenResume.pdf";
import LifeBoosterRecommendationLetter from "../assets/LifeBoosterRecommendationLetter.docx";
import TerrameraReferenceLetter from "../assets/TerrameraReferenceLetter.pdf";

const Container = ({ userRequest }) => {
    const [loading, setLoading] = useState(true);
    const [elements, setElements] = useState([]);
    const bottomPageRef = useRef(null);

    const responseCenter = (response) => {
        setElements((oldArray) => [...oldArray, response]);
    };

    const checkUserCommand = () => {
        if (!userRequest.value) return;

        switch (userRequest.value) {
            case "resume":
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2">{"$ " + userRequest.value}</h2>

                        <a href={PatrickNguyenResume} download="PatrickNguyenResume.pdf">
                            <p className="text-blue-600 underline pt-2">
                                Click here to download my resume
                            </p>
                        </a>
                    </div>
                );
                break;
            case "experience":
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2">{"$ " + userRequest.value}</h2>

                        <h2>LifeBooster</h2>
                        <h3 className="pb-2">
                            Full Stack developer | May 3rd, 2021 - December 31st, 2021
                        </h3>
                        <h3>
                            {">>"} Reworked the front-end using Vue 3 and with new UI desgins,
                            resulted in a cleaner code base and with industry best practices
                        </h3>
                        <h3>
                            {">>"} Developed the back-end in Node.js with CQRS and event-driven
                            micro-services architechture
                        </h3>
                        <h3>
                            {">>"} Redesigned and refactored the processing pipeline which made it
                            more robust, efficient and easier to add new features
                        </h3>
                        <h3>
                            {">>"} Implemented pagination with Cosmos DB to improve the overall
                            stability of the application
                        </h3>
                        <h3>{">>"} Created bookmarklets to streamline Git branch creation</h3>
                        <h3>
                            {">>"} You can email donald.duy@lifebooster.ca and ask for a demo of the
                            app I worked on
                        </h3>

                        <a
                            href={LifeBoosterRecommendationLetter}
                            download="LifeBoosterRecommendationLetter.docx"
                        >
                            <p className="text-blue-600 underline pt-4">
                                Click here to download my mentor's recommendation letter
                            </p>
                        </a>

                        <h2 className="pt-3">Terramera, Inc.</h2>
                        <h3 className="pb-2">
                            Full Stack developer | January 1st, 2020 - August 31st, 2020
                        </h3>
                        <h3>{">>"} Implemented front-end in Vue 2 in accordance with UX designs</h3>
                        <h3>
                            {">>"} Implemented a media file upload and storage solution which
                            resulted in more efficient and streamlined data capture processes for
                            scientists
                        </h3>
                        <h3>
                            {">>"} Researched and implemented server-side antivirus to add security
                            to the file upload system
                        </h3>
                        <h3>
                            {">>"} Implemented the back-end microservices using Java, Spring boot
                            and Hibernate
                        </h3>
                        <h3> {">>"} Maintained databases with PostgreSQL </h3>
                        <h3>
                            {">>"} Wrote unit and integration tests using Mockito for back-end and
                            Jest for front-end
                        </h3>

                        <a href={TerrameraReferenceLetter} download="TerrameraReferenceLetter.pdf">
                            <p className="text-blue-600 underline pt-4">
                                Click here to download my mentor's recommendation letter
                            </p>
                        </a>
                    </div>
                );
                break;
            case "projects":
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2">{"$ " + userRequest.value}</h2>

                        <h2>Beagle Bone Drum Player</h2>
                        <h3 className="pb-2">Project for embedded system class | March, 2021</h3>
                        <h3>
                            {">>"} Developed a front-end using HTML, CSS, JQuery to interact with
                            the BeagleBone board
                        </h3>
                        <h3>
                            {">>"} Wrote a simple Node.js beck-end to handle front-end requests and
                            send them to the BeagleBone board
                        </h3>
                        <h3>
                            {">>"} Wrote a multi-threaded BeagleBone firmware in C to handle many
                            requests to play sound at once
                        </h3>
                        <h3>
                            {">>"} Implemented pagination with Cosmos DB to improve the overall
                            stability of the application
                        </h3>
                        <h3>
                            {">>"} Pair-programmed. Check out our code on{" "}
                            <a
                                href="https://github.com/patricksnotstar/Embedded_systems_class/tree/master/as3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Github
                            </a>
                        </h3>

                        <h2 className="pt-3">
                            Sentiment Analysis and Topic Classification of Newspapers
                        </h2>
                        <h3 className="pb-2">
                            Natural Language Processing class project | November, 2020
                        </h3>
                        <h3>
                            {">>"} Worked with a team of 4 to develop a sentiment analysis and topic
                            classification pipeline in Python{" "}
                        </h3>
                        <h3>
                            {">>"} Wrote a web scraper to collect newspaper data from different news
                            outlets
                        </h3>
                        <h3>{">>"} Created a front-end to visualize our results using Vue 2</h3>
                        <h3>
                            {">>"} Check out our code, and our paper on{" "}
                            <a
                                href="https://github.com/patricksnotstar/NLP-class-paper"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Github
                            </a>
                        </h3>
                    </div>
                );
                break;
            case "clear":
                setElements([]);
                break;
            case "":
                break;
            case "help":
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2">{"$ " + userRequest.value}</h2>

                        <CommandItems />
                    </div>
                );
                break;
            default:
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2">{"$ " + userRequest.value}</h2>

                        <h2 className="pb-2">
                            Invalid command. Please try again with one of these following commands:{" "}
                        </h2>
                        <CommandItems />
                    </div>
                );
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
        <div id="container" className="overflow-y-scroll">
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
                    <h2>Type help to see this list of commands</h2>
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
