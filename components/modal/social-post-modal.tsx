"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import { createCollectionForCurrentUser } from "@/actions/collection.action"


// Define the form schema
const formSchema = z.object({
    url: z.string().url("Please enter a valid URL").refine(
        (url) => url.includes('facebook.com') || url.includes('tiktok.com'),
        { message: "Only Facebook and TikTok URLs are allowed" }
    ),
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
    const router = useRouter()

    // Initialize the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            url: "",
        },
    })

    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (values) => {
        try {
            const platform = values.url.includes('facebook.com') ? 'facebook' : 'tiktok'
            await createCollectionForCurrentUser({ ...values, platform })
            toast.success('Đã thêm vào Bộ sưu tập sáng tạo thành công')
            form.reset()
            onSuccess()
            router.replace('/profile')
        } catch (error) {
            console.error('Error creating collection:', error)
            toast.error('Failed to create collection')
        }
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
                        name="url"
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
        </Modal>
    )
}