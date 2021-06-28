package repositories

import (
	"github.com/jmoiron/sqlx"
	"log"
	"main/persistence/models"
	"sync"
)

type LanguageRepo struct {
	db *sqlx.DB
}

func InitLanguageRepo(db *sqlx.DB) *LanguageRepo {
	return &LanguageRepo{db: db}
}

func (repo *LanguageRepo) ListLanguagesWithYears() []models.Language {
	var languages []models.Language
	err := repo.db.Select(&languages, "SELECT * FROM languages ORDER BY name ASC")
	if err != nil {
		log.Fatalln(err)
		return nil
	}

	var wg sync.WaitGroup
	for i, _ := range languages {
		go repo.populateLanguagesWithYears(&wg, &languages[i])
		wg.Add(1)
	}
	wg.Wait()
	return languages
}

func (repo *LanguageRepo) populateLanguagesWithYears(wg *sync.WaitGroup, language *models.Language) {
	defer wg.Done()
	var languageUsage []models.LanguageUsage
	statement, err := repo.db.Preparex(`SELECT year FROM languages JOIN languageUsage WHERE name = ? AND language = name`)
	err = statement.Select(&languageUsage, language.Name)
	if err != nil {
		log.Fatalln(err)
		return
	}
	var years []int
	for _, usage := range languageUsage {
		years = append(years, usage.Years)
	}
	language.UsageYears = years
}
