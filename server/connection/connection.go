package connection

import (
	"context"

	"payment_handler/api/user"
	"payment_handler/db"
	"payment_handler/middleware"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
)

func New(ctx context.Context, connstr string, maxDBConn int) (*Server, error) {
	dbInst, err := db.New(connstr, maxDBConn)
	if err != nil {
		return nil, err
	}

	routerInst := mux.NewRouter()
	routerInst.Use(middleware.CorsMiddleware)

	validatorInst := validator.New()

	userInstance := &user.User{
		DB:       dbInst,
		Validate: validatorInst,
	}

	return &Server{
		router:   routerInst,
		db:       dbInst,
		validate: validatorInst,
		user:     userInstance,
	}, nil
}
