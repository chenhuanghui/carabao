"use client"

import { useState, FormEvent, ChangeEvent } from "react";
import { UserCog, Upload, Phone } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfileTab: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        bio: '',
        phoneNumber: '',
    });
    const [avatar, setAvatar] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setAvatar(file);
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', { ...formData, avatar });
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center">
                    <UserCog className="mr-2" size={24} />
                    Edit Profile
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="avatar">Avatar</Label>
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
                                        id="avatar"
                                        accept="image/*"
                                        onChange={handleAvatarChange}
                                        className="hidden"
                                    />
                                </label>
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <div className="flex items-center">
                            <Phone className="mr-2" size={18} />
                            <Input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            rows={4}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Update Profile
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default ProfileTab;