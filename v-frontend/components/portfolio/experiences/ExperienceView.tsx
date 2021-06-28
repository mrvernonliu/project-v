import * as React from 'react'
import ExperienceItem from "./Experience";
import {Experience} from "./types/Experience";

interface ExperienceViewProps {
    experiences: Experience[]
}

export default function ExperienceView(props: ExperienceViewProps) {
    return (
        <div>
            <h1>Experience</h1>
            <p>Here is where I have worked and a (non-exhaustive) list of technologies that I frequently used.</p>
            <div>
                {
                props.experiences.map((experience) => (
                    <ExperienceItem experience={experience} key={`${experience.name}-experienceView`} />
                ))}
            </div>
        </div>
    )
}
