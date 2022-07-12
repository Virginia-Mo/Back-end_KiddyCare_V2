BEGIN;

DROP TABLE IF EXISTS "user", "newsletterRequest","message","classbooking","article";

CREATE TABLE IF NOT EXISTS "user" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);
CREATE TABLE IF NOT EXISTS "newsletterRequest" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL UNIQUE,
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);
CREATE TABLE IF NOT EXISTS "message" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL UNIQUE,
    "subject" TEXT,
    "message" TEXT,
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);
CREATE TABLE IF NOT EXISTS "classbooking" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL UNIQUE,
    "class" TEXT,
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "article" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "mainImg" BYTEA,
    "introduction" TEXT,
    "title1" TEXT,
    "img1" BYTEA,
    "description1" TEXT,
    "title2" TEXT,
    "img2" BYTEA,
    "description2" TEXT,
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

COMMIT;