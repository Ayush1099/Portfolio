import React from 'react'
import {Description,Span,Card,Top,Image,Body,Role,Company,Date,Skills,ItemWrapper,Skill} from './ExperienceCardStyle';

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&<Span>{experience?.desc?.map((exp)=>(<p>• {exp}</p>))}</Span>}
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill) => (<Skill>• {skill}</Skill>))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
        </Card>
    )
}

export default ExperienceCard