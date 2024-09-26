"use client"

import * as z from "zod";
import { useState, ChangeEvent, useEffect } from "react";
import { UserCog, Upload, Phone } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

const formSchema = z.object({
    id: z.string(),
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address").optional().or(z.literal('')),
    bio: z.string().optional(),
    phoneNumber: z.string().optional(),
    avatar: z.string().url("Invalid avatar URL").nullable(),
});

const ProfileTab: React.FC<{ data: any }> = ({ data }) => {
    const [avatar, setAvatar] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: '',
            fullName: '',
            email: '',
            bio: '',
            phoneNumber: '',
            avatar: null,
        }
    });

    useEffect(() => {
        if (data) {
            const user = data;
            form.reset({
                id: user.id || '',
                fullName: user.name || '',
                email: user.email || '',
                bio: user.bio || '',
                phoneNumber: user.phone || '',
                avatar: user.avatar || null,
            });
            setAvatarPreview(user.avatar || null);
        }
    }, [data, form]);

    const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setAvatar(file);
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log('Form submitted:', data);
        // Handle form submission...
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="flex flex-col gap-1 items-start ">
                    <div className="flex items-center gap-1 text-xl md:text-2xl font-phudu">
                        <UserCog className="mr-2" size={24} />
                        Thông tin cá nhân
                    </div>
                    <span className="text-xs md:text-sm font-normal font-pathwayExtreme">Cập nhật thông tin cá nhân</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="avatar"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Avatar</FormLabel>
                                    <FormControl>
                                        <div className="flex items-center space-x-4">
                                            <Avatar className="w-20 h-20">
                                                {avatarPreview ? (
                                                    <AvatarImage src={avatarPreview} alt="Avatar preview" />
                                                ) : (
                                                    <AvatarFallback>CN</AvatarFallback>
                                                )}
                                            </Avatar>
                                            <Button variant="outline" className="cursor-pointer" asChild>
                                                <label>
                                                    <Upload className="mr-2" size={18} />
                                                    Upload Image
                                                    <Input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            field.onChange(e.target.files?.[0]);
                                                            handleAvatarChange(e);
                                                        }}
                                                        className="hidden"
                                                    />
                                                </label>
                                            </Button>
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <div className="flex items-center">
                                            <Phone className="mr-2" size={18} />
                                            <Input {...field} type="tel" />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} rows={4} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Update Profile
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default ProfileTab;