import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const records = sqliteTable('records', { id: text('id').primaryKey(), data: text('data').notNull(), version: integer('version').notNull().default(1) });
export const sessions = sqliteTable('sessions', { id: text('id').primaryKey(), email: text('email').notNull(), expires: integer('expires').notNull() });
