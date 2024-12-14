import { DatabaseType } from "typeorm"

type BaseConfiguration = {
  db_type: DatabaseType,
  db_host: string,
  db_port: number,
  db_username: string,
  db_password: string,
  db_database: string,
}

export const configuration = (): BaseConfiguration => ({
  db_type: 'mariadb',
  db_host: process.env.DATABASE_HOST,
  db_port: parseInt(process.env.DATABASE_PORT, 10),
  db_username: process.env.DATABASE_USER,
  db_password: process.env.DATABASE_PASSWORD,
  db_database: process.env.DATABASE_NAME
});