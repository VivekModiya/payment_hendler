-- name: CreateUser :one
INSERT INTO
  payment_handler.tblm_users (user_id, "role", "name")
VALUES
  ($1, $2, $3) RETURNING user_id,
  "name",
  "role";