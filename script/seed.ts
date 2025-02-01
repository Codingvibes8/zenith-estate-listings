import { db } from '@/db/client';
import { properties } from '@/db/schema';

const sampleData = [
    {
        title: 'Victorian Townhouse in Notting Hill',
        description: 'A charming 5-bedroom townhouse with a private garden.',
        price: 2800000,
        location: 'Notting Hill, West London',
        bedrooms: 5,
        bathrooms: 4,
        imageUrl: 'https://example.com/townhouse1.jpg',
        area: 'West London',
    },
    {
        title: 'Modern Apartment in Canary Wharf',
        description: 'A sleek 2-bedroom apartment with access to luxury amenities.',
        price: 850000,
        location: 'Canary Wharf, Central London',
        bedrooms: 2,
        bathrooms: 2,
        imageUrl: 'https://example.com/apartment1.jpg',
        area: 'Central London',
    },
    {
        title: 'Family Home in Kensington',
        description: 'A elegant 6-bedroom family home near Hyde Park.',
        price: 4200000,
        location: 'Kensington, West London',
        bedrooms: 6,
        bathrooms: 5,
        imageUrl: 'https://example.com/familyhome1.jpg',
        area: 'West London',
    },
    {
        title: 'Studio Apartment in Soho',
        description: 'A cozy studio apartment in the heart of Soho, perfect for professionals.',
        price: 550000,
        location: 'Soho, Central London',
        bedrooms: 1,
        bathrooms: 1,
        imageUrl: 'https://example.com/studio1.jpg',
        area: 'Central London',
    },
    {
        title: 'Luxury Loft in Shoreditch',
        description: 'A stylish 3-bedroom loft with exposed brick walls and high ceilings.',
        price: 1200000,
        location: 'Shoreditch, Central London',
        bedrooms: 3,
        bathrooms: 2,
        imageUrl: 'https://example.com/loft1.jpg',
        area: 'Central London',
    },
    {
        title: 'Detached House in Hampstead',
        description: 'A stunning 7-bedroom detached house with a swimming pool.',
        price: 5000000,
        location: 'Hampstead, West London',
        bedrooms: 7,
        bathrooms: 6,
        imageUrl: 'https://example.com/detached1.jpg',
        area: 'West London',
    },
    {
        title: 'Riverside Apartment in Chelsea',
        description: 'A luxurious 3-bedroom apartment with Thames views.',
        price: 2200000,
        location: 'Chelsea, West London',
        bedrooms: 3,
        bathrooms: 3,
        imageUrl: 'https://example.com/riverside1.jpg',
        area: 'West London',
    },
    {
        title: 'Art Deco Flat in Bloomsbury',
        description: 'A beautifully restored 2-bedroom Art Deco flat.',
        price: 950000,
        location: 'Bloomsbury, Central London',
        bedrooms: 2,
        bathrooms: 1,
        imageUrl: 'https://example.com/artdeco1.jpg',
        area: 'Central London',
    },
    {
        title: 'Contemporary House in Fulham',
        description: 'A modern 4-bedroom house with a rooftop terrace.',
        price: 1800000,
        location: 'Fulham, West London',
        bedrooms: 4,
        bathrooms: 3,
        imageUrl: 'https://example.com/contemporary1.jpg',
        area: 'West London',
    },
];

async function seed() {
    await db.insert(properties).values(sampleData);
    console.log('Database seeded successfully!');
}

seed();