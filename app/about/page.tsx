import Image from "next/image"
import { CheckCircle } from "lucide-react"
import about from "@/public/about.avif"

export const metadata = {
  title: 'About Us – MRP Exim Products',
  description: 'We are a leading manufacturer of high quality shuttering plywood and fly ash brick pallets. Our products are designed to meet the demands of modern construction projects, offering durability and cost-effectiveness.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600">Elevating Construction with Innovation & Reliability</p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Image
                  src={about}
                  alt="Manufacturing Facility"
                  width={800}
                  height={400}
                  className="rounded-lg h-full object-cover"
                />
              </div>
              {/* <div className="grid gap-4">
                <Image
                  src="/placeholder.svg?height=190&width=300"
                  alt="Production Line"
                  width={300}
                  height={190}
                  className="rounded-lg h-full object-cover"
                />
                <Image
                  src="/placeholder.svg?height=190&width=300"
                  alt="Quality Testing"
                  width={300}
                  height={190}
                  className="rounded-lg h-full object-cover"
                />
              </div> */}
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Welcome to MRP EXIM PRODUCTS</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  MRP EXIM PRODUCTS is a leading manufacturer of high-performance plywood products. We serve industries
                  like construction, transport, and manufacturing with reliable, durable, and long-lasting solutions.
                </p>
                <p className="mb-4">
                  With advanced manufacturing capabilities and a deep focus on quality, we ensure our products meet the
                  toughest performance standards. Our ZIPCO brand reflects our commitment to innovation, offering
                  metallic film-faced shuttering plywood engineered for abrasion resistance, waterproofing, and long-term
                  use.
                </p>
                <p>
                  Sustainability and innovation are core to our identity. We aim to reduce environmental impact through
                  smarter materials, while supporting long-term project efficiency and durability for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-neutral-900 to-blue-950 text-white mb-16">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Superior Performance",
                text: "Our plywood solutions are engineered to perform in the most demanding construction environments, offering unmatched durability and reusability.",
              },
              {
                title: "Cost-Effective",
                text: "ZIPCO plywood saves costs over time due to its longevity and reduced replacement needs—ideal for high-scale, long-term projects.",
              },
              {
                title: "Advanced Technology",
                text: "We leverage cutting-edge technologies and high-grade materials including metallic coatings to enhance strength and lifespan.",
              },
              {
                title: "Customer-Centric Support",
                text: "We deliver not just products but also support. Our responsive service and dealer network ensure you’re always backed by expertise.",
              },
            ].map(({ title, text }, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-amber-400 mr-2" />
                  {title}
                </h3>
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Durability",
                color: "bg-red-600 text-white",
                text: "We build long-lasting products designed for repeated use under tough conditions, helping customers reduce waste and save costs.",
              },
              {
                title: "Reliability",
                color: "bg-blue-900 text-white",
                text: "From production to delivery, MRP EXIM PRODUCTS stands for dependability, consistency, and customer trust.",
              },
              {
                title: "Sustainability",
                color: "bg-amber-400 text-black",
                text: "We develop solutions that reduce environmental impact while improving the performance of your project.",
              },
            ].map(({ title, color, text }, index) => (
              <div key={index} className="text-center p-6">
                <div className={`${color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
