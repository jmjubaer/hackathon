import React from "react";
import "./Banner.css";
import Button from "react-bootstrap/Button";
import PicsArt from "../../../assets/PicsArt.png"
const Banner = () => {
    return (
        <div className='banner_body'>
            <div className='container banner_container'>
                <div className='text-white'>
                    <div className=''></div>
                    <h1 className="text-white">Accelerate Innovation with Global AI Challenges</h1>
                    <p className="text-white">
                        AI Challenges at DPhi simulate real-world problems. It
                        is a great place to put your AI/Data Science skills to
                        test on diverse datasets allowing you to foster learning
                        through competitions.
                    </p>
                    <Button variant='light' className="fw-semibold">Create Challenge</Button>
                </div>
                <div className="w-full">
                    <img src={PicsArt} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
