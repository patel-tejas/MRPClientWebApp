import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: 'Products – MRP Exim Products',
  description: 'Explore our range of high-quality shuttering plywood and fly ash brick pallets. Our products are designed to meet the demands of modern construction projects, offering durability and cost-effectiveness.',
}
export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-600">Discover our range of high-quality construction materials</p>
          </div>
        </div>
      </section>

      {/* Products List Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Shuttering Product */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Shuttering Plywood</h2>
                <p className="text-gray-600 mb-4">
                  High-quality waterproof shuttering plywood for construction projects. Available in various brands
                  including UTW, Majestic, Continental, and Express.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/products/shuttering">
                    <Button variant="outline" className="flex items-center">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <span className="text-sm text-gray-500">Multiple variants available</span>
                </div>
              </div>
            </div>

            {/* Fly Ash Brick Pallet Product */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Fly Ash Brick Pallet</h2>
                <p className="text-gray-600 mb-4">
                  Durable and reliable pallets specifically designed for fly ash brick manufacturing, ensuring efficient
                  production and handling.
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/products/fly-ash-brick-pallet">
                    <Button variant="outline" className="flex items-center">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <span className="text-sm text-gray-500">Custom sizes available</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}
