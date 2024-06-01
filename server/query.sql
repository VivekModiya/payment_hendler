-- name: CreateUser :one
INSERT INTO
  payment_handler.tblm_users (user_id, "role", "name", parent_user_id)
VALUES
  ($1, $2, $3, $4) RETURNING user_id,
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

-- name: ListPaymentDetails :many
SELECT
  received_from,
  "date",
  sum_of_rupees,
  user_id,
  id
FROM
  payment_handler.tblm_payment_details pd
WHERE
  (
    received_from ILIKE '%' || $1 :: VARCHAR || '%'
    OR CAST(sum_of_rupees AS VARCHAR) ILIKE '%' || $1 :: VARCHAR || '%'
  )
  AND CASE
    WHEN $3 :: BOOLEAN = FALSE THEN pd.user_id = $2 :: VARCHAR
    ELSE (
      SELECT
        role
      FROM
        payment_handler.tblm_users us
      WHERE
        us.user_id = $2
    ) = 'admin'
    OR pd.user_id = $2
    OR (
      SELECT
        parent_user_id
      FROM
        payment_handler.tblm_users us
      WHERE
        us.user_id = pd.user_id
    ) = $2
  END;