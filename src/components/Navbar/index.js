import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { DiEnvato } from "react-icons/di"
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';

const Nav = styled.nav`
  background-color: ${({theme}) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
  
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max_width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justfy-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640){
    padding: 0 0px;
  }
`
const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`
const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;
const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;
const GithubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
    }
    @media screen and (max-width: 900px) {
    font-size: 12px;
    }
    @media screen and (max-width: 768px) {
    font-size: 14px;
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light+99};
  transition: all 0.3s easi-in-out;
  transform: ${({ open }) => open ? 'translateY(0)': 'translateY(100%)'};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  opacity: ${({ open }) => (open ? '1': '0')};
  z-index: ${({ open }) => (open ? "1" : "-1")};
  @media screen and (min-width: 768px){
    display: none
  }
`

const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
  
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            cursor: "pointer",
          }}
          href='/'>
            <DiEnvato size="3rem" /> 
            <Span> Portfolio </Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}></FaBars>
        </MobileIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton 
            href={Bio.github}
            target='_blank'> 
            Github Profile 
          </GithubButton>
        </ButtonContainer>
      

      {isOpen && (
        <MobileMenu open={isOpen}>
          <MobileMenuLink
            href="#about"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >About</MobileMenuLink>
          <MobileMenuLink
            href="#skills"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >Skills</MobileMenuLink>
          <MobileMenuLink
            href="#experience"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >Experience</MobileMenuLink>
          <MobileMenuLink
            href="#projects"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >Projects</MobileMenuLink>
          <MobileMenuLink
            href="#education"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >Education</MobileMenuLink>
          <GithubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href={Bio.github}
            target='_blank'
            >Github Profile</GithubButton>
        </MobileMenu>
      )
      }
      </NavContainer>
    </Nav>
  )
}

export default NavBar;