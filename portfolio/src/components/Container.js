import React, { useState, useEffect, useRef } from "react";
import CommandItems from "../constants/CommandItems";
import Typewriter from "typewriter-effect";
import PatrickNguyenResume from "../assets/PatrickNguyenResume.pdf";
import LifeBoosterRecommendationLetter from "../assets/LifeBoosterRecommendationLetter.pdf";
import TerrameraReferenceLetter from "../assets/TerrameraReferenceLetter.pdf";
import ArrowSymbol from "../constants/ArrowSymbol";

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
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2 text-gray-400">{"$ " + userRequest.value}</h2>

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
                        <h2 className="pb-2 text-gray-400">{"$ " + userRequest.value}</h2>

                        <h1 className="font-bold text-lg text-sky-200">LifeBooster</h1>
                        <h3 className="pb-2">
                            <span className="italic">Full Stack developer</span> |{" "}
                            <span className="italic">May 3rd, 2021 - December 31st, 2021</span>
                        </h3>
                        <h3>
                            <ArrowSymbol />
                            Reworked the front-end using Vue 3 and new UI desgins, resulting in a
                            cleaner code base that follows industry best practices
                        </h3>
                        <h3>
                            <ArrowSymbol />
                            Developed the back-end in Node.js and Typescript with CQRS and an
                            event-driven micro-services architechture
                        </h3>
                        <h3>
                            <ArrowSymbol />
                            Redesigned and refactored the processing pipeline which made it more
                            robust, efficient and easier to add new features
                        </h3>
                        <h3>
                            <ArrowSymbol />
                            Implemented pagination with Cosmos DB to improve the overall scalability
                            of the application
                        </h3>
                        <h3>
                            <ArrowSymbol />
                            Created bookmarklets to streamline Git branch creation
                        </h3>
                        <h3>
                            <ArrowSymbol />
                            You can email{" "}
                            <a
                                href="mailto:donald.duy@lifebooster.ca"
                                className="text-blue-600 underline pt-2"
                            >
                                donald.duy@lifebooster.ca
                            </a>{" "}
                            and ask for a demo of the app I worked on
                        </h3>

                        <a
                            href={LifeBoosterRecommendationLetter}
                            download="LifeBoosterRecommendationLetter.pdf"
                        >
                            <p className="text-blue-600 underline pt-2">
                                Click here to download my mentor's recommendation letter
                            </p>
                        </a>

                        <h1 className="pt-3 font-bold text-lg text-sky-200">Terramera, Inc.</h1>
                        <h3 className="pb-2">
                            <span className="italic">Full Stack developer</span> |{" "}
                            <span className="italic">January 1st, 2020 - August 31st, 2020</span>
                        </h3>
                        <h3>
                            <ArrowSymbol /> Implemented the front-end in Vue 2 in accordance with UX
                            designs
                        </h3>
                        <h3>
                            <ArrowSymbol /> Implemented a media file upload and storage solution
                            which resulted in more efficient and streamlined data capture processes
                            for company scientists
                        </h3>
                        <h3>
                            <ArrowSymbol /> Researched and implemented server-side antivirus
                            protection to add security to the file upload system
                        </h3>
                        <h3>
                            <ArrowSymbol /> Implemented back-end microservices using Java, Spring
                            boot and Hibernate
                        </h3>
                        <h3>
                            <ArrowSymbol /> Maintained databases with PostgreSQL{" "}
                        </h3>
                        <h3>
                            <ArrowSymbol /> Wrote unit and integration tests using Mockito for the
                            back-end and Jest for the front-end
                        </h3>

                        <a href={TerrameraReferenceLetter} download="TerrameraReferenceLetter.pdf">
                            <p className="text-blue-600 underline pt-2">
                                Click here to download my mentor's recommendation letter
                            </p>
                        </a>
                    </div>
                );
                break;
            case "projects":
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2 text-gray-400">{"$ " + userRequest.value}</h2>

                        <h2 className="font-bold text-lg text-sky-200">This website</h2>
                        <h3 className="pb-2 italic">Personal portfolio</h3>
                        <h3>
                            <ArrowSymbol /> Built using React.js and Tailwind.css
                        </h3>
                        <h3>
                            <ArrowSymbol /> Deployed on Netlify
                        </h3>
                        <h3>
                            <ArrowSymbol /> You can check out my code on{" "}
                            <a
                                href="https://github.com/patricksnotstar/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Github
                            </a>
                        </h3>

                        <h2 className="pt-3 font-bold text-lg text-sky-200">Route Planner App</h2>
                        <h3 className="pb-2">
                            {" "}
                            <span className="italic">Personal Project</span> |{" "}
                            <span className="italic">March, 2022</span>
                        </h3>
                        <h3>
                            <ArrowSymbol /> Co-developed an app that calculates the most efficient
                            order of destinations
                        </h3>
                        <h3>
                            <ArrowSymbol /> Worked with Bing Maps API to get location and route data
                        </h3>
                        <h3>
                            <ArrowSymbol /> Wrote an algorithm that returns the order of
                            destinations that will minimize travel distance
                        </h3>
                        <h3>
                            <ArrowSymbol /> Created the app using React-Native
                        </h3>
                        <h3>
                            <ArrowSymbol /> Unpublished but you can check out my code on{" "}
                            <a
                                href="https://github.com/kchangch/Route-Planner"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Github
                            </a>
                        </h3>

                        <h2 className="pt-3 font-bold text-lg text-sky-200">
                            Beagle Bone Drum Player
                        </h2>
                        <h3 className="pb-2">
                            {" "}
                            <span className="italic">
                                Group project for Embedded Systems class
                            </span>{" "}
                            | <span className="italic">March, 2021</span>
                        </h3>
                        <h3>
                            <ArrowSymbol /> Developed a front-end using HTML, CSS, JQuery to
                            interact with the BeagleBone board
                        </h3>
                        <h3>
                            <ArrowSymbol /> Wrote a simple Node.js back-end to handle front-end
                            requests and send them to the BeagleBone board
                        </h3>
                        <h3>
                            <ArrowSymbol /> Wrote multi-threaded BeagleBone firmware in C that
                            handles many simultaneous requests to play sounds at once
                        </h3>
                        <h3>
                            <ArrowSymbol /> Pair-programmed. Check out our code on{" "}
                            <a
                                href="https://github.com/patricksnotstar/Embedded_systems_class/tree/master/as3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Github
                            </a>
                        </h3>

                        <h2 className="pt-3 font-bold text-lg text-sky-200">
                            Sentiment Analysis and Topic Classification of Newspaper Articles
                        </h2>
                        <h3 className="pb-2">
                            <span className="italic">
                                Group project for Natural Language Processing class
                            </span>{" "}
                            | <span className="italic">November, 2020</span>
                        </h3>
                        <h3>
                            <ArrowSymbol /> Worked with a team of 4 to develop a sentiment analysis
                            and topic classification pipeline in Python{" "}
                        </h3>
                        <h3>
                            <ArrowSymbol /> Wrote a web scraper to collect newspaper data from
                            different news outlets
                        </h3>
                        <h3>
                            <ArrowSymbol /> Created a front-end to visualize our results using Vue
                            2. You can check it out{" "}
                            <a
                                href="https://teletubbies-front-end.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                here
                            </a>
                        </h3>
                        <h3>
                            <ArrowSymbol /> Check out our code, and our paper on{" "}
                            <a
                                href="https://github.com/patricksnotstar/NLP-class-paper"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Github
                            </a>
                        </h3>

                        <h2 className="pt-3 font-bold text-lg text-sky-200">Golang Blockchain</h2>
                        <h3 className="pb-2">
                            <span className="italic">
                                Group project for Comparative Programming Languages class
                            </span>{" "}
                            | <span className="italic">November, 2018</span>
                        </h3>
                        <h3>
                            <ArrowSymbol /> Implemented a simple blockchain in Golang
                        </h3>
                        <h3>
                            <ArrowSymbol /> Utilized Golang's simple concurrency to create multiple
                            worker threads, resulted in a faster runtime
                        </h3>
                        <h3>
                            <ArrowSymbol /> Check out my code on{" "}
                            <a
                                href="https://github.com/patricksnotstar/GoBlockChain"
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
            case "contact info":
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2 text-gray-400">{"$ " + userRequest.value}</h2>

                        <h3 className="pt-1"> Phone: 604-779-4316</h3>
                        <h3 className="pt-1">
                            {" "}
                            E-mail:{" "}
                            <a
                                href="mailto:patricknguyen97@gmail.com"
                                className="text-blue-600 underline"
                            >
                                patricknguyen97@gmail.com
                            </a>
                        </h3>
                        <h3 className="pt-1">
                            Github:{" "}
                            <a
                                href="https://github.com/patricksnotstar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                https://github.com/patricksnotstar
                            </a>
                        </h3>
                        <h3 className="pt-1">
                            LinkedIn:{" "}
                            <a
                                href="https://www.linkedin.com/in/patrick-nguyen-0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                www.linkedin.com/in/patrick-nguyen-0
                            </a>
                        </h3>
                    </div>
                );
                break;
            case "hobbies":
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2 text-gray-400">{"$ " + userRequest.value}</h2>

                        <h2 className="pb-2 font-bold text-lg text-sky-200">
                            {" "}
                            Custom Mechanical Keyboards:
                        </h2>
                        <h3>
                            <ArrowSymbol /> Mr.Suit with POM plate, Gateron ink black v2 switches
                        </h3>
                        <h3>
                            <ArrowSymbol /> Bakeneko65 with FR4 plate, Gazzew Boba U4T switches
                        </h3>
                        <h3>
                            <ArrowSymbol /> Glacier80 with no plate, SOTC switches
                        </h3>

                        <h2 className="pb-2 pt-2 font-bold text-lg text-sky-200"> Video Games:</h2>
                        <h3>
                            <ArrowSymbol /> The Witcher: Wild Hunt
                        </h3>
                        <h3>
                            <ArrowSymbol /> League of Legends
                        </h3>
                        <h3>
                            <ArrowSymbol /> Apex Legends
                        </h3>
                        <h3>
                            <ArrowSymbol /> Valorant
                        </h3>

                        <h2 className="pb-2 pt-2 font-bold text-lg text-sky-200">
                            {" "}
                            Weightlifting:
                        </h2>
                        <h3>
                            <ArrowSymbol /> Squat PR: 315 lbs
                        </h3>
                        <h3>
                            <ArrowSymbol /> Deadlift PR: 315 lbs
                        </h3>
                        <h3>
                            <ArrowSymbol /> Benchpress PR: 185 lbs
                        </h3>

                        <h2 className="pb-2 pt-2 font-bold text-lg text-sky-200"> Hiking</h2>
                        <h2 className="pb-2 font-bold text-lg text-sky-200"> Snowshoeing</h2>
                    </div>
                );
                break;
            case "skills":
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2 text-gray-400">{"$ " + userRequest.value}</h2>

                        <h2 className="pb-2 font-bold text-lg text-sky-200"> Technical skills:</h2>
                        <h3>
                            <ArrowSymbol /> C/C++
                        </h3>
                        <h3>
                            <ArrowSymbol /> Javascript/Typescript
                        </h3>
                        <h3>
                            <ArrowSymbol /> Vue.js, React.js, Node.js
                        </h3>
                        <h3>
                            <ArrowSymbol /> Java
                        </h3>
                        <h3>
                            <ArrowSymbol /> Spring boot, Hibernate
                        </h3>
                        <h3>
                            <ArrowSymbol /> Python
                        </h3>
                        <h3>
                            <ArrowSymbol /> Azure, CosmosDb
                        </h3>
                        <h3>
                            <ArrowSymbol /> PostgreSQL
                        </h3>

                        <h2 className="pb-2 pt-2 font-bold text-lg text-sky-200">
                            {" "}
                            Transferrable skills:
                        </h2>
                        <h3>
                            <ArrowSymbol /> Communication
                        </h3>
                        <h3>
                            <ArrowSymbol /> Interpersonal
                        </h3>
                        <h3>
                            <ArrowSymbol /> Teamwork
                        </h3>
                        <h3>
                            <ArrowSymbol /> Resourcefulness
                        </h3>
                        <h3>
                            <ArrowSymbol /> Creativity
                        </h3>
                        <h3>
                            <ArrowSymbol /> Quick learner
                        </h3>
                    </div>
                );
                break;
            case "references":
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2 text-gray-400">{"$ " + userRequest.value}</h2>

                        <h2 className="font-bold text-lg text-sky-200">LifeBooster</h2>
                        <a
                            href={LifeBoosterRecommendationLetter}
                            download="LifeBoosterRecommendationLetter.pdf"
                        >
                            <p className="text-blue-600 underline pt-2">
                                Click here to download my mentor's recommendation letter
                            </p>
                        </a>

                        <h2 className="pt-3 font-bold text-lg text-sky-200">Terramera, Inc.</h2>
                        <a href={TerrameraReferenceLetter} download="TerrameraReferenceLetter.pdf">
                            <p className="text-blue-600 underline pt-2">
                                Click here to download my mentor's recommendation letter
                            </p>
                        </a>
                    </div>
                );
                break;
            case "education":
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2 text-gray-400">{"$ " + userRequest.value}</h2>

                        <h2 className="font-bold text-lg text-sky-200">
                            Bachelor of Science in Computing Science
                        </h2>
                        <h3 className="pb-2">
                            <span className="italic">Simon Fraser University</span> |{" "}
                            <span className="italic">Graduating in May 2022</span>
                        </h3>
                        <h3>
                            <ArrowSymbol /> Dean's honour roll Fall 2019
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
                        <h2 className="pb-2 text-gray-400">{"$ " + userRequest.value}</h2>

                        <CommandItems />
                    </div>
                );
                break;
            default:
                responseCenter(
                    <div className="pb-4">
                        <h2 className="pb-2 text-gray-400">{"$ " + userRequest.value}</h2>

                        <h2 className="pb-2">
                            Invalid command. Please try again with one of the following commands:{" "}
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
