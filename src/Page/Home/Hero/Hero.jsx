import React from "react";
import ai from "../../../assets/Group_1000002515.svg";
import info from "../../../assets/Group_1000002516.svg";
import host from "../../../assets/Group_1000002518.svg";
import "./Hero.css";

const HeroSection = () => {
    return (
        <section className='hero_container'>
            <div className='hero_body container'>
                <div className='single_box d-flex text-white gap-3'>
                    <img src={ai} alt='' />
                    <div className=''>
                        <h3 className="fs-4">100K+</h3>
                        <h6>AI model submissions</h6>
                    </div>
                </div>
                <div className='single_box d-flex text-white gap-3'>
                    <img src={info} alt='' />
                    <div className=''>
                        <h3 className="fs-4">50K+</h3>
                        <h6>Data Scientists </h6>
                    </div>
                </div>
                <div className='single_box d-flex text-white gap-3'>
                    <img src={host} alt='' />
                    <div className=''>
                        <h3 className="fs-4">100+</h3>
                        <h6>AI Challenges hosted</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
