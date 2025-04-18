"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { SiWhatsapp } from "react-icons/si"
import { HiOutlineMail } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import { BsFillChatDotsFill, BsX } from "react-icons/bs"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function FloatingContactButton() {
    const [isExpanded, setIsExpanded] = useState(false)

    const contacts = [
        {
            icon: <SiWhatsapp />,
            tooltip: "Enquire on WhatsApp",
            href: "https://wa.me/917874075811?text=Hello%20MRP%20Exim%20Products",
            color: "bg-green-600 hover:bg-green-700",
        },
        {
            icon: <HiOutlineMail />,
            tooltip: "Send us an Email",
            href: "mailto:mrpeximproducts@gmail.com",
            color: "bg-red-500 hover:bg-red-600",
        },
        {
            icon: <FaPhoneAlt />,
            tooltip: "Call Us Now",
            href: "tel:+917874075811",
            color: "bg-blue-400 hover:bg-blue-500",
        },
    ]

    return (
        <TooltipProvider>
            <div className="fixed bottom-6 right-6 z-50">
                <div className="relative">
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="absolute bottom-full right-0 mb-3 space-y-3"
                            >
                                {contacts.map((contact, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={contact.href}
                                                    target="_blank"
                                                    className={`${contact.color} flex items-center justify-center p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl`}
                                                >
                                                    <span className="text-white text-3xl">
                                                        {contact.icon}
                                                    </span>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side="left" className="bg-white border border-gray-300 shadow-lg rounded-md p-2 text-sm text-gray-700">
                                                <p>{contact.tooltip}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="bg-primary dark:bg-gray-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isExpanded ? "close" : "chat"}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-3xl"
                            >
                                {isExpanded ? (
                                    <BsX className="text-3xl" />
                                ) : (
                                    <BsFillChatDotsFill className="text-3xl" />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>
        </TooltipProvider>
    )
}