CREATE DATABASE helloworlddb;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS log (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  accessed_at BIGINT NOT NULL
);