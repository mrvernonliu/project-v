package models

type Language struct {
	Name string `json:"name" db:"name"'`
	Icon string `json:"icon" db:"icon"`
	WhiteBackground int `json:"whiteBackground" db:"whiteBackground"`
	UsageYears []int `json:"usageYears"`
}

type LanguageTechStack struct {
	Language string `json:"language" db:"language"`
	WhiteBackground int `json:"whiteBackground" db:"whiteBackground"`
	Icon string `json:"icon" db:"icon"`
}

type LanguageUsage struct {
	Language string `json:"language" db:"language"`
	Years int `json:"year" db:"year"`
}