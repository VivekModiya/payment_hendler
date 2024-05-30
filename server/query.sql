-- name: CreateUser :one
INSERT INTO
  payment_handler.tblm_users (user_id, "role", "name")
VALUES
  ($1, $2, $3) RETURNING user_id,
  "name",
  "role";

-- name: AddPaymentDetails :one
INSERT INTO
  payment_handler.tblm_payment_details (
    "date",
    received_from,
    pan,
    address,
    sum_of_rupees
  )
VALUES
  (
    $1 :: BIGINT,
    $2 :: VARCHAR,
    $3 :: VARCHAR,
    $4 :: TEXT,
    $5 :: BIGINT
  ) RETURNING DATE,
  received_from,
  pan,
  address,
  sum_of_rupees,
  id;