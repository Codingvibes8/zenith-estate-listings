
import { pgTable, varchar, integer, serial, text } from 'drizzle-orm/pg-core';

export const properties = pgTable('properties', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    description: text('description').notNull(),
    price: integer('price').notNull(),
    location: varchar('location', { length: 100 }).notNull(),
    bedrooms: integer('bedrooms').notNull(),
    bathrooms: integer('bathrooms').notNull(),
    image_url: varchar('image_url', { length: 255 }).notNull(),
    area: varchar('area', { length: 50 }).notNull(), // Central London or West London
});