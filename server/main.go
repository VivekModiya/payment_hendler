package main

import (
	"context"
	"flag"
	"log"
	"net/http"
	"os"
	"payment_handler/connection"

	_ "github.com/lib/pq"
)

var user = os.Getenv("DB_USER_NAME")
var password = os.Getenv("DB_PASSWORD")
var host = os.Getenv("DB_HOST")
var dbName = os.Getenv("DB_NAME")

var (
	addr                = flag.String("addr", ":8080", "Address to listen on")
	flagDBConnStr       = flag.String("db-conn-str", "postgres://"+user+":"+password+"@"+host+"/"+dbName+"?sslmode=require", "Postgres connection string")
	flagMaxDBConnection = flag.Int("max-db-connections", 10, "Connection pool size")
)

func main() {
	flag.Parse()
	s, err := connection.New(context.Background(), *flagDBConnStr, *flagMaxDBConnection)
	s.Routes()
	log.Printf("Starting server on %s", *addr)
	if err = http.ListenAndServe(*addr, nil); err != nil {
		log.Fatal(err)
	}
}
