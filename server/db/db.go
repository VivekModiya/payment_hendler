package db

import (
	"database/sql"

	"payment_handler/db/_db"

	_ "github.com/lib/pq"
)

type DB struct {
	db *sql.DB
	*_db.Queries
}

// we will test new  connection and return the db object
func New(connStr string, maxConnectionPool int) (*DB, error) {
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}
	db.SetMaxOpenConns(maxConnectionPool)

	// err = db.Ping()
	// if err != nil {
	// 	return nil, err
	// }
	queries := _db.New(db)
	return &DB{db: db, Queries: queries}, nil
}
