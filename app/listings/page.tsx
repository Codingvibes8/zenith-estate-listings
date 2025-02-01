import Image from 'next/image';
import { db } from '@/db/client';
import { properties } from '@/db/schema';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from "next/link";

export default async function Listings() {
    const data = await db.select().from(properties);

    return (
        <div className="py-20 px-8 md:px-16 lg:px-32">
            <h1 className="flex items-center text-3xl font-bold font-serif mb-6">Properties For Sale In London</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {data.map((property) => (
                    <Card key={property.id}>
                        <div className={'mb-8 block items-center justify-center'}>
                        <Link href={`/properties/${property.id}`}>
                            <Image src={property.image_url} alt={property.title} width={400} height={320} className="mt-4 rounded-lg" />
                        </Link>
                        </div>
                        <CardContent className={'bg-gray-800 rounded-2xl mt-8 p-4 text-center'}t>
                            <CardTitle>{property.title}</CardTitle>
                            <CardDescription>{property.location}</CardDescription>
                            <p className="text-lg font-bold">£{property.price.toLocaleString()}</p>
                            <p>{property.bedrooms} Bedrooms, {property.bathrooms} Bathrooms</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
