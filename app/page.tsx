import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
      <div className="min-h-screen bg-[url(/est-hero.jpg)] overflow-hidden bg-center bg-cover px-8">
       <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center justify-center h-[80vh] z-20 ">
          <h1 className="text-4xl z-20 font-bold text-white mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-white mb-8 z-20">
            Explore luxury properties in Central and West London.
          </p>
          <Link href="/listings" className={'z-20'}>
            <Button className="bg-blue-600 text-yellow-300 hover:text-gray-700 hover:bg-amber-500 px-8 py-4 text-lg">
              Browse Listings
            </Button>
          </Link>
        </div>
      </div>
  );
}