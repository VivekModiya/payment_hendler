CREATE SCHEMA payment_handler;

CREATE TABLE payment_handler.tblm_users (
    id int4 NOT NULL DEFAULT NEXTVAL('payment_handler.tblt_users_id_seq' :: regclass),
    user_id VARCHAR(255) NOT NULL,
    "role" VARCHAR(10) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(20) NOT NULL,
    parent_user_id VARCHAR NOT NULL,
    CONSTRAINT tblt_users_id_key UNIQUE (id),
    CONSTRAINT tblt_users_pkey PRIMARY KEY (user_id),
    CONSTRAINT tblt_users_role_check CHECK (
        (
            (role) :: text = ANY (
                (
                    ARRAY [ 'admin' :: CHARACTER VARYING,
                    'client' :: CHARACTER VARYING,
                    'endUser' :: CHARACTER VARYING ]
                ) :: text [ ]
            )
        )
    )
);

CREATE TABLE payment_handler.tblm_payment_details (
    "date" int8 NOT NULL,
    received_from VARCHAR(255) NOT NULL,
    pan VARCHAR(10) NOT NULL,
    address text NOT NULL,
    sum_of_rupees numeric(15, 2) NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
    is_active bool NOT NULL DEFAULT TRUE,
    id serial4 NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    cash_cheque_transfer_no VARCHAR(255) NOT NULL,
    drawn_on VARCHAR(255) NOT NULL,
    CONSTRAINT tblm_payment_details_pkey PRIMARY KEY (id),
    CONSTRAINT tblm_payment_details_user_id_fkey FOREIGN KEY (user_id) REFERENCES payment_handler.tblm_users(user_id)
);

CREATE TABLE payment_handler.parent_user (
    id serial4 NOT NULL,
    user_id VARCHAR NOT NULL,
    parent_user_id VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT parent_user_fk_user FOREIGN KEY (user_id) REFERENCES payment_handler.tblm_users(user_id),
    CONSTRAINT parent_user_fk_parent FOREIGN KEY (parent_user_id) REFERENCES payment_handler.tblm_users(user_id)
);