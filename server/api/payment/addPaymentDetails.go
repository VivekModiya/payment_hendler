package payment

import (
	"encoding/json"
	"net/http"
	"payment_handler/db/_db"
	"payment_handler/formatting"
	"strconv"
)

type PaymentData struct {
	Date         int64  `json:"date,omitempty" validate:"required"`
	ReceivedFrom string `json:"receiveFrom,omitempty" validate:"required"`
	Pan          string `json:"pan,omitempty" validate:"required"`
	Address      string `json:"address,omitempty" validate:"required"`
	SumOfRupees  string `json:"sumOfRupees,omitempty" validate:"required"`
	ID           int32  `json:"paymentDetailId,omitempty"`
	UserID       string `json:"userId,omitempty" validate:"required"`
	TransferNo   string `json:"transferNo,omitempty" validate:"required"`
	DrawnOn      string `json:"drawnOn,omitempty" validate:"required"`
}

func (p *Payment) AddPaymentDetails(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		formatting.WriteError(w, []string{"Method Not Allowed"}, http.StatusMethodNotAllowed)
		return
	}

	var payment PaymentData

	err := json.NewDecoder(r.Body).Decode(&payment)
	if err != nil {
		formatting.WriteError(w, []string{"Error while deconding the request body", err.Error()}, http.StatusInternalServerError)
		return
	}

	// Validation
	err = p.Validate.Struct(payment)
	if err != nil {
		formatting.WriteError(w, []string{err.Error()}, http.StatusInternalServerError)
		return
	}

	rupees, err := strconv.Atoi(payment.SumOfRupees)

	if err != nil {
		formatting.WriteError(w, []string{"In valid sum of rupees values"}, http.StatusUnprocessableEntity)
		return
	}

	res, err := p.DB.AddPaymentDetails(r.Context(), _db.AddPaymentDetailsParams{Column1: payment.Date, Column2: payment.ReceivedFrom, Column3: payment.Pan, Column4: payment.Address, Column5: int64(rupees), Column6: payment.UserID, Column7: payment.TransferNo, Column8: payment.DrawnOn})

	if err != nil {
		formatting.WriteError(w, []string{err.Error()}, http.StatusInternalServerError)
		return
	}

	var jsonResponse PaymentData

	jsonResponse.Date = res.Date
	jsonResponse.ReceivedFrom = res.ReceivedFrom
	jsonResponse.Pan = res.Pan
	jsonResponse.Address = res.Address
	jsonResponse.SumOfRupees = res.SumOfRupees
	jsonResponse.ID = res.ID
	jsonResponse.UserID = res.UserID
	jsonResponse.TransferNo = res.CashChequeTransferNo
	jsonResponse.DrawnOn = res.DrawnOn

	formatting.WriteJSONResponse(w, &jsonResponse)
}
