import React, { useEffect } from "react";
//styles
import styled from "styled-components";
import { devices } from "../breakpoints";
//icons
import { FiMail } from "react-icons/fi";
//animations
import { motion } from "framer-motion";
//observer
import { useInView } from "react-intersection-observer";
//react router
import { Route, Routes, useLocation } from "react-router-dom";
//images
import heroPattern from "../images/hero-pattern-bg-lg.png";
import heroGuy from "../images/hero-guy-1.png";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";
import image3 from "../images/image 3.png";

function HeroPage() {
    const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };
    const variants = {
        hover: {
            y: 15,
            transition: {
                yoyo: Infinity,
                duration: 0.6,
            },
        },
    };
    const { ref, inView } = useInView({
        rootMargin: "-100px",
    });

    useEffect(() => {
        console.log(inView);
    }, [inView]);

    return (
        <>
            <HeroSection>
                <HeroImage className='pattern' src={heroPattern} />
                <HeroImage className='guy' src={heroGuy} />
                <ImageCharacter
                    whileHover='hover'
                    drag
                    variants={variants}
                    dragConstraints={dragConstraints}
                    className='one'
                    src={image1}
                />
                <ImageCharacter
                    whileHover='hover'
                    drag
                    variants={variants}
                    dragConstraints={dragConstraints}
                    className='two'
                    src={image2}
                />
                <ImageCharacter
                    whileHover='hover'
                    drag
                    variants={variants}
                    dragConstraints={dragConstraints}
                    className='three'
                    src={image3}
                />
                <HeroContent>
                    <Heading>We are Designify</Heading>
                    <HeroText>
                        A Team of passionate designer and developers ready to
                        provide unique and outstanding products for you!
                    </HeroText>
                    <ButtonContainer ref={ref}>
                        <ButtonWrapper>
                            <HeroButton className={inView ? "" : "corner"}>
                                {inView ? (
                                    <>Chat with us</>
                                ) : (
                                    <FiMail
                                        color='white'
                                        size='2.3rem'
                                    ></FiMail>
                                )}
                            </HeroButton>
                        </ButtonWrapper>
                    </ButtonContainer>
                </HeroContent>
            </HeroSection>
        </>
    );
}

const HeroSection = styled.section`
    background-image: linear-gradient(to top right, #450b7c, #563cc9, #49e9fb);
    background-size: cover;
    background-attachment: fixed;
    z-index: 11;
    align-items: center;
    height: 940px;
    position: relative;
    display: flex;

    @media ${devices.mobileL} {
        height: 710px;
    }
`;

const HeroImage = styled.img`
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
    width: 100%;
    padding: 0 15px;
    z-index: 10;
    position: relative;
`;

const Heading = styled.h1`
    margin-bottom: 1.5rem;
    font-size: clamp(2.8rem, 6vw, 6.7rem);
    line-height: 1.1;
    font-size: 600;
    font-weight: 600;
    text-align: center;
    color: #fff;
`;

const HeroText = styled.div`
    text-align: center;
    font-size: clamp(0.9rem, 1.5vw, 1.3rem);
    color: #fff;
`;

const ButtonContainer = styled.div`
    /* border: 5px solid red; */
    position: relative;
    display: flex;
    height: 170px;
`;

const ButtonWrapper = styled.div`
    /* border: 5px solid green; */
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
`;

const HeroButton = styled(motion.button)`
    /* border: 5px solid orange; */
    position: absolute;
    width: 250px;
    margin: 0 auto;
    padding: 15px 20px;
    bottom: calc(100vh - 100px);
    right: 50%;
    transform: translate(50%);
    font-weight: 700;
    font-size: 0.7rem;
    line-height: 18px;
    letter-spacing: 1.54px;
    text-transform: uppercase;
    border-radius: 25px;
    border: none;
    background: #fff;
    color: #5238b1;
    cursor: pointer;
    transition: all 0.4s ease-in;

    &.corner {
        position: fixed;
        bottom: 3rem;
        right: 3rem;
        width: 64px;
        height: 64px;
        padding: 10px;
        background-color: #ef4b6c;
        border-radius: 50%;
    }
    &:hover {
        box-shadow: 0 0 9px 9px #5238b1;
        transition: box-shadow 0.3s ease-in;
    }
`;

export default HeroPage;
