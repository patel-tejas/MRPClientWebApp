import type React from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: 'Contact – MRP Exim Products',
  description: 'Get in touch with us for inquiries, support, or partnership opportunities. We are here to assist you with your pallet or shuttering plywood needs.',
}

export default function ContactPage() {
  

  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with our team for inquiries, support, or partnership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-2 sm:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-900 text-white p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">21- Shubh Labh Society, Near Nirnaynagar, Ghatloadia, Ahmedabad, Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900 text-white p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 ">Phone Number</h3>
                    <Link href="tel:+917874075811" className="text-gray-600 block">+91 78740 75811</Link>
                    <Link href="tel:+918780825809" className="text-gray-600">+91 87808 25809</Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900 text-white p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                    <Link href="mailto:mrpeximproducts@gmail.com" className="text-gray-600">mrpeximproducts@gmail.com</Link>

                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900 text-white p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 container px-4 md:px-6 mx-auto overflow-hidden">
                <div className="relative w-full overflow-hidden pb-[56.25%] h-0 rounded-lg shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6943490238946!2d72.55474487455672!3d23.071664714495814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83b5af1a29d9%3A0x20cb6258c070d3!2sMRP%20EXIM%20PRODUCTS!5e0!3m2!1sen!2sin!4v1745044574219!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
