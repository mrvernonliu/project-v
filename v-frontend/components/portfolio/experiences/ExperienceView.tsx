import * as React from 'react'
import ExperienceItem from "./Experience";
import {Experience} from "./types/Experience";

export default function ExperienceView(props: any) {
    const experiences: Experience[] = props.experiences
    return (
        <div>
            <h1>Experience</h1>
            <p>Here is where I have worked and a (non-exhaustive) list of technologies that I frequently used.</p>
            <div>
                {
                experiences.map((experience) => (
                    <ExperienceItem
                        name={experience.name}
                        title={experience.title}
                        iconUrl={experience.iconUrl}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        techStack={experience.techStack}
                        key={experience.name}
                    />
                ))}
            </div>
        </div>
    )
}
