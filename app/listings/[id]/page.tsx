import { notFound } from 'next/navigation';
import Image from 'next/image';
import { db } from '@/db/client';
import { properties } from '@/db/schema';
import { eq } from 'drizzle-orm';


type Property = {
    id: number;
    title: string;
    description: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    image_url: string; // Updated to match the database column
    area: string;
};

// Fetch a single property by ID
async function getPropertyById(id: number): Promise<Property | undefined> {
    const result = await db.select().from(properties).where(eq(properties.id, id));
    return result[0];
}

export default async function PropertyDetailsPage({ params }: { params: { id: string } }) {
    const property = await getPropertyById(parseInt(params.id));

    if (!property) {
        return notFound();
    }

    return (
        <div className="p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{property.title}</h1>
                <Image
                    src={property.image_url} // Updated to match the database column
                    alt={property.title}
                    width={800}
                    height={450}
                    className="w-full h-96 object-cover rounded-lg"
                />
                <div className="mt-6">
                    <p className="text-gray-600">{property.location}</p>
                    <p className="text-lg font-bold">£{property.price.toLocaleString()}</p>
                    <p>{property.bedrooms} Bedrooms, {property.bathrooms} Bathrooms</p>
                    <p className="mt-4">{property.description}</p>
                </div>
            </div>
        </div>
    );
}