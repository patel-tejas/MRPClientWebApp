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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from "@/public/logo.png"
export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-[40px] w-[40px]">
            <Image src={logo} alt="United Timber Works Logo" className="h-auto w-auto object-contain" />
          </div>
          <span className="hidden text-lg font-bold text-indigo-900 md:inline">MRP EXIM PRODUCTS</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="text-lg">
            <NavigationMenuItem className="">
              <Link href="/" legacyBehavior passHref className="">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === "/" ? "text-primary text-[15px] font-semibold border-b-2 border-primary " : "bg-transparent text-[15px] font-normal",
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
                    pathname === "/about" ? "text-primary text-[15px] font-semibold border-b-2 border-primary bg-transparent" : "bg-transparent text-[15px] ",
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(pathname.startsWith("/products") ? "text-primary text-[15px]  font-semibold bg-transparent" : "bg-transparent text-[15px] ")}
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
                    pathname === "/contact" ? "text-primary text-[15px]  font-semibold border-b-2 border-primary bg-transparent" : "bg-transparent text-[15px]  ",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button className="hidden md:flex bg-red-600 hover:bg-red-700">Get In Touch</Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-6 py-6">
                <Link
                  href="/"
                  className={cn(
                    "flex w-full items-center py-2 text-lg font-medium",
                    pathname === "/" ? "text-primary" : "",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "flex w-full items-center py-2 text-lg font-medium",
                    pathname === "/about" ? "text-primary" : "",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <div className="flex flex-col gap-2">
                  <div className="flex w-full items-center py-2 text-lg font-medium">Products</div>
                  <Link
                    href="/products/shuttering"
                    className="flex w-full items-center py-2 pl-4 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    Shuttering
                  </Link>
                  <Link
                    href="/products/fly-ash-brick-pallet"
                    className="flex w-full items-center py-2 pl-4 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    Fly Ash Brick Pallet
                  </Link>
                  <Link
                    href="/products"
                    className="flex w-full items-center py-2 pl-4 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    All Products
                  </Link>
                </div>
                <Link
                  href="/infrastructure"
                  className={cn(
                    "flex w-full items-center py-2 text-lg font-medium",
                    pathname === "/infrastructure" ? "text-primary" : "",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Infrastructure
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "flex w-full items-center py-2 text-lg font-medium",
                    pathname === "/contact" ? "text-primary" : "",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button className="mt-4 bg-red-600 hover:bg-red-700">Get In Touch</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
