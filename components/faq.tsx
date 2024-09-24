"use client"

import React from 'react';
import { useState } from "react"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Section from './section';

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: "Should I use TikTok Business Center if I have an ad account on TikTok?",
            answer: "Yes, here are some unique functionalities of the TikTok Business Center:\n\n- Invite multiple people to collaborate on campaigns and work together efficiently.\n- Stay ahead of the curve. Be the first to know about TikTok's latest and greatest solutions - brand building, performance marketing, e-commerce, creator, you name it.\n- Centralize all your business needs in one place.\n- Safeguard data and assets by managing access to your account."
        },
        {
            question: "What do I need to register for TikTok Business Center?",
            answer: "To register for TikTok Business Center, you need to provide your business details and follow the registration process on the Business Center website."
        },
        {
            question: "I am working with marketing agencies for my TikTok campaigns. How do I grant them access?",
            answer: "You can grant access to marketing agencies by inviting them to your TikTok Business Center and assigning them the appropriate roles and permissions."
        },
        {
            question: "How should I organize my Business Center to collaborate with my team?",
            answer: "Organize your Business Center by setting up different teams and assigning roles to team members based on their responsibilities. This will help streamline collaboration and ensure efficient management of your campaigns."
        }
    ]

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <Section className="bg-[#cee6e5] text-black md:w-svw md:py-20 py-10 font-pathwayExtreme">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center">
                <div className="mb-8 lg:col-span-1">
                    <h2 className="text-3xl md:text-5xl font-bold">FAQs</h2>
                    <p className="text-sm text-gray-600">Here are the most commonly asked questions about TikTok Business Center.</p>
                    <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-5">Visit Help Center</Button>
                </div>
                <div className="space-y-4 lg:col-span-2">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 pb-4">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-xl font-semibold">{faq.question}</h3>
                                <span className="text-2xl font-bold">
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <p className="text-gray-600 mt-4 whitespace-pre-line">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>

    )
}
export default FAQ;
