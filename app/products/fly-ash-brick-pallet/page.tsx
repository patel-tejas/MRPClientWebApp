import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"
import palletmain from "@/public/pallet-main.png"
import flyash from "@/public/flyash.jpg"
import Link from "next/link"
export const metadata = {
  title: 'Fly Ash Brick Pallet – MRP Exim Products',
  description: 'Discover our premium fly ash brick pallets designed for durability and efficiency in construction. Available in multiple variants to suit your needs.',
}
export default function FlyAshBrickPalletPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[450px] bg-gradient-to-br from-white to-gray-100 overflow-hidden">
        {/* Watermark Pattern */}
        <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 opacity-40 -rotate-45 -top-[450px]">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase 
           text-transparent bg-clip-text bg-gradient-to-r from-red-600/30 to-blue-700/80">
              ZIPCO
            </div>
          ))}
        </div>

        {/* 3D Product Image - Desktop Only */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[90%] perspective-1000">
          <div className="relative w-full h-full">
            <Image
              src={palletmain}
              alt="Premium Fly Ash Brick Pallets"
              fill
              className="object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(20px 15px 30px rgba(0,0,0,0.15))'
              }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 container h-full flex flex-col justify-center px-4 md:px-8">
          <div className="max-w-xl relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Zipco Fly Ash Brick Pallets
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Engineered for Strength & Precision
            </p>
            <Link href="/contact" className="bg-red-600 rounded-xl text-white px-8 py-3 text-lg hover:bg-red-700
                        shadow-lg shadow-red-200">
              Request Quote
            </Link>
          </div>
        </div>

        {/* Decorative Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100/50 to-transparent" />
      </section>

      {/* Product Description */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Premium Fly Ash Brick Pallets
              </h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Zipco presents premium-grade Fly Ash Brick Pallets, meticulously designed for heavy-duty industrial handling,
                automated stacking, and seamless machine processing of fly ash bricks, blocks, and pavers.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Available in three specialized variants to meet every construction need - Standard, Calibrated, and Jute-faced options.
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Reinforced Structure</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Dual-layer wire mesh jali for optimal load distribution
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold">Advanced Surface Protection</h3>
                    <p className="text-gray-600">180 gsm black film facing with UV resistance and waterproofing</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold">Custom Sizing</h3>
                    <p className="text-gray-600">Available in thicknesses from 12mm to 75mm to suit all requirements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src={flyash}
                alt="Fly Ash Brick Pallet in Use"
                fill
                className="rounded-lg shadow-lg w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Product Comparison */}
      {/* <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Pallet Specifications
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-2 md:p-4 text-left text-sm md:text-base">Feature</th>
                  <th className="p-2 md:p-4 text-left text-sm md:text-base">Standard Pallet</th>
                  <th className="p-2 md:p-4 text-left text-sm md:text-base">Calibrated Pallet</th>
                  <th className="p-2 md:p-4 text-left text-sm md:text-base">Jute Pallet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm md:text-base">
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* Product Variants */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Wooden Fly Ash Brick Pallet Variants
          </h2>

          <Tabs defaultValue="standard" className="w-full">
            <div className="overflow-x-auto no-scrollbar pb-2">
              <TabsList className="flex w-max space-x-2 px-1 md:px-0 md:w-full md:grid md:grid-cols-3 h-auto">
                <TabsTrigger
                  value="standard"
                  className="py-2 md:py-3 text-xs md:text-sm whitespace-nowrap"
                >
                  Standard Fly Ash Brick Pallet
                </TabsTrigger>
                <TabsTrigger value="calibrated" className="py-3">
                  Calibrated Fly Ash Brick Pallet
                </TabsTrigger>
                <TabsTrigger value="jute" className="py-3">
                  Jute Fly Ash Brick Pallet
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Standard Pallet */}
            <TabsContent value="standard" className="mt-4 md:mt-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div className="relative w-full md:w-[80%] h-[400px] md:h-[400px] lg:h-[700px]">
                    <Image
                      src="/standard-pallet.jpg"
                      alt="Standard Fly Ash Brick Pallet"
                      fill
                      className="rounded-lg w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                      Standard Fly Ash Brick Pallet
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                      Our standard pallet offers reliable performance for general construction needs...
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Dimensions</span>
                        <span>Custom sizes</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Thickness</span>
                        <span>12mm, 18mm, 20mm, 25mm, 30mm, 35mm, ....75mm
                        </span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Material</span>
                        <span>Film-faced hardwood</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Lifespan</span>
                        <span>3-8 years</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <Link href="/Zipco-Fly-Ash-Brick-Pallet-Brochure.pdf" target="_blank" className="rounded-lg bg-red-600 text-white hover:bg-red-700 w-full md:w-auto px-6 py-2 duration-200 text-center">
                        Download Brochure
                      </Link>
                      <Link href={"/contact"} className="rounded-lg bg-blue-600 text-center text-white duration-200 hover:bg-blue-700 w-full md:w-auto px-6 py-2">
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Calibrated Pallet */}
            <TabsContent value="calibrated" className="mt-4 md:mt-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <Image
                      src="/calibrated.jpg"
                      alt="Calibrated Fly Ash Brick Pallet"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Calibrated Fly Ash Brick Pallet</h3>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                      Engineered for absolute precision with tolerance under 1mm, these pallets guarantee
                      ultra-tight dimensional accuracy for high-end construction projects.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Tolerance</span>
                        <span>&lt;1 mm precision</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Construction Speed</span>
                        <span>20-30% faster</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Mortar Savings</span>
                        <span>15-20% reduction</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Load Capacity</span>
                        <span>1000+ kg</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Premium Features:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reinforced hardwood frame with wire mesh</li>
                        <li>Machine-grade black film surface</li>
                        <li>Chamfered edges for automation</li>
                        <li>Ideal for high-rises and RCC structures</li>
                      </ul>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Link href="/Zipco-Fly-Ash-Brick-Pallet-Brochure.pdf" target="_blank" className="rounded-lg bg-red-600 text-white hover:bg-red-700 w-full md:w-auto px-6 py-2 duration-200 text-center">
                        Download Brochure
                      </Link>
                      <Link href={"/contact"} className="rounded-lg bg-blue-600 text-center text-white duration-200 hover:bg-blue-700 w-full md:w-auto px-6 py-2">
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Jute Pallet */}
            <TabsContent value="jute" className="mt-4 md:mt-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <Image
                      src="/jute-pallet.jpg"
                      alt="Jute Fly Ash Brick Pallet"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Jute Fly Ash Brick Pallet</h3>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                      Our eco-friendly jute-faced pallets combine durability with sustainability, offering
                      extended lifespan and superior performance for long-term projects.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Dimensions</span>
                        <span>Custom sizes</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Thickness</span>
                        <span>12mm, 18mm, 20mm, 25mm, 30mm, 35mm, ....75mm</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Material</span>
                        <span>Jute film-faced</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded">
                        <span className="font-semibold block">Lifespan</span>
                        <span>7-15 years</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Key Advantages:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Exceptional durability</li>
                        <li>Eco-friendly materials</li>
                        <li>Reduced maintenance</li>
                        <li>Superior weather resistance</li>
                      </ul>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <Link href="/Zipco-Fly-Ash-Brick-Pallet-Brochure.pdf" target="_blank" className="rounded-lg bg-red-600 text-white hover:bg-red-700 w-full md:w-auto px-6 py-2 duration-200 text-center">
                        Download Brochure
                      </Link>
                      <Link href={"/contact"} className="rounded-lg bg-blue-600 text-center text-white duration-200 hover:bg-blue-700 w-full md:w-auto px-6 py-2">
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Why Choose Zipco Pallets?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>

              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Industrial-Grade Durability
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Hardwood construction with reinforced mesh...
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Weather & Termite Resistant</h3>
              <p className="text-gray-600">
                Protective film and paint ensure all-weather performance and protection against pests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-amber-100 text-amber-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Automation</h3>
              <p className="text-gray-600">
                Precision design ensures smooth integration with automated brick/block machines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-red-100 text-red-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Heavy Load Capacity</h3>
              <p className="text-gray-600">
                Built to PF Grade standards, supporting 1000+ kg loads for industrial-scale operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-purple-100 text-purple-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Conscious Materials</h3>
              <p className="text-gray-600">
                Sustainable materials with minimal environmental impact across all product lines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-teal-100 text-teal-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">
                Long lifespan and reduced maintenance deliver exceptional value over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <div className="container px-4 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Upgrade to Zipco Pallets Today
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to find the perfect pallet solution...
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link href="/Zipco-Fly-Ash-Brick-Pallet-Brochure.pdf" target="_blank" className="rounded-lg bg-white text-blue-900 hover:bg-gray-300 w-full md:w-auto px-6 py-3 duration-200">
              Download Brochure
            </Link>
            <Link href={"/contact"} className="rounded-lg bg-red-600 text-white duration-200 hover:bg-red-700 w-full md:w-auto px-6 py-3">
              Request a Quote
            </Link>

          </div>
        </div>
      </section >
    </div >
  )
}