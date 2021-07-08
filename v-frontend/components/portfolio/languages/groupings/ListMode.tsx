import styles from "../../../../styles/LanguageView.module.scss";
import * as React from "react";
import {Language} from "../types/Language";
import {getBorderColour} from "../LanguageUtils";
import {SelectedLanguage} from "../types/SelectedLanguage";
import {useEffect, useState} from "react";
import ReactTooltip from "react-tooltip";

interface ListModeProps {
    sortedLanguages: Language[],
    selectedLanguages: SelectedLanguage[],
    onSkillClick: Function
}

export default function ListMode(props: ListModeProps) {
    // Required for react tooltip bug https://stackoverflow.com/questions/64079321/react-tooltip-and-next-js-ssr-issue
    const [isTooltipVisible, setTooltipVisibility] = useState(false);

    useEffect(() => {
        setTooltipVisibility(true);
    }, []);

    return (
        <div>
            {
                props.sortedLanguages.map((language) => {
                    const borderStyle = getBorderColour(language, props.selectedLanguages)
                    return (
                        <span key={language.name + 'skillsContainer'}>
                            {   isTooltipVisible &&
                                <span>
                                    <span
                                        className={styles.skillButton}
                                        key={`${language.name}-technicalskills`}
                                        onClick={() => props.onSkillClick({name: language.name, usageYears: language.usageYears})}
                                    >
                                        <svg className={styles.skillIcons}
                                             style={language.whiteBackground ? {backgroundColor: "white", border: borderStyle} : {border: borderStyle}}
                                             data-tip
                                             data-for={language.name + 'skills'}
                                             viewBox="0 0 128 128" dangerouslySetInnerHTML={{__html: language.icon}}
                                             key={language.name}>
                                        </svg>
                                    </span>
                                    <ReactTooltip id={language.name + 'skills'} place="top" type="light" effect="solid" key={language.name + 'skills'}>
                                        <h4>{language.name}</h4>
                                    </ReactTooltip>
                                </span>
                            }
                    </span>
                    )
                })
            }
        </div>
    )
}