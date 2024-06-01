package payment

import (
	"net/http"
	"payment_handler/db/_db"
	"payment_handler/formatting"
)

func (p *Payment) ListPaymentDetails(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		formatting.WriteError(w, []string{"Method Not Allowed"}, http.StatusMethodNotAllowed)
		return
	}

	params := r.URL.Query()

	searchField := params.Get("searchField")

	var userId = ""
	userId = params.Get("userId")
	if userId == "" {
		formatting.WriteError(w, []string{"In valid user Id"}, http.StatusInternalServerError)
		return
	}

	var allSelectedParam = params.Get("allSelected")
	var allSelected = false
	if allSelectedParam == "1" {
		allSelected = true
	}

	res, err := p.DB.ListPaymentDetails(r.Context(), _db.ListPaymentDetailsParams{Column1: searchField, Column2: userId, Column3: allSelected})

	if err != nil {
		formatting.WriteError(w, []string{err.Error()}, http.StatusInternalServerError)
		return
	}

	var jsonResponse []PaymentData

	for _, item := range res {
		listItem := PaymentData{
			ID:           item.ID.Int32,
			UserID:       item.UserID.String,
			ReceivedFrom: item.ReceivedFrom,
			Date:         item.Date,
			SumOfRupees:  item.SumOfRupees,
		}
		jsonResponse = append(jsonResponse, listItem)
	}

	formatting.WriteJSONResponse(w, &jsonResponse)
}
