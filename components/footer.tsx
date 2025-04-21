import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { CiGlobe } from "react-icons/ci";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MRP EXIM PRODUCTS</h3>
            <p className="text-neutral-300 mb-4">
              Leading manufacturer of high-quality shuttering plywood and pallets.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.mrpeximproducts.com" target="_blank" className="text-white hover:text-primary">
                <CiGlobe size={20} />
                <span className="sr-only">Website</span>
              </Link>

              <Link href="https://www.facebook.com/profile.php?id=61571205058254&mibextid=ZbWKwL" target="_blank" className="text-white hover:text-primary">
                <FaFacebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://x.com/MrpEximProducts" target="_blank" className="text-white hover:text-primary">
                <FaTwitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/mrp_exim_products/" target="_blank" className="text-white hover:text-primary">
                <FaInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/in/mrp-exim-products-072993338/" className="text-white hover:text-primary" target="_blank">
                <FaLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-primary">
                  About Us
                </Link>
              </li>


              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/shuttering" className="text-neutral-300 hover:text-primary">
                  Shuttering Plywood
                </Link>
              </li>
              <li>
                <Link href="/products/fly-ash-brick-pallet" className="text-neutral-300 hover:text-primary">
                  Fly Ash Brick Pallet
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-10 w-10 text-primary" />
                <span className="text-neutral-300">21- Shubh Labh Society, Near Nirnaynagar, Ghatloadia, Ahmedabad, Gujarat, India.</span>
              </li>
              <li className="flex ">
                <Phone className="mr-2 h-5 w-5 text-primary " />
                <div className="flex flex-col gap-1">
                  <span className="text-neutral-300">+91 78740 75811</span>
                  <span className="text-neutral-300">+91 87808 25809</span>
                </div>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <Link href="mailto:mrpeximproducts@gmail.com" className="text-neutral-300">mrpeximproducts@gmail.com</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>© {new Date().getFullYear()} MRP EXIM PRODUCTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
