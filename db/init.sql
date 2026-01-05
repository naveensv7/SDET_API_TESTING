CREATE TABLE
    IF NOT EXISTS users (
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS tokens (
        atoken VARCHAR(500) NOT NULL UNIQUE,
        rtoken VARCHAR(500) NOT NULL UNIQUE,
        username VARCHAR(50) NOT NULL
    )