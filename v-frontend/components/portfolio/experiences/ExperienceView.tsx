import * as React from 'react'
import {ExperienceList} from "./types/ExperienceList";
import ExperienceItem from "./Experience";

export default function ExperienceView(props: any) {
    const experiences: ExperienceList = props.experiences
    console.log(experiences.experiences.map((experience) => experience.name))
    return (
        <div>
            <h1>Experience</h1>
            <p>Here is where I have worked the tech that I have been able to learn while doing so.</p>
            <div>
                {
                experiences.experiences.map((experience) => (
                    <ExperienceItem name={experience.name} iconUrl={experience.iconUrl} startDate={experience.startDate} endDate={experience.endDate} techStack={experience.techStack} key={experience.name} />
                ))}
            </div>
        </div>
    )
}
