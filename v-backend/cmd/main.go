package main

import (
	"log"
	"main/api"
	"main/persistence"
	"net/http"
)

func main() {
	dbHandler := persistence.InitDB()
	//dbHandler.ExperienceRepo.ListExperiences()
	router := api.CreateRoutes(dbHandler)
	log.Println("Starting server on port 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}