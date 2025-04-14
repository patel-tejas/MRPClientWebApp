import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Clock, HeartHandshake, Shield } from "lucide-react"
import hero1 from "@/public/landing.jpg"
import redsp from "@/public/redsp.jpg"
import blacksp from "@/public/blacksp.jpg"
import repetition from "@/public/repetition.jpg"
import metallic from "@/public/metallic.jpg"
import flyash from "@/public/flyash.jpg"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <div className="relative h-[600px] w-full overflow-hidden">
          <Image
            src={hero1}
            alt="Construction site with cranes"
            width={1920}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
            <div className="container h-full flex flex-col justify-center">
              <div className="max-w-xl space-y-6">
                <div className="bg-amber-400 text-black p-8 rounded-lg">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Need Shuttering Plywood For Your Next High Rise?
                  </h1>
                  <p className="mt-4 text-lg">Source Shuttering Ply For Your Project</p>
                  <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white">Get In Touch With Us Now!</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>

          <Tabs defaultValue="fly" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full h-auto text-wrap ">
              <TabsTrigger value="fly" className="py-3 text-wrap">
                Fly Ash Brick Pallet
              </TabsTrigger>
              <TabsTrigger value="film" className="py-3">
                Film Faced Shuttering Plywood
              </TabsTrigger>
              <TabsTrigger value="metallic" className="py-3">
                Metallic Shuttering Plywood
              </TabsTrigger>
              <TabsTrigger value="repetition" className="py-3">
                100 Repetition Shuttering Plywood
              </TabsTrigger>
              {/* <TabsTrigger value="container" className="py-3">
                  Chequered Plywood
                </TabsTrigger> */}
            </TabsList>

            <div className="mt-8">
              <TabsContent value="fly" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src={flyash}
                      alt="Fly Ash Brick Pallet"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Fly Ash Brick Pallet</h3>
                    <p className="text-gray-700 mb-4">
                      ZIPCO Pallets are specially designed for fly ash brick manufacturing. Made using advanced composite materials,
                      they offer exceptional strength, weather resistance, and a long life span even under harsh working conditions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Water, termite, and UV resistant</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Heavy load bearing capacity with no deformation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Long-lasting composite material</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Perfectly handles Brick and Paver blocks of custom sizes</span>
                      </li>
                    </ul>
                    <Button className="mt-6" variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="film" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="">
                    <Image
                      src={redsp}
                      alt="Inova Brand"
                      width={500}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Film Faced Suttering Plywood- Inova</h3>
                    <p className="text-gray-700 mb-4">
                      Welcome to Inova Mirror Finishing Shuttering Plywood, your premier destination for top-tier film-faced
                      shuttering plywood engineered to exceed industry standards. Designed for maximum performance and durability in
                      construction.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Available in 12 mm and 18 mm thickness</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>120 GSM high-quality film on both sides</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Resistant to moisture, chemicals, and abrasions</span>
                      </li>
                    </ul>
                    <Button className="mt-6" variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>


              <TabsContent value="metallic" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src={metallic}
                      alt="Zipco Metallic Shuttering Plywood"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Zipco Metallic Shuttering Plywood</h3>
                    <p className="text-gray-700 mb-4">
                      Engineered for durability and exceptional performance, Zipco Metallic Film Face Shuttering Plywood is the ideal
                      choice for high-demand construction projects. Its metallic coating delivers unmatched reusability, strength, and surface finish.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>More than 70 reuse cycles with high abrasion resistance</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>15000 abrasion value for extended product life</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Metallic film coating protects against chemicals and moisture</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Smooth surface finish for better concrete output</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Reduces maintenance, material waste, and labor costs</span>
                      </li>
                    </ul>
                    <Button className="mt-6" variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>


              <TabsContent value="repetition" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src={repetition}
                      alt="100 Repetition Shuttering Plywood"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">100 Repetition Shuttering Plywood</h3>
                    <p className="text-gray-700 mb-4">
                      ZIPCO’s 100 Repetition Shuttering Plywood is crafted using durable jute films and treated with phenolic chemicals
                      for superior waterproofing. Designed to withstand repeated usage, it delivers both performance and longevity on construction sites.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Made with high-strength jute film layers</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>More Phenolic chemical treatment for waterproof performance</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Supports more than 100 reuse cycles in construction</span>
                      </li>
                    </ul>
                    <Button className="mt-6" variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* <TabsContent value="container" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Container Flooring"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Container Flooring</h3>
                    <p className="text-gray-700 mb-4">
                      Specialized 28mm container flooring for new and container repair applications, designed to
                      withstand heavy loads and harsh conditions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>28mm thickness for strength</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Withstands heavy loads</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Resistant to harsh conditions</span>
                      </li>
                    </ul>
                    <Button className="mt-6" variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent> */}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Digital & Machinery Infra Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Digital & Machinery Infra</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Modern Machinery"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">State-of-the-Art Machinery</h3>
              <p className="text-gray-700">
                Our manufacturing facilities are equipped with the latest technology and machinery to ensure consistent
                quality and efficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Digital Infrastructure"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Infrastructure</h3>
              <p className="text-gray-700">
                Advanced digital systems for inventory management, quality control, and order processing to streamline
                operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Quality Testing Lab"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Testing Lab</h3>
              <p className="text-gray-700">
                Comprehensive testing facilities to ensure all products meet the highest standards of quality and
                performance.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-neutral-900 to-blue-950 text-white py-40">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-6 mb-6">
                <HeartHandshake className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Responsive Customer Care</h3>
              <p className="text-gray-300">By sending a representative to the building site in a day or less.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-6 mb-6">
                <ArrowRight className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sales Support Beyond the Basics</h3>
              <p className="text-gray-300">
                Give dealers access to a dedicated CRM, which will improve inventory turnover and lead management.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-6 mb-6">
                <Clock className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pioneering On-Time Delivery</h3>
              <p className="text-gray-300">Reaching the 80% On-Time Delivery goal while emphasising dependability.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-amber-400 rounded-full p-6 mb-6">
                <Shield className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Unmatched Quality Consistency</h3>
              <p className="text-gray-300">
                Commit to a high level of quality consistency with a complaint percentage below 1-2%.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
