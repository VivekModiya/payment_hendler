CREATE SCHEMA payment_handler;

CREATE TABLE payment_handler.tblm_users (
    id SERIAL UNIQUE,
    user_id VARCHAR(255) PRIMARY KEY,
    NAME VARCHAR(20) NOT NULL,
    role VARCHAR(10) NOT NULL CHECK (role IN ('admin', 'client', 'end_user')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payment_handler.tblm_payment_details (
    id SERIAL UNIQUE,
    "date" BIGINT NOT NULL,
    received_from VARCHAR(255) NOT NULL,
    pan VARCHAR(10) NOT NULL,
    address TEXT NOT NULL,
    sum_of_rupees NUMERIC(15, 2) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE,
    is_active BOOLEAN DEFAULT TRUE,
    user_id VARCHAR(255) REFERENCES payment_handler.tblm_users(user_id)
);