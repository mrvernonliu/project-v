import * as React from 'react'
import {Language} from "./types/Language";
import styles from "../../../styles/LanguageView.module.scss"
import {useEffect, useState} from "react";

export interface SelectedLanguage {
    name: string,
    usageYears: number[]
}

export default function LanguageView(props: any) {
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguage[]>([])
    const languages: Language[] = props.languages

    const onSkillClick = (selectedLanguage: SelectedLanguage) => {
        if (selectedLanguages.filter((language) => language.name === selectedLanguage.name).length !== 0) {
            setSelectedLanguages(selectedLanguages.filter((language) => language.name !== selectedLanguage.name))
        } else {
            setSelectedLanguages(selected => [...selected, selectedLanguage])
        }
    }

    return (
        <div>
            <h1>Technical Skills</h1>
            <p>Here is a more comprehensive of the technologies that I have worked with.</p>
            <div>
                {
                    languages.map((language) => (
                        <span
                            className={styles.skillButton}
                            key={`${language.name}-technicalskills`}
                            onClick={() => onSkillClick({name: language.name, usageYears: language.usageYears})}
                        >
                            <svg className={styles.skillIcons} style={ language.whiteBackground ? {backgroundColor: "white"} : {}} viewBox="0 0 128 128" dangerouslySetInnerHTML={{ __html: language.icon}} key={language.name}>
                            </svg>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}
