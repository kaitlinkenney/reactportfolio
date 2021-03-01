import React from 'react';
import Image from "../components/Image/image";
import { DiStreamline } from "react-icons/di";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BiBadgeCheck } from "react-icons/bi";
import "./about.css";

//About page
function About() {
    return (

        <div className="container rounded containerone" style={{ background: "#215" }}>
            <Image />
            <div className=" container shadow rounded containertwo">
                <h1 className="skills"> Skills Overview </h1>
                <p className="container containerthree">  I am a full stack web developer originally from Cape May, New Jersey.
                I currently teach ESL (English as a second language) online in my spare time.
                I obtained my certificate in web development from Rutgers University Full Stack Web Development Bootcamp.
                Previously, I have attended Rutgers University with a major in psychology and Camden County College, 
                where I obtained my degree in Science (Pre-Nursing Specialty).
                I have experience in various different customer service positions that I have worked in
                throughout school. I like to problem solve and I hope to continuously build on my knowledge and
                skill set. </p>
                <p className="resume"> <a href="https://docs.google.com/document/d/1wnHaEFWsO2BqsGK51IQHHZROhXPmVo6s2M1gN6VSUFE/edit">View my resume here!</a>
                </p>
            </div>
            <div className="row">
                <div className="container shadow rounded containerfour" style={{ width: "500px" }}>
                    <HiOutlineDesktopComputer className="desktop" style={{ height: 35, width: 35 }} />
                    <div className="rows">
                        <h3> Front End</h3>
                    </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> HTML5
                        </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> CSS3
                        </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> Bootstrap
                        </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> Materialize
                        </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> TailwindCss
                        </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> React
                        </div>
                </div>
                <div className="container shadow rounded containerfive" style={{ width: "500px" }}>
                    <DiStreamline className="db" style={{ height: 35, width: 35 }} />
                    <div className="rows">
                        <h3> Back End</h3>
                    </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> Node
                        </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> Express
                        </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> MySQL
                        </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> Sequelize
                        </div>
                    <div className="rows">
                        < BiBadgeCheck style={{ height: 25 }} /> MongoDB
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About;