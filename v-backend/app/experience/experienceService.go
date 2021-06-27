package experience

import (
	"encoding/json"
	"log"
	"main/tempData"
	"net/http"
)

func ListExperience(w http.ResponseWriter, r *http.Request) {
	experienceList := tempData.GetHardcodedExperiences()
	json.NewEncoder(w).Encode(experienceList)
	log.Println("Endpoint Hit: listExperiences")
}
