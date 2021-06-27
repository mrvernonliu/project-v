package api

import (
	"github.com/gorilla/mux"
	"log"
	"main/persistence"
	"net/http"
)

type fn func(http.ResponseWriter, *http.Request)

type DBHandler struct {
	Repos *persistence.DBRepos
}

func CreateRoutes(repos *persistence.DBRepos) http.Handler {
	handler := DBHandler{Repos: repos}
	router := mux.NewRouter().StrictSlash(true)
	registerEndpoint(router, "/languages", "GET", handler.ListLanguages)
	registerEndpoint(router, "/experiences", "GET", handler.ListExperience)


	return router
}

func registerEndpoint(router *mux.Router, path string, method string, service fn) {
	log.Printf("Registering %s - %s\n", method, path)
	router.HandleFunc(path, service).Methods(method)
}
