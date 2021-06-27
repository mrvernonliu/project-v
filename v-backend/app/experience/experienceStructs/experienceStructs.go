package experienceStructs

import (
	"main/app/languages/languageStructs"
	"time"
)

type Experience struct {
	Name string `json:"name"`
	Title string `json:"title"`
	IconUrl string `json:"iconUrl"`
	StartDate time.Time `json:"startDate"`
	EndDate time.Time `json:"endDate"`
	TechStack []languageStructs.Language `json:"techStack"`
}
type ExperienceList struct {
	Experiences []Experience `json:"experiences"`
}
