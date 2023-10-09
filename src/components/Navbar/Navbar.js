/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, SocialButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyle'
import { FaRegDotCircle } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <FaRegDotCircle size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <SocialButton href={Bio.github} target="_blank"><GitHub/></SocialButton>
          <SocialButton href={Bio.linkedin} target="_blank"><LinkedInIcon/></SocialButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <SocialButton style={{padding: '10px 16px', color: 'white', backgroundColor: '#854CE6', width: 'max-content'}} href={Bio.github} target="_blank"><GitHub/></SocialButton>
            <SocialButton style={{padding: '10px 16px', color: 'white', backgroundColor: '#854CE6', width: 'max-content'}} href={Bio.linkedin} target="_blank"><LinkedInIcon/></SocialButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar