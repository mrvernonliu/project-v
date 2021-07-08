package repositories

import (
	"github.com/jmoiron/sqlx"
	"log"
	"main/persistence/models"
	"sync"
)

type ProjectRepo struct {
	db *sqlx.DB
}

func InitProjectRepo(db *sqlx.DB) *ProjectRepo {
	return &ProjectRepo{db: db}
}

func (repo *ProjectRepo) ListProjects() []models.Projects {
	var experiences []models.Projects
	err := repo.db.Select(&experiences, "SELECT * FROM projects ORDER BY id ASC")
	if err != nil {
		log.Fatalln(err)
		return nil
	}

	//var wg sync.WaitGroup
	//for i, _ := range experiences {
	//	go repo.populateProjectTechStack(&wg, &experiences[i])
	//	wg.Add(1)
	//}
	//wg.Wait()
	return experiences
}

func (repo *ProjectRepo) populateProjectTechStack(wg *sync.WaitGroup, projects *models.Projects) {
	defer wg.Done()
	var techstack []models.LanguageTechStack
	statement, err := repo.db.Preparex(`SELECT language, whiteBackground, icon FROM projectTechStack JOIN languages WHERE id = ? AND language = name`)
	err = statement.Select(&techstack, projects.Id)
	if err != nil {
		log.Fatalln(err)
		projects.TechStack = nil
		return
	}
	projects.TechStack = techstack
}