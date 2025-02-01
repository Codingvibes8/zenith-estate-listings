
import { redirect } from 'next/navigation';
import ListingForm from '@/components/ListingForm';
import {currentUser} from "@clerk/nextjs/server";

export default function SubmitListingPage() {
    const {userId} = currentUser();

    if (!userId) {
        redirect('/sign-in');
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Submit a Listing</h1>
            <ListingForm />
        </div>
    );
}