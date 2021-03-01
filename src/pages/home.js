import React from "react";
import Image from "../components/Image/image";
import rose from "./carouselpics/rose.png";
import grads from "./carouselpics/grads.jpg";
import caterpillar from "./carouselpics/caterpillar.jpg";
import sunset from "./carouselpics/sunset.png";
import Carousel from 'react-bootstrap/Carousel';
import "./home.css";

function Home() {
    return (
        <div>
            {/* <h1 className="kaitlin pt-12 text-5xl justify-between shadow-inner" style={{color: "white"}}> Hi,  I'm  Kaitlin! </h1> */}
            <h1 className="kaitlin" style={{color: "white"}}> Hi,  I'm  Kaitlin! </h1>
            <Image />
            <Carousel>
                <Carousel.Item style={{ 'height': "500px" }} >
                    <img style={{ 'height': "500px", width: "600px" }}
                        className="d-block rose mt-12"
                        src={rose} />
                </Carousel.Item  >
                <Carousel.Item style={{ 'height': "500px" }}>
                    <img style={{ 'height': "500px", width: "600px" }}
                        className="d-block grads"
                        src={grads} />
                </Carousel.Item>
                <Carousel.Item style={{ 'height': "500px" }}>
                    <img style={{ 'height': "600px", width: "350px" }}
                        className="d-block caterp"
                        src={caterpillar} />
                </Carousel.Item>
                <Carousel.Item style={{ 'height': "500px" }} >
                    <img style={{ 'height': "500px", width: "600px" }}
                        className="d-block sunset"
                        src={sunset} />
                </Carousel.Item  >
            </Carousel>
        </div>
    )
}

export default Home;