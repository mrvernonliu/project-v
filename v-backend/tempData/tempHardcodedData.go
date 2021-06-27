package tempData

import (
	"main/app/experience/experienceStructs"
	"main/app/languages/languageStructs"
	"time"
)

var tempHardcodedLanguageList = languageStructs.LanguageList{
	Languages: []languageStructs.Language {
		{
			Name:       "Java",
			IconUrl:    "placeholder",
			UsageYears: []int{2015, 2016, 2017, 2018, 2019, 2020, 2021},
		},
		{
			Name:       "JavaScript",
			IconUrl:    "placeholder",
			UsageYears: []int{2016, 2017, 2018, 2019, 2020, 2021},
		},
	},
}

var tempHardcodedExperienceList = experienceStructs.ExperienceList{
	Experiences: []experienceStructs.Experience {
		{
			Name:		"Electronic Arts",
			IconUrl:	"/ealogo.png",
			StartDate: 	time.Date(2020, time.September, 0, 0,0, 0, 0, time.UTC),
			EndDate: time.Now(),
			TechStack: []languageStructs.Language {
				{
					Name:	"JavaScript",
					IconUrl: "placeholder",
				},
				{
					Name:	"Java",
					IconUrl: "placeholder",
				},
			},
		},
		{
			Name:		"Best Buy Canada",
			IconUrl:	"/bestbuylogo.jpg",
			StartDate: 	time.Date(2019, time.April, 0, 0,0, 0, 0, time.UTC),
			EndDate: time.Date(2019, time.September, 0, 0,0, 0, 0, time.UTC),
			TechStack: []languageStructs.Language {
				{
					Name:	"JavaScript",
					IconUrl: "placeholder",
				},
				{
					Name:	"Java",
					IconUrl: "placeholder",
				},
			},
		},
		{
			Name:		"CA Technologies / Broadcom",
			IconUrl:	"/calogo.jpg",
			StartDate: 	time.Date(2018, time.September, 0, 0,0, 0, 0, time.UTC),
			EndDate: time.Date(2019, time.April, 0, 0,0, 0, 0, time.UTC),
			TechStack: []languageStructs.Language {
				{
					Name:	"JavaScript",
					IconUrl: "placeholder",
				},
				{
					Name:	"Java",
					IconUrl: "placeholder",
				},
			},
		},
		{
			Name:		"Ocean Networks Canada",
			IconUrl:	"/onclogo.png",
			StartDate: 	time.Date(2018, time.January, 0, 0,0, 0, 0, time.UTC),
			EndDate: time.Date(2018, time.April, 0, 0,0, 0, 0, time.UTC),
			TechStack: []languageStructs.Language {
				{
					Name:	"JavaScript",
					IconUrl: "placeholder",
				},
				{
					Name:	"Java",
					IconUrl: "placeholder",
				},
			},
		},
	},
}

func GetHardcodedLanguages() languageStructs.LanguageList {
	return tempHardcodedLanguageList
}

func GetHardcodedExperiences() experienceStructs.ExperienceList {
	return tempHardcodedExperienceList
}