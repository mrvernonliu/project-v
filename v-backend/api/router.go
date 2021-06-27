package api

import (
	"github.com/gorilla/mux"
	"log"
	"main/app/experience"
	"main/app/languages"
	"net/http"
)

type fn func(http.ResponseWriter, *http.Request)

func CreateRoutes() http.Handler {
	router := mux.NewRouter().StrictSlash(true)
	registerEndpoint(router, "/languages", "GET", languages.ListLanguages)
	registerEndpoint(router, "/experiences", "GET", experience.ListExperience)


	return router
}

func registerEndpoint(router *mux.Router, path string, method string, service fn) {
	log.Printf("Registering %s - %s\n", method, path)
	router.HandleFunc(path, service).Methods(method)
}
