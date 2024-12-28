import React from "react";
import mock10 from '../assets/images/mock10.png';
import proj1 from '../assets/images/proj1.png';
import proj2 from '../assets/images/proj2.png';

import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.png';
import bg3 from '../assets/images/bg3.png';
import bg4 from '../assets/images/bg4.png';
import proj from '../assets/images/proj.png';

import '../assets/styles/Project.scss';
// https://youtu.be/Uz-b2Ls32kY?si=mRzokAxUuQw-ROjA&t=13

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <div className="video-overlay">
                        <img src={bg1} className="background-img" alt="thumbnail" />
                        <iframe
                            className="centered-video"
                            // width="560"
                            // height="315"
                            src="https://www.youtube.com/embed/Uz-b2Ls32kY?start=13"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <a href="https://www.youtube.com/embed/UlD8c3HF7kU?start=40" target="_blank" rel="noreferrer">
                        <h2>InformedVotr</h2>
                    </a>
                    <p>
                    A website to help people better understand complicated bills and laws using raw bill
                    data from Congress.
                    </p>
                </div>

                <div className="project">
                    <div className="video-overlay">
                        <img src={bg2} className="background-img" alt="thumbnail" />
                        <iframe
                            className="centered-video"
                            // width="560"
                            // height="315"
                            src="https://www.youtube.com/embed/qQ9xaqx5sBc" 
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <a href="https://www.youtube.com/embed/qQ9xaqx5sBc" target="_blank" rel="noreferrer">
                        <h2>ComicHub</h2>
                    </a>
                    <p>
                        An iOS app for people to read their favorite comics from their childhood from today or years ago. Updated daily.
                    </p>
                </div>

                <div className="project"> 
                    <div className="video-overlay">
                        <img src={bg3} className="background-img" alt="thumbnail" />
                        <iframe
                            className="centered-video"
                            // width="560"
                            // height="315"
                            src="https://www.youtube.com/embed/29_gSPR8jkg"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <a href="https://www.youtube.com/embed/29_gSPR8jkg" target="_blank" rel="noreferrer">
                        <h2>AdaptiveVL</h2>
                    </a>
                    <p>
                        An AI-based facial emotion detection software tool to assist educators in creating an adaptive-learning environment to optimize learning in online school.
                    </p>
                </div>

                <div className="project">
                    <div className="video-overlay">
                        <img src={bg4} className="background-img" alt="thumbnail" />
                        <iframe
                            className="centered-video"
                            // width="560"
                            // height="315"
                            src="https://www.youtube.com/embed/UlD8c3HF7kU?start=40"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <a href="https://www.youtube.com/embed/UlD8c3HF7kU?start=40" target="_blank" rel="noreferrer">
                        <h2>CDST: Clinical Decision Support Tool</h2>
                    </a>
                    <p>
                        A two-part AI-based decision support web application to assist physicians in the diagnosis process by:
                        (a) Mathematically determining the patients with the most similar medical history and displaying a summary of their
                        records. (b) Using ML to give a physician feedback on their diagnosis for a patient based on the uploaded medical records.
                    </p>
                </div>

                <div className="project">
                    <div className="video-overlay">
                        <img src={proj} className="background-img" alt="thumbnail" />
                        {/* <iframe
                            className="centered-video"
                            // width="560"
                            // height="315"
                            src="https://www.youtube.com/embed/UlD8c3HF7kU?start=40"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe> */}
                    </div>
                    <a href="https://www.youtube.com/embed/UlD8c3HF7kU?start=40" target="_blank" rel="noreferrer">
                        <h2>Diabetic Retinopathy Research</h2>
                    </a>
                    <p>
                        Created a custom Python software to examine the influence of genes linked to comorbidities on the development of 
                        diabetic retinopathy. Discovered the gene TULP4, which is involved in the pathway of protein ubiquitination, 
                        may be correlated to the development of DR. 4/6 total SNPs shared common between DR and diastolic BP(p-value&lt;0.0001), 
                        were either mutations in or directly upstream of TULP4.
                    </p>
                </div>

                <div className="project">
                    <div className="video-overlay">
                        <img src={bg2} className="background-img" alt="thumbnail" />
                        <iframe
                            className="centered-video"
                            // width="560"
                            // height="315"
                            src="https://www.youtube.com/embed/Td0pZrtaX8U"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <a href="https://www.youtube.com/embed/Td0pZrtaX8U" target="_blank" rel="noreferrer">
                        <h2>Third Eye + ReportNow</h2>
                    </a>
                    <p>
                        An Arduino-based wearable device for the visually impaired to assist in navigation and easily seeking for realtime-help by sending an SMS with the current GPS location using GSM services.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
