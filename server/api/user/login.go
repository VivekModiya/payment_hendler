package user

import (
	"encoding/json"
	"net/http"
	"payment_handler/formatting"
)

type LoginData struct {
	UserID string `json:"userId" validate:"required"`
}

func (u *User) LoginUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		formatting.WriteError(w, []string{"Method Not Allowed"}, http.StatusMethodNotAllowed)
		return
	}

	var loginData LoginData

	err := json.NewDecoder(r.Body).Decode(&loginData)
	if err != nil {
		formatting.WriteError(w, []string{"Error while deconding the request body", err.Error()}, http.StatusInternalServerError)
		return
	}

	// Validation
	err = u.Validate.Struct(loginData)
	if err != nil {
		formatting.WriteError(w, []string{err.Error()}, http.StatusInternalServerError)
		return
	}

	res, err := u.DB.LoginUser(r.Context(), loginData.UserID)

	if err != nil {
		formatting.WriteError(w, []string{err.Error()}, http.StatusInternalServerError)
		return
	}

	var jsonResponse UserData

	jsonResponse.Role = res.Role
	jsonResponse.UserID = res.UserID

	formatting.WriteJSONResponse(w, &jsonResponse)
}
