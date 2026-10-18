# belajar-vibe-coding

Backend starter project using Bun, ElysiaJS, Drizzle ORM, and MySQL.

## Requirements

```bash
bun --version
```

Use a MySQL server and create the database configured by `MYSQL_DATABASE`.

## Setup

```bash
bun install
cp .env.example .env
```

Update `.env` with the connection details for your local MySQL server. Do not commit credentials.

## Database

Generate migrations after changing the schema, then apply them:

```bash
bun run db:generate
bun run db:migrate
```

The initial schema includes a small `users` table as an example.

## Run

```bash
bun run dev
```

The server listens on `PORT` (default `3000`). Check `/health` for server status and `/health/database` to verify the MySQL connection.

## Checks

```bash
bun run typecheck
```
