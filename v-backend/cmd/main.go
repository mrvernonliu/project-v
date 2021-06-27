package main

import (
	"log"
	"main/api"
	"net/http"
)

func main() {
	router := api.CreateRoutes()
	log.Println("Starting server on port 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}