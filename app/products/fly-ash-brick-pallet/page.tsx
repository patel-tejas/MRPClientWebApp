import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function FlyAshBrickPalletPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src="/placeholder.svg?height=400&width=1920" alt="Fly Ash Brick Pallet" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
          <div className="container h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fly Ash Brick Pallet</h1>
              <p className="text-xl text-white/80 mb-6">Durable and Reliable Pallets for Brick Manufacturing</p>
              <Button className="bg-red-600 hover:bg-red-700">Request a Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Premium Fly Ash Brick Pallets</h2>
              <p className="text-gray-700 mb-4">
                Our fly ash brick pallets are specifically designed for the brick manufacturing industry, offering
                exceptional durability, stability, and longevity. Made from high-quality materials, these pallets ensure
                efficient production and handling of fly ash bricks.
              </p>
              <p className="text-gray-700 mb-6">
                Available in various sizes and configurations to meet your specific manufacturing requirements.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold">Superior Durability</h3>
                    <p className="text-gray-600">Withstands the rigors of brick manufacturing processes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold">Excellent Load Capacity</h3>
                    <p className="text-gray-600">Designed to handle heavy loads without deformation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold">Customizable Dimensions</h3>
                    <p className="text-gray-600">
                      Available in various sizes to suit different brick manufacturing setups
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Fly Ash Brick Pallet in Use"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Variants */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Pallet Variants</h2>

          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid grid-cols-3 w-full h-auto mb-8">
              <TabsTrigger value="standard" className="py-3">
                Standard Pallet
              </TabsTrigger>
              <TabsTrigger value="heavy-duty" className="py-3">
                Heavy-Duty Pallet
              </TabsTrigger>
              <TabsTrigger value="custom" className="py-3">
                Custom Solutions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="standard" className="mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Standard Fly Ash Brick Pallet"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Standard Pallet</h3>
                    <p className="text-gray-700 mb-4">
                      Our standard fly ash brick pallet is designed for regular brick manufacturing operations, offering
                      a balance of durability and cost-effectiveness.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Dimensions</span>
                          <span>900mm x 600mm</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Load Capacity</span>
                          <span>Up to 1000 kg</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Material</span>
                          <span>High-density plywood</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Lifespan</span>
                          <span>3-5 years</span>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700">Download Specification</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="heavy-duty" className="mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Heavy-Duty Fly Ash Brick Pallet"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Heavy-Duty Pallet</h3>
                    <p className="text-gray-700 mb-4">
                      Our heavy-duty fly ash brick pallet is engineered for intensive manufacturing environments where
                      durability and load capacity are paramount.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Dimensions</span>
                          <span>1000mm x 800mm</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Load Capacity</span>
                          <span>Up to 1500 kg</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Material</span>
                          <span>Reinforced plywood</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Lifespan</span>
                          <span>5-7 years</span>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700">Download Specification</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="custom" className="mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Custom Fly Ash Brick Pallet"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      We offer custom-designed fly ash brick pallets tailored to your specific manufacturing
                      requirements, ensuring optimal performance for your unique setup.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Dimensions</span>
                          <span>Custom as required</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Load Capacity</span>
                          <span>As per specification</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Material</span>
                          <span>Various options</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Features</span>
                          <span>Customizable</span>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700">Contact for Custom Quote</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our Fly Ash Brick Pallets</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Increased Productivity</h3>
              <p className="text-gray-600">
                Our pallets are designed for efficient handling, reducing production time and increasing overall
                productivity in brick manufacturing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                The durability and longevity of our pallets result in fewer replacements, leading to significant cost
                savings over time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-amber-400 text-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M4.93 4.93 19.07 19.07"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Improved Quality</h3>
              <p className="text-gray-600">
                Our pallets provide a stable platform for brick formation, resulting in more consistent and higher
                quality end products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Versatility</h3>
              <p className="text-gray-600">
                Our pallets are suitable for various brick sizes and types, providing flexibility in your manufacturing
                operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Handling</h3>
              <p className="text-gray-600">
                Designed with ergonomics in mind, our pallets are easy to handle, reducing worker fatigue and potential
                injuries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-amber-400 text-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Environmentally Friendly</h3>
              <p className="text-gray-600">
                Our pallets are made from sustainable materials, aligning with environmentally responsible manufacturing
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-950 text-white mb-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Brick Manufacturing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your fly ash brick pallet requirements and discover how our solutions can
            enhance your manufacturing process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-900 hover:bg-gray-100">Request a Quote</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
