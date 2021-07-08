import {Language} from "./types/Language";
import {pastelColors} from "./PastelColors";
import {SelectedLanguage} from "./types/SelectedLanguage";

export function getBorderColour(language: Language, selectedLanguages: SelectedLanguage[]) {
    let colourIndex = -1
    selectedLanguages.forEach((selectedLanguage, i) => {
        if (selectedLanguage.name === language.name) {
            colourIndex = i;
        }
    })
    return colourIndex !== -1 ? `3px solid ${pastelColors[colourIndex]}` : ""
}

export function alphabeticalSort (languages: Language[]): Language[] {
    languages.sort((lang1, lang2) => {
        return lang1.name.toLowerCase().localeCompare(lang2.name.toLowerCase());
    })
    return languages
}

export function usageSort(languages: Language[]): Language[] {
    languages.sort((lang1, lang2) => {
        return lang2.usageYears.length - lang1.usageYears.length
    })
    return languages
}