import React from "react";
//styles
import styled from "styled-components";
import { devices } from "../breakpoints";
//animations
import { motion } from "framer-motion";
//react router
import { Route, Routes, useLocation } from "react-router-dom";
//images
import heroPattern from "../images/hero-pattern-bg-lg.png";
import heroGuy from "../images/hero-guy-1.png";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";
import image3 from "../images/image 3.png";

function Pages() {
    return (
        <>
            <HeroSection>
                <HeroImage className='pattern' src={heroPattern} />
                <HeroImage className='guy' src={heroGuy} />
                <ImageCharacter className='one' src={image1} />
                <ImageCharacter className='two' src={image2} />
                <ImageCharacter className='three' src={image3} />
                <HeroContent></HeroContent>
            </HeroSection>
        </>
    );
}

const HeroSection = styled.section`
    border: 1px solid red;
    background-image: linear-gradient(to top right, #450b7c, #563cc9, #49e9fb);
    background-size: cover;
    background-attachment: fixed;
    z-index: 11;
    align-items: center;
    height: 640px;
    position: relative;
    display: flex;

    @media ${devices.mobileL} {
        height: 710px;
    }
`;

const HeroImage = styled.img`
    border: 1px solid purple;
    z-index: 10;
    width: 100%;
    position: absolute;
    left: 0;
    object-fit: cover;

    &.pattern {
        height: 100%;
        max-height: 100%;
        top: 0;
    }

    &.guy {
        bottom: 0;
    }
`;

const ImageCharacter = styled(motion.img)`
    border: 1px solid green;
    z-index: 11;
    width: 100%;
    position: absolute;
    width: clamp(90px, 15vw, 200px);
    left: auto;

    &.one {
        top: 4rem;
        right: 200px;
        width: clamp(170px, 15vw, 230px);

        @media ${devices.mobileL} {
            right: 50%;
            transform: translateX(50%);
        }
    }

    &.two {
        bottom: 4rem;
        right: 200px;
        z-index: 100;

        @media ${devices.mobileL} {
            right: 50px;
        }
    }

    &.three {
        top: 3rem;
        left: 150px;

        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`;

const HeroContent = styled.div`
    border: 5px solid red;
    width: 100%;
    padding: 0 15px;
    z-index: 10;
    position: relative;
`;

export default Pages;
