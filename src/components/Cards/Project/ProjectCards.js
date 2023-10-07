import React from 'react'
import { Card, Tags, Tag, Title, Desc, Button } from "./ProjectCardStyle";

const ProjectCards = ({ project }) => {
    return (
        <Card>
            <Title>{project.title}</Title>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag>{tag}</Tag>
                ))}
            </Tags>
            <Desc>{project?.description}</Desc>
            <Button dull href={project?.github} target='new'>View Code</Button>
        </Card>
    )
}

export default ProjectCards