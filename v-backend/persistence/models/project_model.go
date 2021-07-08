package models

type Projects struct {
	Id int `json:"id" db:"id"`
	Name string `json:"name" db:"name"`
	Description string `json:"description" db:"description"`
	TechStack []LanguageTechStack `json:"techStack"`
}
