import React from 'react'
import { HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './AboutStyle'
import HeroImg from '../../images/MyImage.jpeg'
import { Bio } from '../../data/constants';

const About = () => {
    const handleHireMeClick = () => {
      window.location.href = `mailto:${Bio.emailId}`;
    };
    return (
        <div id="about">
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am{Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>{Bio.roles}</Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                        <ResumeButton onClick={handleHireMeClick} target='display'>Hire Me</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default About