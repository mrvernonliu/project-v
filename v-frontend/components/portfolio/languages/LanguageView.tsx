import * as React from 'react'
import {Language} from "./types/Language";
import styles from "../../../styles/LanguageView.module.scss"
import {useState} from "react";
import {SelectedLanguage} from "./types/SelectedLanguage";
import UsageYearsChart from "./UsageYearsChart";

interface LanguageViewProps {
    languages: Language[]
}

export default function LanguageView(props: LanguageViewProps) {
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguage[]>([])

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
                    props.languages.map((language) => (
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
            <UsageYearsChart selectedLanguages={selectedLanguages} />
        </div>
    )
}
