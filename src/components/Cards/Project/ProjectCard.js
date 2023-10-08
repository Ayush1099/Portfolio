import React, { useState } from 'react';
import { Card, Image, Description, Tags, Tag, Button, Title } from './ProjectCardStyle'

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <Title>{project.title}</Title>
            <Image src={project.image} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Description isExpanded={isExpanded}>{project.description}</Description>
            <Button dull href={project?.github} target='new'>View Code</Button>
        </Card>
    );
};

export default ProjectCard;
