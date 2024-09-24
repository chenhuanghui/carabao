"use client"

import React from 'react';
import { useState } from "react"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Section from './section';

interface FAQProps {
    onOpenSocialPostModal: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onOpenSocialPostModal }: FAQProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: "Làm sao để tham gia trò chơi trúng thưởng của Carabao?",
            answer: "Rất đơn giản! Chỉ cần bạn sáng tạo nội dung vui nhộn, thú vị với nước tăng lực Carabao (hình ảnh hoặc video), đăng lên TikTok hay Facebook kèm hashtag #CarabaoVietNam và #DiThaiLanKhongKho. Sau đó, vào trang web carabao.vn, nhập đường link bài đăng của bạn. Vậy là xong!"
        },
        {
            question: "Mình có thể tăng cơ hội trúng giải không?",
            answer: "Chắc chắn rồi! Mỗi bài đăng hợp lệ, cơ hội trúng vé đi Thái Lan của bạn sẽ cao hơn. Tham gia càng nhiều, nội dung càng sáng tạo, xác suất trúng giải càng lớn!"
        },
        {
            question: "Carabao chọn người trúng giải như thế nào?",
            answer: "Tụi mình sẽ quay số may mắn từ tất cả các bài đăng hợp lệ. Mỗi bài đăng hợp lệ là một cơ hội vào vòng quay, vậy nên cứ đăng nhiều lên nhé!"
        },
        {
            question: "Thế nào là bài đăng hợp lệ?",
            answer: "Bài đăng hợp lệ là bài có sử dụng bất kỳ yếu tố hình ảnh hoặc sản phẩm của Carabao. Chỉ cần bạn chia sẻ niềm yêu thích với Carabao, đăng kèm hashtag #CarabaoVietNam và #DiThaiLanKhongKho, rồi nhập đường link bài đăng vào website carabao.vn là hợp lệ rồi!"
        },
        {
            question: "Mình có thể tham gia với nhiều bài đăng không?",
            answer: "Càng nhiều bài càng vui! Bạn có thể tham gia nhiều lần. Mỗi bài hợp lệ đều giúp tăng cơ hội trúng giải. Tham gia thật nhiều, cơ hội đi Thái Lan là của bạn!"
        }
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <Section className="bg-[#cee6e5] text-black md:w-svw md:py-20 py-10 font-pathwayExtreme">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center">
                <div className="mb-8 lg:col-span-1">
                    <h2 className="text-3xl md:text-5xl font-bold">FAQs</h2>
                    <p className="text-sm text-gray-600">Dưới đây là những câu hỏi thường gặp về cách tham gia và cơ hội trúng thưởng trong chương trình
                        <span className='text-green-500 font-semibold'> "Sáng tạo cùng Carabao Trúng Vé Đi Thái” </span>
                        của chúng tôi.</p>
                    <Button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-5"
                        onClick={onOpenSocialPostModal}
                    >
                        Tham Gia Ngay
                    </Button>
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
