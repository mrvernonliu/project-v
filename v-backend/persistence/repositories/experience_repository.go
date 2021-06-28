package repositories

import (
	"github.com/jmoiron/sqlx"
	"log"
	"main/persistence/models"
	"sync"
)

type ExperienceRepo struct {
	db *sqlx.DB
}

func InitExperienceRepo(db *sqlx.DB) *ExperienceRepo {
	return &ExperienceRepo{db: db}
}

func (repo *ExperienceRepo) ListExperiences() []models.Experience {
	var experiences []models.Experience
	err := repo.db.Select(&experiences, "SELECT * FROM workExperience ORDER BY startDate DESC")
	if err != nil {
		log.Fatalln(err)
		return nil
	}

	var wg sync.WaitGroup
	for i, _ := range experiences {
		go repo.populateExperienceTechStack(&wg, &experiences[i])
		wg.Add(1)
	}
	wg.Wait()
	return experiences
}

func (repo *ExperienceRepo) populateExperienceTechStack(wg *sync.WaitGroup, experience *models.Experience) {
	defer wg.Done()
	var techstack []models.LanguageTechStack
	statement, err := repo.db.Preparex(`SELECT language, icon FROM techstack JOIN languages WHERE company = ? AND language = name`)
	err = statement.Select(&techstack, experience.Name)
	if err != nil {
		log.Fatalln(err)
		experience.TechStack = nil
		return
	}
	experience.TechStack = techstack
}