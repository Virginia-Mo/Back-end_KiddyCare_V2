BEGIN;

DROP TABLE IF EXISTS "user", "newsletterRequest","message","classbooking","article","tag";

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
    "class" INTEGER,
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);
CREATE TABLE IF NOT EXISTS "tag" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

CREATE TABLE IF NOT EXISTS "article" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "maintitle" TEXT NOT NULL,
    "main_img" TEXT NOT NULL,
    "introduction" TEXT NOT NULL,
    "title1" TEXT NOT NULL,
    "img1" TEXT NOT NULL,
    "description1" TEXT NOT NULL,
    "title2" TEXT NOT NULL,
    "img2" TEXT NOT NULL,
    "description2" TEXT NOT NULL,
    "author_img" TEXT NOT NULL,
    "authorname" TEXT NOT NULL,
    "authorjob" TEXT NOT NULL,
    "tag_id" INTEGER NOT NULL REFERENCES "tag"("id"),
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);
CREATE TABLE IF NOT EXISTS "comment" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL UNIQUE,
    "message" TEXT,
    "article_id" INTEGER NOT NULL REFERENCES "article"("id"),
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamptz
);

COMMIT;