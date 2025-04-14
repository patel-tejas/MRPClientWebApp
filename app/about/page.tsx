import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600">Make Your Dream Come True & Grow With United Timber Works</p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Manufacturing Facility"
                  width={300}
                  height={400}
                  className="rounded-lg h-full object-cover"
                />
              </div>
              <div className="grid gap-4">
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
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Welcome to United Timber Works</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Welcome to United Timber Works, the epitome of excellence and innovation in the realm of shuttering
                  plywood solutions. With a rich tapestry of brands and a robust manufacturing infrastructure, we stand
                  as a beacon of quality and reliability in the construction and logistics industries.
                </p>
                <p className="mb-4">
                  At the heart of our operations lies our state-of-the-art 8.5-acre manufacturing facilities nestled in
                  Yamuna Nagar, Haryana. Equipped with cutting-edge technology and automated processes, our facilities
                  churn out a myriad of superior plywood products under our esteemed brands: UTW, Continental, Eveready,
                  Majestic, and Express.
                </p>
                <p>
                  Each brand embodies a distinct ethos, catering to diverse customer preferences and project
                  requirements with precision and finesse. Our commitment to excellence extends beyond manufacturing
                  with immense pride in our expansive distribution network comprising over 75 active dealers spread
                  across India.
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
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-amber-400 mr-2" />
                Uncompromising Quality
              </h3>
              <p className="text-gray-300">
                At United Timber Works, we go above and beyond the call of duty by providing not just goods but also a
                collaboration that guarantees your project's success. Our dedication to quality goes far beyond the
                product itself.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-amber-400 mr-2" />
                Innovative Solutions
              </h3>
              <p className="text-gray-300">
                We continuously invest in research and development to bring innovative solutions to the construction
                industry, ensuring our products meet the evolving needs of our clients.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-amber-400 mr-2" />
                Extensive Experience
              </h3>
              <p className="text-gray-300">
                With decades of experience in the industry, we have developed deep expertise in plywood manufacturing
                and understand the unique challenges faced by construction professionals.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-amber-400 mr-2" />
                Customer-Centric Approach
              </h3>
              <p className="text-gray-300">
                We place our customers at the center of everything we do, offering personalized solutions, responsive
                service, and ongoing support to ensure complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                  className="h-8 w-8"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m7 10 3 3 7-7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We are committed to delivering products of the highest quality that exceed industry standards and
                customer expectations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                  className="h-8 w-8"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-600">
                Our customers can depend on us to deliver on our promises, whether it's product quality, delivery
                timelines, or after-sales support.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-amber-400 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                  className="h-8 w-8"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M4.93 4.93 19.07 19.07"></path>
                  <path d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously strive to innovate and improve our products and processes to better serve our customers
                and stay ahead in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
