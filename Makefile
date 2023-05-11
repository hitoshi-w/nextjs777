.PHONY: build
build: ## Build the development docker image.
	docker compose build

.PHONY: up
up: ## Start the development docker container.
	docker compose up

.PHONY: down
down: ## Down the development docker container.
	docker compose down

.PHONY: app
app: ## Enter the development app container.
	docker compose exec app /bin/ash

.PHONY: postgres
postgres: ## Enter the development postgresql container.
	docker compose exec postgresql psql -U postgres

.PHONY: prisma-db-push
prisma-db-push: ## synchronize your prisma schema with your database schema.
	docker compose exec app npx prisma db push