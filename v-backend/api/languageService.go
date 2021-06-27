package api

import (
	"encoding/json"
	"log"
	"main/tempData"
	"net/http"
)

func (db *DBHandler) ListLanguages(w http.ResponseWriter, r *http.Request) {
	var languageList = tempData.GetHardcodedLanguages()
	json.NewEncoder(w).Encode(languageList)
	log.Println("Endpoint Hit: listLanguages")
}
