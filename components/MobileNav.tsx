"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
/**
 * Mobile navigation component for the application.
 *
 * This component provides a toggleable mobile navigation menu using a sheet.
 * The menu includes links to the Dashboard, Products, and Analytics pages.
 * It uses the `usePathname` hook to highlight the current active page.
 * The menu is controlled by a button that toggles the sheet's visibility.
 *
 * @returns A JSX element representing the mobile navigation menu.
 */

export  default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-amber-800 text-white">
        <nav className="flex flex-col space-y-4">
          <Link
            href="/listings"
            className={`text-lg font-medium hover:underline ${pathname === "/" ? "text-foreground" : "text-foreground/60"}`}
            onClick={() => setOpen(false)}
          >
            Listings
          </Link>

          <Link
            href="/login"
            className={`text-lg font-medium hover:underline ${pathname === "/analytics" ? "text-foreground" : "text-foreground/60"}`}
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <Link
              href="/orders"
              className={`text-lg font-medium hover:underline ${pathname === "/analytics" ? "text-foreground" : "text-foreground/60"}`}
              onClick={() => setOpen(false)}
          >
            Orders
          </Link>
          <div className={'flex justify-end items-center gap-6'}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

