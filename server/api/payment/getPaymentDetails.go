package payment

import (
	"net/http"
	"payment_handler/formatting"
	"strconv"

	"github.com/gorilla/mux"
)

func (p *Payment) GetPaymentDetails(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		formatting.WriteError(w, []string{"Method Not Allowed"}, http.StatusMethodNotAllowed)
		return
	}

	vars := mux.Vars(r)
	paymentId, err := strconv.Atoi(vars["id"])
	if err != nil {
		formatting.WriteError(w, []string{"Invalid payment detail Id"}, http.StatusNotFound)
	}

	res, err := p.DB.GetPaymentDetails(r.Context(), int32(paymentId))

	if err != nil {
		formatting.WriteError(w, []string{err.Error()}, http.StatusInternalServerError)
		return
	}

	var jsonResponse PaymentData

	jsonResponse.ID = res.ID
	jsonResponse.Date = res.Date
	jsonResponse.ReceivedFrom = res.ReceivedFrom
	jsonResponse.Pan = res.Pan
	jsonResponse.Address = res.Address
	jsonResponse.SumOfRupees = res.SumOfRupees

	formatting.WriteJSONResponse(w, &jsonResponse)
}
