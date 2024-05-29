package connection

import (
	"encoding/json"
	"net/http"

	"payment_handler/db"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
)

type Server struct {
	db       *db.DB
	validate *validator.Validate
	router   *mux.Router
}

type HttpResponse struct {
	Success bool            `json:"success"`
	Result  interface{}     `json:"result,omitempty"`
	Error   string          `json:"error,omitempty"`
	Errors  json.RawMessage `json:"errors,omitempty"`
}

func (s *Server) Routes() {
	s.router.HandleFunc("/echo", s.healthCheckHandler)
	s.router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) { w.Write([]byte("Hellow")) })
	http.Handle("/", s.router)
}
