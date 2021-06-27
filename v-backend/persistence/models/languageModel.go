package models

type Language struct {
	Name string `json:"name"`
	IconUrl string `json:"iconUrl"`
	UsageYears []int `json:"usageYears"`
}

type LanguageTechStack struct {
	Language string `json:"language" db:"language"`
	Icon string `json:"icon" db:"icon"`
}