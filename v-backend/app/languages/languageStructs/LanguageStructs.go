package languageStructs

type Language struct {
	Name string `json:"name"`
	IconUrl string `json:"iconUrl"`
	UsageYears []int `json:"usageYears"`
}
type LanguageList struct {
	Languages []Language `json:"languages"`
}
