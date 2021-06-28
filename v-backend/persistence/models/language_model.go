package models

type Language struct {
	Name string `json:"name" db:"name"'`
	Icon string `json:"icon" db:"icon"`
	UsageYears []int `json:"usageYears"`
}

type LanguageTechStack struct {
	Language string `json:"language" db:"language"`
	Icon string `json:"icon" db:"icon"`
}

type LanguageUsage struct {
	Language string `json:"language" db:"language"`
	Years int `json:"year" db:"year"`
}