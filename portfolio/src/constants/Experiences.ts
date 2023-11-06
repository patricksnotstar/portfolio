interface Experience {
    [company: string]: {
        date: string;
        title: string;
        desc: string[];
    };
}

const experience: Experience = {
    Amazon: {
        date: "June 2022 - current",
        title: "Software Development Engineer (SDE) I",
        desc: [
            "Worked closely with stakeholders to develop widgets that show Amazon product recommendations on Amazon’s retail website.",
            "Redesigned and implemented a new monitoring system with AWS Cloudwatch that provides more detailed information about the service’s health and is easier to operate, while leaving ten times more room to scale compared to the old system.",
            "Implemented a plug-and-play backend solution that reduced engineering efforts to launch new customer experiences by half.",
            "Owned several medium sized projects from the requirement gathering stage through to quality assurance.",
            "Part of an on-call rotation that monitors, troubleshoots and fixes any issues regarding, but not limited to, the customer experiences, the service’s infrastructure and CI/CD.",
        ],
    },
    LifeBooster: {
        date: "May - December 2021",
        title: "Full Stack Developer Co-op",
        desc: [
            "Reworked the front-end using Vue 3 and with new UI designs, resulted in a cleaner code base developed with best practices.",
            "Developed the back-end in Node.js using CQRS and event-driven micro-services architecture.",
            "Redesigned and refactored the processing pipeline which resulted in a more robust, efficient pipeline, and easier to add new features.",
            "Implemented pagination with Cosmos DB which resolved an issue with some pages crashing due to too much data being loaded at once.",
        ],
    },
    Terramera: {
        date: " January - August 2020",
        title: "Full Stack Developer Co-op",
        desc: [
            "Implemented front-end in Vue 2 in accordance with UX designs.",
            "Implemented a media file upload and storage solution which resulted in more efficient and streamlined data captures.",
            "Researched and implemented server-side antivirus to add security to the file upload system.",
            "Implemented microservices using Java, Spring boot and Hibernate.",
            "Maintained databases with PostgreSQL.",
            "Wrote unit and integration tests using Mockito for back-end and Jest for front-end.",
        ],
    },
};

export default experience;
