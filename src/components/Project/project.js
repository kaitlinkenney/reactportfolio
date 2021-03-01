import "./style.css";
import React from 'react';

//Component for each project renderd in projects.js
function Project(props) {
    return (
        <div className="container projectcontainer">

            <div className="card shadow" style={{ width: "90%", height: "470px" }}>
                <img src={props.projimage} className="card-img-top" />
                <div className="card-body" />
                <h5 className="card-title mt-n4 ml-2">{props.title}</h5>
                <p className="card-text pl-2 pr-2">{props.description}</p>
                <div class="container">
                    <div class="row">
                        <div class="col container">
                        <a href={props.projurl} style={{width: "67px"}} className="btn btn-primary one">Live</a>
                            </div>
                        <div class="col container">
                        <a href={props.giturl} className="btn btn-primary two mb-3">GitHub</a>
                             </div>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Project;