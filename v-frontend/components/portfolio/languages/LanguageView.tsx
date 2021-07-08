import * as React from 'react'
import {Language} from "./types/Language";
import styles from "../../../styles/LanguageView.module.scss"
import {useEffect, useState} from "react";
import {SelectedLanguage} from "./types/SelectedLanguage";
import UsageYearsChart from "./UsageYearsChart";
import {pastelColors} from "./PastelColors";
import {alphabeticalSort, getBorderColour, usageSort} from "./LanguageUtils";
import ListMode from "./groupings/ListMode";
import {SearchTextInput} from "../../common/SearchTextInput";
import {UsageMode} from "./groupings/UsageMode";

interface LanguageViewProps {
    languages: Language[]
}

interface BorderStyles {
    border: string,
}

enum SORT_TYPE {
    unordered, alphabetical, usage
}

export default function LanguageView(props: LanguageViewProps) {
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguage[]>([])
    const [sortType, setSortType] = useState(SORT_TYPE.alphabetical)
    const [sortedLanguages, setSortedLanguages] = useState<Language[]>(props.languages)
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        switch (sortType) {
            case SORT_TYPE.alphabetical:
                setSortedLanguages([...alphabeticalSort(props.languages)]);
                return;
            case SORT_TYPE.usage:
                setSortedLanguages([...usageSort(props.languages)]);
                return
            default:
                setSortedLanguages([...props.languages])
                return;
        }
    }, [sortType])

    useEffect(() => {
        setSortedLanguages(props.languages.filter((language) => language.name.toLowerCase().includes(searchText.toLowerCase())))
    }, [searchText])

    const onSkillClick = (selectedLanguage: SelectedLanguage) => {
        if (selectedLanguages.filter((language) => language.name === selectedLanguage.name).length !== 0) {
            setSelectedLanguages(selectedLanguages.filter((language) => language.name !== selectedLanguage.name))
        } else {
            setSelectedLanguages(selected => [...selected, selectedLanguage])
        }
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         setSearchText(e.target.value)
    }

    const setSortTypeHandler = (input: SORT_TYPE) => {
        setSortType(input)
    }

    let listType
    if (sortType === 0 || sortType === 1) {
        listType = <ListMode sortedLanguages={sortedLanguages} selectedLanguages={selectedLanguages} onSkillClick={onSkillClick} />
    } else {
        listType = <UsageMode sortedLanguages={sortedLanguages} selectedLanguages={selectedLanguages} onSkillClick={onSkillClick} />
    }

    return (
        <div>
            <h1>Technical Skills</h1>
            <p>Here is a more comprehensive of the technologies that I have worked with.</p>
            <div className={styles.skillsContainer}>
                <div className={styles.searchAndOrderBy}>
                    <SearchTextInput  onChange={handleSearchChange}/>
                    <div className={styles.orderBy}>
                        <span className={styles.sortMessage}>Sort By:</span>
                        <span
                            className={`${styles.selection} ${sortType === SORT_TYPE.alphabetical ? styles.selected : ''}`}
                            onClick={() => { setSortTypeHandler(SORT_TYPE.alphabetical) }}
                        >
                        Alphabetical
                    </span>
                        <span
                            className={`${styles.selection} ${sortType === SORT_TYPE.usage ? styles.selected : ''}`}
                            onClick={() => { setSortTypeHandler(SORT_TYPE.usage) }}
                        >
                        Usage
                    </span>
                    </div>
                </div>
                { listType }
                <UsageYearsChart selectedLanguages={selectedLanguages} />
            </div>
        </div>
    )
}