package api

import (
	"encoding/json"
	"log"
	"net/http"
)

func (db *DBHandler) ListLanguages(w http.ResponseWriter, r *http.Request) {
	var languageList = db.Repos.LanguageRepo.ListLanguagesWithYears()
	json.NewEncoder(w).Encode(languageList)
	log.Println("Endpoint Hit: listLanguages")
}
