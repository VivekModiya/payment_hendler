package user

import (
	"encoding/json"

	"payment_handler/db"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
)

type User struct {
	DB       *db.DB
	Validate *validator.Validate
	Router   *mux.Router
}

type HttpResponse struct {
	Success bool            `json:"success"`
	Result  interface{}     `json:"result,omitempty"`
	Error   string          `json:"error,omitempty"`
	Errors  json.RawMessage `json:"errors,omitempty"`
}

// Applicant subrouter having prefix-route of /api/v3/recruitment/applicants
func (a *User) Routes() {
	a.Router.HandleFunc("/add", a.CreateUser)
	a.Router.HandleFunc("/login", a.LoginUser)
}
