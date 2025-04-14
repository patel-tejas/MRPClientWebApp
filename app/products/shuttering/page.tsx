import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"
import redsp from "@/public/redsp.jpg"
import blacksp from "@/public/blacksp.jpg"
import repetition from "@/public/repetition.jpg"
import metallic from "@/public/metallic.jpg"
export default function ShutteringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image src="/placeholder.svg?height=400&width=1920" alt="Shuttering Plywood" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
          <div className="container h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shuttering Plywood</h1>
              <p className="text-xl text-white/80 mb-6">Water Proof Mirror Finish Shuttering Options</p>
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
              <h2 className="text-3xl font-bold mb-6">Premium Shuttering Plywood</h2>
              <p className="text-gray-700 mb-4">
                Our shuttering plywood is designed for the most demanding construction projects, offering exceptional
                strength, durability, and water resistance. The film-faced surface ensures a smooth finish on concrete
                structures, while the high-density core provides outstanding load-bearing capacity.
              </p>
              <p className="text-gray-700 mb-6">
                Click on any of our top 5 waterproof shuttering brands to know more and don't forget to watch the
                product videos.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold">Superior Water Resistance</h3>
                    <p className="text-gray-600">Withstands exposure to moisture and water without delamination</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold">High Reusability</h3>
                    <p className="text-gray-600">Can be used multiple times, reducing overall project costs</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold">Smooth Concrete Finish</h3>
                    <p className="text-gray-600">
                      Provides excellent finish to concrete surfaces, minimizing post-work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Shuttering Plywood in Use"
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Shuttering Brands</h2>

          <Tabs defaultValue="red" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full h-auto mb-8">
              <TabsTrigger value="red" className="py-3">
                Red Shuttering Plywood
              </TabsTrigger>
              <TabsTrigger value="black" className="py-3">
                Black Shuttering Plywood
              </TabsTrigger>
              <TabsTrigger value="metallic" className="py-3">
                Metallic Shuttering Plywood
              </TabsTrigger>
              <TabsTrigger value="repetition" className="py-3">
                100 Repetition Shuttering Plywood
              </TabsTrigger>

            </TabsList>

            <TabsContent value="red" className="mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src={redsp}
                      alt="UTW Shuttering Plywood"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4"><span className="text-primary">Red</span> Film Faced Shuttering Plywood</h3>
                    <p className="text-gray-700 mb-4">
                      Inova Film Faced Shuttering Plywood - where engineering precision meets construction excellence.
                      Designed for superior performance, our multi-layered shuttering plywood delivers exceptional
                      durability and reliability for complex concrete forming challenges.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Thickness</span>
                          <span>12mm, 18mm</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Size</span>
                          <span>8' x 4'</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Reusability</span>
                          <span>20+ cycles</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Surface</span>
                          <span>120 GSM Film Coated</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Technical Specifications (IS : 4990)</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
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

                        <h5 className="font-semibold mt-4 mb-2">Static Bending</h5>
                        <table className="w-full border-collapse mb-4">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="p-2 border">Grade</th>
                              <th className="p-2 border">MOE (N/mm²)</th>
                              <th className="p-2 border">MOR (N/mm²)</th>
                              <th className="p-2 border">MOE (N/mm²)</th>
                              <th className="p-2 border">MOR (N/mm²)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border">Along the Grain</td>
                              <td className="p-2 border">7500</td>
                              <td className="p-2 border">50</td>
                              <td className="p-2 border">8300</td>
                              <td className="p-2 border">67</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Across the Grain</td>
                              <td className="p-2 border">4000</td>
                              <td className="p-2 border">30</td>
                              <td className="p-2 border">6000</td>
                              <td className="p-2 border">45</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-100 p-3 rounded">
                            <span className="font-semibold block">Available Sizes</span>
                            <span>8*4</span>
                          </div>
                          <div className="bg-gray-100 p-3 rounded">
                            <span className="font-semibold block">Weight Categories</span>
                            <span>30kg, 34kg, 45kg, 50kg</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700">Download Full Specification</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="black" className="mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src={blacksp}
                      alt="UTW Shuttering Plywood"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Black Film Faced Shuttering Plywood</h3>
                    <p className="text-gray-700 mb-4">
                      Inova Film Faced Shuttering Plywood - where engineering precision meets construction excellence.
                      Designed for superior performance, our multi-layered shuttering plywood delivers exceptional
                      durability and reliability for complex concrete forming challenges.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Thickness</span>
                          <span>12mm, 18mm</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Size</span>
                          <span>8' x 4'</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Reusability</span>
                          <span>20+ cycles</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Surface</span>
                          <span>145 GSM Film Coated</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Technical Specifications (IS : 4990)</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
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

                        <h5 className="font-semibold mt-4 mb-2">Static Bending</h5>
                        <table className="w-full border-collapse mb-4">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="p-2 border">Grade</th>
                              <th className="p-2 border">MOE (N/mm²)</th>
                              <th className="p-2 border">MOR (N/mm²)</th>
                              <th className="p-2 border">MOE (N/mm²)</th>
                              <th className="p-2 border">MOR (N/mm²)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border">Along the Grain</td>
                              <td className="p-2 border">7500</td>
                              <td className="p-2 border">50</td>
                              <td className="p-2 border">8300</td>
                              <td className="p-2 border">67</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Across the Grain</td>
                              <td className="p-2 border">4000</td>
                              <td className="p-2 border">30</td>
                              <td className="p-2 border">6000</td>
                              <td className="p-2 border">45</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-100 p-3 rounded">
                            <span className="font-semibold block">Available Sizes</span>
                            <span>8*4</span>
                          </div>
                          <div className="bg-gray-100 p-3 rounded">
                            <span className="font-semibold block">Weight Categories</span>
                            <span>30kg, 34kg, 45kg, 50kg</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700">Download Full Specification</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="metallic" className="mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
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
                      Revolutionizing concrete formwork with advanced aluminum-zinc alloy coating, Zipco Metallic Plywood delivers
                      atleast 4x greater abrasion resistance than traditional options. Engineered for heavy-duty reuse cycles, it maintains
                      pristine surface integrity through 70+ constructions while reducing per-use costs by 40%.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Thickness</span>
                          <span>12mm, 18mm</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Size</span>
                          <span>8' x 4'</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Reusability</span>
                          <span>70+ cycles</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Coating</span>
                          <span>Aluminum-Zinc Alloy</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Performance Superiority</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse mb-4">
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

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Core Advantages</h5>
                            <ul className="list-disc pl-4 space-y-2">
                              <li>150% Longer lifespan than standard plywood</li>
                              <li>Zero surface degradation over 50 uses</li>
                              <li>UV-resistant metallic coating</li>
                              <li>Withstands -20°C to 120°C</li>
                            </ul>
                          </div>
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Project Benefits</h5>
                            <ul className="list-disc pl-4 space-y-2">
                              <li>63% lower material waste</li>
                              <li>30% reduction in labor costs</li>
                              <li>ISO 9001 certified manufacturing</li>
                            </ul>
                          </div>
                        </div>

                        <h4 className="text-lg font-semibold mt-4 mb-3">Technical Specifications</h4>
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="p-2 border">Property</th>
                              <th className="p-2 border">Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border">Surface Hardness</td>
                              <td className="p-2 border">HB 85-90</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Coating Thickness</td>
                              <td className="p-2 border">45-50 microns</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Water Absorption</td>
                              <td className="p-2 border">≤5%</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Thermal Conductivity</td>
                              <td className="p-2 border">0.5 W/mK</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700 w-full md:w-auto">
                      Download Full Tech Specs
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="repetition" className="mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src={repetition}
                      alt="100 Repetition Jute Shuttering Plywood"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">100 Repetition Jute Shuttering Plywood</h3>
                    <p className="text-gray-700 mb-4">
                      Engineered with triple-layered jute reinforcement and advanced phenolic resins, our eco-friendly shuttering solution
                      delivers 135% of metallic plywood's performance. Certified biodegradable core with 95+ reuse cycles ensures
                      40% lower carbon footprint while maintaining structural integrity.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Performance Advantages</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse mb-4">
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

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Jute Superiority</h5>
                            <ul className="list-disc pl-4 space-y-2">
                              <li>35% higher load-bearing capacity</li>
                              <li>50% better chemical resistance</li>
                              <li>3x faster moisture wicking</li>
                              <li>Zero metallic corrosion</li>
                            </ul>
                          </div>
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">Eco Benefits</h5>
                            <ul className="list-disc pl-4 space-y-2">
                              <li>100% biodegradable core</li>
                              <li>45% recycled content</li>
                              <li>LEED certification compliant</li>
                              <li>Non-toxic phenolic treatment</li>
                            </ul>
                          </div>
                        </div>

                        <h4 className="text-lg font-semibold mt-4 mb-3">Technical Specifications</h4>
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="p-2 border">Property</th>
                              <th className="p-2 border">Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border">Jute Fiber Density</td>
                              <td className="p-2 border">380-400 gsm</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Phenolic Resin Content</td>
                              <td className="p-2 border">45-50%</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Water Absorption Rate</td>
                              <td className="p-2 border">≤2.5%</td>
                            </tr>
                            <tr>
                              <td className="p-2 border">Biodegradation Period</td>
                              <td className="p-2 border">18-24 months</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Thickness</span>
                          <span>12mm, 18mm</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Core Material</span>
                          <span>Grade A Jute Hybrid</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Reusability</span>
                          <span>95+ cycles</span>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                          <span className="font-semibold block">Certifications</span>
                          <span>FSC, ISO 14001</span>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                      Request Eco Audit Report
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our sales team for quotes, custom specifications, or to place an order for our premium shuttering
            plywood products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-red-600 hover:bg-gray-100">Request a Quote</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
