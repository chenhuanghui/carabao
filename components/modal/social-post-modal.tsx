"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { SubmitHandler } from 'react-hook-form';

import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { cn } from "@/lib/utils"

// Define the form schema
const formSchema = z.object({
    socialLink: z.string().url("Please enter a valid URL").min(1, "Social link is required"),
})

interface SocialPostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}


export const SocialPostModal = ({
    isOpen = false,
    onClose,
    onSuccess
}: SocialPostModalProps) => {

    // Initialize the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            socialLink: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        // handle form data
        console.log(data);
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        <Modal
            isOpen={isOpen}
            title="Thêm vào bộ sưu tập sáng tạo của bạn!"
            description="Dán link bài đăng mạng xã hội vào đây để tham gia ngay cùng Carabao và tăng cơ hội nhận vé du lịch Thái Lan miễn phí. Đừng bỏ lỡ!"
            onClose={onClose}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-0">
                    <FormField
                        control={form.control}
                        name="socialLink"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-pathwayExtreme">TikTok URL / Facebook URL</FormLabel>
                                <FormControl>
                                    <Input
                                        className=""
                                        placeholder="Nhập link của bạn ở đây"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="font-phudu bg-green-500 hover:bg-green-600">Submit</Button>
                </form>
            </Form>
        </Modal >
    )
}