"use client"
import React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import MobileNav from "@/components/MobileNav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {SignedIn, SignedOut,SignInButton, UserButton} from "@clerk/nextjs";
import { LifeBuoy } from 'lucide-react';


/**
 * The main header component for the app.
 *
 * This component is a sticky header that is present at the top of every page.
 * It contains a navigation menu with links to the dashboard, products, and analytics pages.
 * It also contains a theme toggle button and a mobile navigation menu.
 *
 * @returns The Header component.
 */
export function Header() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <header className="sticky top-0 z-50 h-16  max-w-screen-2xl flex items-center  bg-amber-800 px-8 md:px-16 lg:px-32">
            <div className="container flex w-full items-center justify-between">
                <div className="flex justify-start items-center">
                    <Link href="/" className="flex items-center">
                        <LifeBuoy  className="h-8 w-12"/>
                        <span className="font-bold font-serif text-2xl text-yellow-300">Zenith Estates</span>
                    </Link>
                </div>
                <nav className="text-[20px] hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/submit-listing">
                        <button className="p-2 bg-blue-500 text-white rounded">
                            Submit a Listing
                        </button>
                    </Link>
                    <Link
                        href="/listings"
                        className={`transition-colors hover:text-foreground/80 ${pathname === "/products" ? "text-foreground" : "text-foreground/60"}`}
                    >
                        Listings
                    </Link>
                    <Link
                        href="/orders"
                        className={`transition-colors hover:text-foreground/80 ${pathname === "/analytics" ? "text-foreground" : "text-foreground/60"}`}
                    >
                        Orders
                    </Link>
                </nav>

                <div className="flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle Theme"
                        className="mr-6"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {theme === "dark" ? <Sun className="h-6 w-6"/> : <Moon className="h-6 w-6"/>}
                    </Button>

                </div>
                <div className={'flex items-center gap-4'}>
                    <SignedOut>
                        <SignInButton/>
                    </SignedOut>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </div>
                <div>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}