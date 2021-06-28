import * as React from 'react'
import {Language} from "./types/Language";
import styles from "../../../styles/LanguageView.module.scss"

export default function LanguageView(props: any) {
    const languages: Language[] = props.languages
    return (
        <div>
            <h1>Technical Skills</h1>
            <p>Here is a more comprehensive of the technologies that I have worked with.</p>
            <div>
                {
                    languages.map((language) => (
                        <svg className={styles.skillIcons} style={ language.whiteBackground ? {backgroundColor: "white"} : {}} viewBox="0 0 128 128" dangerouslySetInnerHTML={{ __html: language.icon}} key={language.name}>
                        </svg>
                    ))
                }
                {/*{*/}
                {/*    experiences.map((experience) => (*/}
                {/*        <ExperienceItem*/}
                {/*            name={experience.name}*/}
                {/*            title={experience.title}*/}
                {/*            iconUrl={experience.iconUrl}*/}
                {/*            startDate={experience.startDate}*/}
                {/*            endDate={experience.endDate}*/}
                {/*            techStack={experience.techStack}*/}
                {/*            key={experience.name}*/}
                {/*        />*/}
                {/*    ))}*/}
            </div>
        </div>
    )
}
