import React, { useState } from "react";
//styled
import styled from "styled-components";
import { devices } from "../breakpoints";
//react icons
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
//images
import logoSvg from "../images/logo.svg";
// react router
import { Link } from "react-router-dom";

import { navbarData } from "../data/NavbarData.js";

function Navbar() {
    const [show, setShow] = useState(false);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: "smooth",
        });
    };

    const closeMobileMenu = (id) => {
        scrollTo(id);

        setShow(false);
    };

    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
                <NavbarContainer>
                    <Navlogo to='/'>
                        <NavIcon to='/'>
                            <img src={logoSvg} alt='' />
                            esignify
                        </NavIcon>
                    </Navlogo>
                    <MobileIcon onClick={() => setShow(!show)}>
                        {show ? <FaTimes /> : <CgMenuRight />}
                    </MobileIcon>
                    <NavMenu show={show}>
                        {navbarData.map((el, index) => (
                            <NavItem key={index}>
                                <NavLinks
                                    to='/'
                                    onClick={() => closeMobileMenu(el.to)}
                                >
                                    {el.text}
                                </NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    );
}

const Nav = styled.div`
    background: transparent;
    margin-bottom: -80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    position: absolute;
    top: 0;
    z-index: 100;
    width: 100%;
`;
const NavbarContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 50px;
    display: flex;
    justify-content: start;
    height: 80px;

    @media ${devices.mobileL} {
        padding: 0 30px;
    }
`;
const Navlogo = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #ffff;
    justify-self: flex-start;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    z-index: 99;
    cursor: pointer;
`;
const NavIcon = styled.div`
    display: flex;
    align-items: center;

    img {
        margin-right: 0.2rem;
        width: 3rem;
    }
`;
const MobileIcon = styled.div`
    display: none;
    z-index: 100;

    @media ${devices.mobileL} {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
const NavMenu = styled.ul`
    display: flex;
    align-items: center;

    list-style: none;
    text-align: center;

    @media ${devices.mobileL} {
        display: flex;

        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: fixed;
        padding-top: 30%;
        top: 0;
        left: 0;
        opacity: ${({ show }) => (show ? 1 : 0)};
        visibility: ${({ show }) => (show ? "visible" : "hidden")};
        transform: translateY(${({ show }) => (show ? "0" : "-10px")});
        transition: opacity 0.5s ease;
        background-color: #41d0e1;
    }
    > li:first-child {
        margin-left: auto;
    }
`;
const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    &:hover {
        border-bottom: 2px solid #ec421d;
    }
    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        &:hover {
            border-bottom: none;
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;

const NavItem = styled.div`
    height: 80px;
    cursor: pointer;

    @media ${devices.mobileL} {
        width: 100%;
        &:hover {
            border: none;
        }
    }
`;

export default Navbar;
