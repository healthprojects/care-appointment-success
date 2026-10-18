-- The container's POSTGRES_DB creates the development database.
-- Loco's test config uses a separate database.
CREATE DATABASE "care-appointment-service_test";

-- Keycloak keeps its state in its own database.
CREATE DATABASE keycloak;
