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
    sum_of_rupees,
    user_id
  )
VALUES
  (
    $1 :: BIGINT,
    $2 :: VARCHAR,
    $3 :: VARCHAR,
    $4 :: TEXT,
    $5 :: BIGINT,
    $6 :: VARCHAR
  ) RETURNING DATE,
  received_from,
  pan,
  address,
  sum_of_rupees,
  id,
  user_id;

-- name: GetPaymentDetails :one
SELECT
  id,
  "date",
  received_from,
  pan,
  address,
  sum_of_rupees
FROM
  payment_handler.tblm_payment_details
WHERE
  id = $1 :: INTEGER;