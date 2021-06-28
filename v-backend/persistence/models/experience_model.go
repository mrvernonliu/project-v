package models

type Experience struct {
	Name string `json:"name" db:"name"`
	Title string `json:"title" db:"title"`
	IconUrl string `json:"iconUrl" db:"iconUrl"`
	StartDate string `json:"startDate" db:"startDate"'`
	EndDate *string `json:"endDate" db:"endDate"`
	TechStack []LanguageTechStack `json:"techStack"`
}
