package api

import (
	"encoding/json"
	"log"
	"net/http"
)

func (db *DBHandler) ListExperience(w http.ResponseWriter, r *http.Request) {
	experienceList := db.Repos.ExperienceRepo.ListExperiences()
	json.NewEncoder(w).Encode(experienceList)
	log.Println("Endpoint Hit: listExperiences")
}
