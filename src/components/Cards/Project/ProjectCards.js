import React from 'react'
import { Card, Tags, Tag, Details, Title, Desc, ButtonGroup, Button } from "./ProjectCardStyle";

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card>
            <Details>
                <Title>{project.title}</Title>
            </Details>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag>{tag}</Tag>
                ))}
            </Tags>
            <Desc>{project?.description.map((desc) => (<p>• {desc}</p>))}</Desc>
            <ButtonGroup>
                <Button dull href={project?.github} target='new'>View Code</Button>
            </ButtonGroup>
        </Card>
    )
}

export default ProjectCards