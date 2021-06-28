package persistence

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"main/persistence/repositories"
	"os"
)

type DBRepos struct {
	ExperienceRepo 	*repositories.ExperienceRepo
	LanguageRepo 	*repositories.LanguageRepo
}

func initDBRepos(db *sqlx.DB) *DBRepos {
	return &DBRepos{
		ExperienceRepo: repositories.InitExperienceRepo(db),
		LanguageRepo: repositories.InitLanguageRepo(db),
	}
}

func InitDB() *DBRepos {
	db, err := sqlx.Open("mysql", "root:@tcp(127.0.0.1:3306)/projectV")
	if err != nil {
		panic(err.Error())
		os.Exit(-1)
	}
	dbRepos := initDBRepos(db)
	return dbRepos
}