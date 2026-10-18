function requiredEnvironmentValue(name: string): string {
  const value = process.env[name];

  if (!value?.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function portFromEnvironment(name: string, fallback?: number): number {
  const value = process.env[name] ?? (fallback === undefined ? undefined : String(fallback));

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  const port = Number(value);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`${name} must be an integer between 1 and 65535`);
  }

  return port;
}

export function getDatabaseConfig() {
  const password = process.env.MYSQL_PASSWORD;
  if (password === undefined) {
    throw new Error("Missing required environment variable: MYSQL_PASSWORD");
  }

  return {
    host: requiredEnvironmentValue("MYSQL_HOST"),
    port: portFromEnvironment("MYSQL_PORT", 3306),
    user: requiredEnvironmentValue("MYSQL_USER"),
    password,
    database: requiredEnvironmentValue("MYSQL_DATABASE"),
  };
}

export function getServerPort(): number {
  return portFromEnvironment("PORT", 3000);
}
