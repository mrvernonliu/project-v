package languages

import (
	"encoding/json"
	"log"
	"main/tempData"
	"net/http"
)

func ListLanguages(w http.ResponseWriter, r *http.Request) {
	var languageList = tempData.GetHardcodedLanguages()
	json.NewEncoder(w).Encode(languageList)
	log.Println("Endpoint Hit: listLanguages")
}
