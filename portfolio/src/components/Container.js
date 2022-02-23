import React, { useState, useEffect } from 'react'
import CommandItems from '../constants/CommandItems';
import Typewriter from 'typewriter-effect'

const Container = ({ userRequest }) => {

    const [loading, setLoading] = useState(true)
    const [elements, setElements] = useState([])

    const responseCenter = (response) => {
        setElements((oldArray) => [...oldArray, response])
    }

    const checkUserCommand = () => {
        switch (userRequest.value) {
            case 'resume':
                responseCenter(
                    <div className='pb-4'>
                        <h2 className='pb-2'>{'$ ' + userRequest.value}</h2>

                        <a href="../assets/PatrickNguyen.pdf" download="PatrickNguyenResume.pdf">
                            <p className='text-blue-600 underline pt-4'>Click here to download my resume</p>
                        </a>
                    </div>
                )
                break;
            case "experience":
                responseCenter(
                    <div className='pb-4'>
                        <h2 className='pb-2'>{'$ ' + userRequest.value}</h2>

                        <h2>LifeBooster</h2>
                        <h3 className='pb-2'>Full Stack developer | May 3rd, 2021 - December 31st, 2021</h3>
                        <h3> {'>>'} Reworked the front-end using Vue 3 and with new UI desgins, resulted in a cleaner code base and with industry best practices </h3>
                        <h3> {'>>'} Developed the back-end in Node.js with CQRS and event-driven micro-services architechture </h3>
                        <h3> {'>>'} Redesigned and refactored the processing pipeline which made it more robust, efficient and easier to add new features </h3>
                        <h3> {'>>'} Implemented pagination with Cosmos DB to improve the overall stability of the application </h3>
                        <h3> {'>>'} Created bookmarklets to streamline Git branch creation </h3>
                        <h3> {'>>'} You can email donald.duy@lifebooster.ca and ask for a demo of the app I worked on </h3>

                        <a href="../assets/JakeRecommendationLetter.docx" download="LifeBoosterRecommendationLetter.docx">
                            <p className='text-blue-600 underline pt-4'>Click here to download my mentor's recommendation letter</p>
                        </a>

                        <h2 className='pt-3'>Terramera, Inc.</h2>
                        <h3 className='pb-2'>Full Stack developer | January 1st, 2020 - August 31st, 2020</h3>
                        <h3> {'>>'} Implemented front-end in Vue 2 in accordance with UX designs </h3>
                        <h3> {'>>'} Implemented a media file upload and storage solution which resulted in more efficient and streamlined data capture processes for scientists </h3>
                        <h3> {'>>'} Researched and implemented server-side antivirus to add security to the file upload system </h3>
                        <h3> {'>>'} Implemented the back-end microservices using Java, Spring boot and Hibernate </h3>
                        <h3> {'>>'} Maintained databases with PostgreSQL </h3>
                        <h3> {'>>'} Wrote unit and integration tests using Mockito for back-end and Jest for front-end </h3>

                        <a href="../assets/TerrameraReference.pdf" download="TerrameraReferenceLetter.pdf">
                            <p className='text-blue-600 underline pt-4'>Click here to download my mentor's recommendation letter</p>
                        </a>
                    </div>
                )
                break
            case "clear":
                setElements([])
                break;
            case "":
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        checkUserCommand()
    }, [userRequest.id])

    return (
        <div className='overflow-y-scroll'>
            <div className="text-3xl pb-12">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(35).typeString("Hi there! ")
                            .pauseFor(800).typeString("Welcome to my personal website. My name is Patrick Nguyen.")
                            .pauseFor(800).callFunction(() => { setLoading(false) })
                            .start();
                    }}
                />
            </div>

            {loading ? null :
                <>
                    <h2>Type help to see this list of commands</h2>
                    <CommandItems />
                </>
            }

            {elements.map((item) =>
                <div key={Math.floor(Math.random() * 10000)}>
                    {item}
                </div>
            )}
        </div >
    )
}

export default Container
