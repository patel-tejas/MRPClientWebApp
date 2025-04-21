import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight } from "lucide-react"
import redsp from "@/public/redsp.jpg"
import inova from "@/public/innova.jpg"
import blacksp from "@/public/blacksp.jpg"
import repetition from "@/public/repetition.jpg"
import metallic from "@/public/metallic.jpg"
import Link from "next/link"

export default function ShutteringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[450px] bg-gradient-to-br from-gray-900 to-blue-950 overflow-hidden">
        {/* Watermark Pattern */}
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 opacity-90 -rotate-45 -top-[450px]">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase 
           text-transparent bg-clip-text bg-gradient-to-r from-red-400/30 to-blue-400/20">
              ZIPCO
            </div>
          ))}
        </div>

        {/* 3D Product Image - Desktop Only */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[80%] perspective-1000">
          <Image
            src={inova} // Replace with your image path
            alt="Premium Shuttering Plywood"
            fill
            className="object-contain"

          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
          <div className="container h-full flex flex-col justify-center px-4 md:px-8">
            <div className="max-w-xl relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Professional Grade Shuttering Plywood
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Waterproof & Durable Construction Solutions
              </p>
              <Link href="/contact" className="bg-red-600 rounded-xl text-white px-8 py-3 text-lg hover:bg-red-700">
                Request Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950/50 to-transparent" />
      </section>



      {/* Product Variants */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Shuttering Brands</h2>

          <Tabs defaultValue="red">
            <div className="overflow-x-auto no-scrollbar pb-2">
              <TabsList className="flex w-max space-x-2 px-1 md:px-0 md:w-full md:grid md:grid-cols-4">
                <TabsTrigger value="red" className="py-2 md:py-3 text-xs md:text-sm whitespace-nowrap">
                  Red Shuttering Plywood
                </TabsTrigger>
                <TabsTrigger value="black" className="py-2 md:py-3 text-xs md:text-sm whitespace-nowrap">
                  Black Shuttering Plywood
                </TabsTrigger>
                <TabsTrigger value="metallic" className="py-2 md:py-3 text-xs md:text-sm whitespace-nowrap">
                  Metallic Shuttering Plywood
                </TabsTrigger>
                <TabsTrigger value="repetition" className="py-2 md:py-3 text-xs md:text-sm whitespace-nowrap">
                  100 Repetition Shuttering Plywood
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Red Plywood Tab */}
            <TabsContent value="red" className="mt-4 md:mt-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <Image
                      src={redsp}
                      alt="Red Shuttering Plywood"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="pb-5">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4"><span className="text-primary">Red</span> Film Faced Shuttering Plywood</h3>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                      Inova Film Faced Shuttering Plywood - where engineering precision meets construction excellence.
                      Designed for superior performance, our multi-layered shuttering plywood delivers exceptional
                      durability and reliability for complex concrete forming challenges.
                    </p>

                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Thickness</span>
                          <span className="text-xs md:text-sm">12mm, 18mm</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Size</span>
                          <span className="text-xs md:text-sm">8' x 4'</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Reusability</span>
                          <span className="text-xs md:text-sm">20+ cycles</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Surface</span>
                          <span className="text-xs md:text-sm">120 GSM Film</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-10 md:mb-6">
                      <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Technical Specifications (IS : 4990)</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-[600px] w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="p-2 text-left border">Properties</th>
                              <th className="p-2 text-left border">Requirement</th>
                              <th className="p-2 text-left border">Test Results</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border">Moisture Content</td>
                              <td className="p-2 border">5-15%</td>
                              <td className="p-2 border">8-10%</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Glue Shear Strength<br />Dry State<br />Wet State</td>
                              <td className="p-2 border">1350 N<br />1000 N</td>
                              <td className="p-2 border">1450 N<br />1250 N</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Water Resistance Test</td>
                              <td className="p-2 border">72 Hrs in Boiling Water</td>
                              <td className="p-2 border">Pass</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Tensile Strength<br />Along the Grain<br />Across the Grain</td>
                              <td className="p-2 border">42 N/mm²<br />25 N/mm²</td>
                              <td className="p-2 border">52 N/mm²<br />35 N/mm²</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <Link href="/Mirror Film faced Shuttering Plywood.pdf" target="_blank" className="rounded-lg bg-red-500 hover:bg-red-600 text-white w-full md:w-auto px-6 py-3 duration-200">
                      Download Brochure
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Black Plywood Tab */}
            <TabsContent value="black" className="mt-4 md:mt-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <Image
                      src={blacksp}
                      alt="Black Shuttering Plywood"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="pb-5">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Black Film Faced Shuttering Plywood</h3>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                      Inova Film Faced Shuttering Plywood - where engineering precision meets construction excellence.
                      Designed for superior performance, our multi-layered shuttering plywood delivers exceptional
                      durability and reliability for complex concrete forming challenges.
                    </p>

                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Thickness</span>
                          <span className="text-xs md:text-sm">12mm, 18mm</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Size</span>
                          <span className="text-xs md:text-sm">8' x 4'</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Reusability</span>
                          <span className="text-xs md:text-sm">20+ cycles</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Surface</span>
                          <span className="text-xs md:text-sm">145 GSM Film</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-10 md:mb-6">
                      <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Technical Specifications (IS : 4990)</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-[600px] w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="p-2 text-left border">Properties</th>
                              <th className="p-2 text-left border">Requirement</th>
                              <th className="p-2 text-left border">Test Results</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border">Moisture Content</td>
                              <td className="p-2 border">5-15%</td>
                              <td className="p-2 border">7-8%</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Glue Shear Strength<br />Dry State<br />Wet State</td>
                              <td className="p-2 border">1350 N<br />1000 N</td>
                              <td className="p-2 border">1450 N<br />1250 N</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Water Resistance Test</td>
                              <td className="p-2 border">72 Hrs in Boiling Water</td>
                              <td className="p-2 border">Pass</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Tensile Strength<br />Along the Grain<br />Across the Grain</td>
                              <td className="p-2 border">42 N/mm²<br />25 N/mm²</td>
                              <td className="p-2 border">52 N/mm²<br />35 N/mm²</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <Link href="/Mirror Film faced Shuttering Plywood.pdf" target="_blank" className="rounded-lg bg-black hover:bg-gray-700 text-white w-full md:w-auto px-6 py-3 duration-200">
                      Download Brochure
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Metallic Plywood Tab */}
            <TabsContent value="metallic" className="mt-4 md:mt-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <Image
                      src={metallic}
                      alt="Metallic Shuttering Plywood"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="pb-5">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Zipco Metallic Shuttering Plywood</h3>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                      Revolutionizing concrete formwork with advanced aluminum-zinc alloy coating, Zipco Metallic Plywood delivers
                      atleast 4x greater abrasion resistance than traditional options. Engineered for heavy-duty reuse cycles.
                    </p>

                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Thickness</span>
                          <span className="text-xs md:text-sm">12mm, 18mm</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Size</span>
                          <span className="text-xs md:text-sm">8' x 4'</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Reusability</span>
                          <span className="text-xs md:text-sm">70+ cycles</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Coating</span>
                          <span className="text-xs md:text-sm">Aluminum-Zinc</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-10 md:mb-6">
                      <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Performance Superiority</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-[600px] w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="p-2 border">Parameter</th>
                              <th className="p-2 border">Traditional</th>
                              <th className="p-2 border">Zipco Metallic</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border">Max Reuse Cycles</td>
                              <td className="p-2 border">25</td>
                              <td className="p-2 border font-semibold text-green-700">70+</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Abrasion Resistance</td>
                              <td className="p-2 border">2,000 cycles</td>
                              <td className="p-2 border font-semibold text-green-700">15,000 cycles</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Chemical Resistance</td>
                              <td className="p-2 border">Moderate</td>
                              <td className="p-2 border font-semibold text-green-700">High</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <Link href="/Zipco Metallic Shuttering Plywood.pdf" target="_blank" className="rounded-lg bg-red-500 text-white hover:bg-red-600 w-full md:w-auto px-6 py-3 duration-200">
                      View Brochure
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* 100 Repetition Plywood Tab */}
            <TabsContent value="repetition" className="mt-4 md:mt-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <Image
                      src={repetition}
                      alt="100 Repetition Shuttering Plywood"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="pb-5">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">100 Repetition Jute Shuttering Plywood</h3>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                      Engineered with triple-layered jute reinforcement and advanced phenolic resins, our eco-friendly shuttering solution
                      delivers 135% of metallic plywood's performance. Certified biodegradable core with 95+ reuse cycles.
                    </p>

                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Thickness</span>
                          <span className="text-xs md:text-sm">12mm, 18mm</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Core Material</span>
                          <span className="text-xs md:text-sm">Grade A Jute</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Reusability</span>
                          <span className="text-xs md:text-sm">95+ cycles</span>
                        </div>
                        <div className="bg-gray-100 p-2 md:p-3 rounded">
                          <span className="font-semibold block text-xs md:text-sm">Certifications</span>
                          <span className="text-xs md:text-sm">FSC, ISO 14001</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-10 md:mb-6">
                      <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Performance Advantages</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-[600px] w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="p-2 border">Parameter</th>
                              <th className="p-2 border">Metallic</th>
                              <th className="p-2 border">Jute Advantage</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border">Max Reuse Cycles</td>
                              <td className="p-2 border">70</td>
                              <td className="p-2 border font-semibold text-green-700">95+</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Water Resistance</td>
                              <td className="p-2 border">72 hrs</td>
                              <td className="p-2 border font-semibold text-green-700">120 hrs</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Tensile Strength</td>
                              <td className="p-2 border">52 N/mm²</td>
                              <td className="p-2 border font-semibold text-green-700">70 N/mm²</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <Link href="/Zipco Metallic Shuttering Plywood.pdf" target="_blank" className="rounded-lg bg-red-500 text-white hover:bg-red-600 w-full md:w-auto px-6 py-3 duration-200">
                      View Brochure
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container text-center px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Order?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact our sales team for quotes, custom specifications, or to place an order for our premium shuttering
            plywood products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link href="/contact">
              <Button className="bg-white text-red-600 hover:bg-gray-100 w-full sm:w-auto">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}