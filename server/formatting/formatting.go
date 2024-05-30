package formatting

import (
	"encoding/json"
	"net/http"
)

type ErrorObjType struct {
	Error string `json:"error"`
}

type HttpResponse struct {
	Success      bool            `json:"success"`
	Data         interface{}     `json:"data,omitempty"`
	ErrorObjects []ErrorObjType  `json:"errorObjects,omitempty"`
	Errors       json.RawMessage `json:"errors,omitempty"`
}

type SuccessResponse struct {
	RequestID int32 `json:"request_id"`
}

func WriteError(w http.ResponseWriter, errors []string, statusCode int) {
	w.Header().Add("content-type", "application/json")
	w.WriteHeader(statusCode)
	errorsObject := []ErrorObjType{}
	for _, error := range errors {
		errorObj := ErrorObjType{
			Error: error,
		}
		errorsObject = append(errorsObject, errorObj)
	}
	json.NewEncoder(w).Encode(&HttpResponse{ErrorObjects: errorsObject, Success: false})
}

func WriteJSONResponse(w http.ResponseWriter, message interface{}) {
	w.Header().Add("content-type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(&HttpResponse{Data: message, Success: true})
}
