package user

import (
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"net/http"
	"payment_handler/db/_db"
	"payment_handler/formatting"
	"time"
)

func generateUniqueEpochSHA(data string) string {
	// Get the current time in nanoseconds since epoch
	currentTimeNano := time.Now().UnixNano()

	// Combine the current time and the input data
	combinedData := fmt.Sprintf("%d-%s", currentTimeNano, data)

	// Create a new SHA256 hash
	hash := sha256.New()

	// Add combined data to hash
	hash.Write([]byte(combinedData))

	// Get the hashed bytes
	hashedBytes := hash.Sum(nil)

	// Convert hashed bytes to a hexadecimal string
	sha := hex.EncodeToString(hashedBytes)

	return sha
}

type UserData struct {
	Name   string `json:"name" validate:"required"`
	Role   string `json:"role" validate:"oneof=client end_user"`
	UserId string `json:"user_id"`
}

func (u *User) CreateUser(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		formatting.WriteError(w, []string{"Method Not Allowed"}, http.StatusMethodNotAllowed)
		return
	}

	var user UserData

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		formatting.WriteError(w, []string{"Error while deconding the request body", err.Error()}, http.StatusInternalServerError)
		return
	}

	// Validation
	err = u.Validate.Struct(user)
	if err != nil {
		formatting.WriteError(w, []string{err.Error()}, http.StatusInternalServerError)
		return
	}

	var uniqueSHA = generateUniqueEpochSHA(user.Name)

	res, err := u.DB.CreateUser(r.Context(), _db.CreateUserParams{UserID: uniqueSHA, Role: user.Role, Name: user.Name})

	if err != nil {
		formatting.WriteError(w, []string{err.Error()}, http.StatusInternalServerError)
		return
	}

	var jsonResponse UserData

	jsonResponse.Name = res.Name
	jsonResponse.Role = res.Role
	jsonResponse.UserId = res.UserID

	formatting.WriteJSONResponse(w, &jsonResponse)
}
