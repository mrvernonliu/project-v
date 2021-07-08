package api

import (
"encoding/json"
"log"
"net/http"
)

func (db *DBHandler) ListProjects(w http.ResponseWriter, r *http.Request) {
	experienceList := db.Repos.ProjectRepo.ListProjects()
	json.NewEncoder(w).Encode(experienceList)
	log.Println("Endpoint Hit: listExperiences")
}
