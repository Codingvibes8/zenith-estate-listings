import { db } from '@/db/client';
import { properties } from '@/db/schema';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { userId } = auth();

    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, price, location, bedrooms, bathrooms, image_url, area } = body;

    try {
        const newListing = await db.insert(properties).values({
            title,
            description,
            price: parseInt(price),
            location,
            bedrooms: parseInt(bedrooms),
            bathrooms: parseInt(bathrooms),
            image_url,
            area,
            userId, // Associate the listing with the user
        });

        return NextResponse.json(newListing, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create listing' }, { status: 500 });
    }
}