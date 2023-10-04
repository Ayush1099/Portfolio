import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import { Bio } from '../../data/constants';
import {FooterContainer,FooterWrapper,Logo,Nav,NavLink,SocialMediaIcons,SocialMediaIcon, Copyright} from "./FooterStyle";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ayush Verma</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <Email/><SocialMediaIcon target="display">{Bio.emailId}</SocialMediaIcon>
        </SocialMediaIcons>
        <SocialMediaIcons>
          <Phone/><SocialMediaIcon target="display">{Bio.phone}</SocialMediaIcon>
        </SocialMediaIcons>
        <SocialMediaIcons>
          <SocialMediaIcon target="display">{Bio.state}{Bio.country}</SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Ayush Verma. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;