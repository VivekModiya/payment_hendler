package payment

import (
	"net/http"
	"payment_handler/formatting"
)

func (p *Payment) ListPaymentDetails(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		formatting.WriteError(w, []string{"Method Not Allowed"}, http.StatusMethodNotAllowed)
		return
	}

	params := r.URL.Query()

	searchField := params.Get("searchField")

	res, err := p.DB.ListPaymentDetails(r.Context(), searchField)

	if err != nil {
		formatting.WriteError(w, []string{err.Error()}, http.StatusInternalServerError)
		return
	}

	var jsonResponse []PaymentData

	for _, item := range res {
		listItem := PaymentData{
			ID:           item.ID.Int32,
			ReceivedFrom: item.ReceivedFrom,
			Date:         item.Date,
			SumOfRupees:  item.SumOfRupees,
		}
		jsonResponse = append(jsonResponse, listItem)
	}

	formatting.WriteJSONResponse(w, &jsonResponse)
}
