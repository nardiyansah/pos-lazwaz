PRISMA := npx prisma

# Databases
migrate:
	@echo "Running migrations..."
	$(PRISMA) migrate dev --name init
