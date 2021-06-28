package tempData

import (
	"main/persistence/models"
)

var tempHardcodedLanguageList = []models.Language{
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
}


func GetHardcodedLanguages() []models.Language {
	return tempHardcodedLanguageList
}
