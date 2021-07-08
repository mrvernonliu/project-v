
import style from "../../../../styles/UsageMode.module.scss"
import {Language} from "../types/Language";
import {SelectedLanguage} from "../types/SelectedLanguage";
import ListMode from "./ListMode";

interface UsageModeProps {
    sortedLanguages: Language[],
    selectedLanguages: SelectedLanguage[],
    onSkillClick: Function
}

export function UsageMode(props: UsageModeProps) {
    const frequentlyUsed = props.sortedLanguages.filter((language) => language.usageYears.length > 3)
    const sometimesUsed  = props.sortedLanguages.filter((language) => language.usageYears.length <= 3 && language.usageYears.length >= 2)
    const rarelyUsed = props.sortedLanguages.filter((language) => language.usageYears.length < 2)

    return (
        <div>
            <div className={style.skillContainer}>
                <h3 className={style.experienceHeading}>I have used these the most:</h3>
                <ListMode sortedLanguages={frequentlyUsed} selectedLanguages={props.selectedLanguages} onSkillClick={props.onSkillClick} />
            </div>
            <div className={style.skillContainer}>
                <h3>I have used these a few times:</h3>
                <ListMode sortedLanguages={sometimesUsed} selectedLanguages={props.selectedLanguages} onSkillClick={props.onSkillClick} />
            </div>
            <div className={style.skillContainer}>
                <h3>I have some exposure to these:</h3>
                <ListMode sortedLanguages={rarelyUsed} selectedLanguages={props.selectedLanguages} onSkillClick={props.onSkillClick} />
            </div>
        </div>
    )
}