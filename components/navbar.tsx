"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import Image from "next/image"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import logo from "@/public/logo.png"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 md:h-10 md:w-10">
            <Image
              src={logo}
              alt="MRP EXIM PRODUCTS Logo"
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <span className="text-sm font-bold text-indigo-900 sm:text-base md:text-lg">MRP EXIM PRODUCTS</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="text-lg">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/"
                      ? "text-primary font-semibold border-b-2 border-primary"
                      : "bg-transparent",
                    "text-sm lg:text-[15px] px-3 lg:px-4"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/about"
                      ? "text-primary font-semibold border-b-2 border-primary bg-transparent"
                      : "bg-transparent",
                    "text-sm lg:text-[15px] px-3 lg:px-4"
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  pathname.startsWith("/products")
                    ? "text-primary font-semibold bg-transparent"
                    : "bg-transparent",
                  "text-sm lg:text-[15px] px-3 lg:px-4"
                )}
              >
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-500 to-red-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/products/shuttering"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Shuttering</div>
                        <p className="text-sm leading-tight text-white/90">
                          High-quality waterproof shuttering plywood for construction projects
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/products/fly-ash-brick-pallet"
                      >
                        <div className="text-sm font-medium leading-none">Fly Ash Brick Pallet</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Durable pallets for fly ash brick manufacturing
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/products"
                      >
                        <div className="text-sm font-medium leading-none">All Products</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Browse our complete range of construction materials
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/contact"
                      ? "text-primary font-semibold border-b-2 border-primary bg-transparent"
                      : "bg-transparent",
                    "text-sm lg:text-[15px] px-3 lg:px-4"
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button className="hidden sm:flex bg-red-600 hover:bg-red-700 text-sm px-3 py-1 h-9">
            Get In Touch
          </Button>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden h-9 w-9"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-6">
                <Link
                  href="/"
                  className={cn(
                    "w-full py-2 text-base font-medium",
                    pathname === "/" ? "text-primary" : "",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "w-full py-2 text-base font-medium",
                    pathname === "/about" ? "text-primary" : "",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <div className="flex flex-col gap-1">
                  <div className="w-full py-2 text-base font-medium">Products</div>
                  <Link
                    href="/products/shuttering"
                    className="w-full py-1.5 pl-4 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Shuttering
                  </Link>
                  <Link
                    href="/products/fly-ash-brick-pallet"
                    className="w-full py-1.5 pl-4 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Fly Ash Brick Pallet
                  </Link>
                  <Link
                    href="/products"
                    className="w-full py-1.5 pl-4 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    All Products
                  </Link>
                </div>
                <Link
                  href="/contact"
                  className={cn(
                    "w-full py-2 text-base font-medium",
                    pathname === "/contact" ? "text-primary" : "",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button className="mt-2 bg-red-600 hover:bg-red-700 w-full">
                  Get In Touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}