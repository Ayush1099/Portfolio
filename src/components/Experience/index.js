import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import{Container, Wrapper, Title, TimelineSection} from './ExperienceStyle'

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience