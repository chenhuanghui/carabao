"use client"
import { z } from "zod";
import { useState, useEffect } from "react";
import { Plus, File, Pencil, Trash2, Save, X, Link, Facebook, Music } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast"

import { getCurrentUserCollections } from "@/actions/collection.action";
import { createCollection } from "@/actions/collection.action";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";

interface Collection {
    id: string;
    url: string;
    platform: string;
}

const urlSchema = z.string().url().refine(
    (url) => url.includes('facebook.com') || url.includes('tiktok.com'),
    { message: "Only Facebook and TikTok URLs are allowed" }
);

const formSchema = z.object({
    url: urlSchema,
});

const CollectionTab: React.FC<{ data: any }> = (data) => {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            url: '',
        },
    });

    const { data: fetchedCollections, isLoading, error: fetchError, refetch } = useQuery({
        queryKey: ['collections'],
        queryFn: () => getCurrentUserCollections(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    useEffect(() => {
        if (fetchedCollections) {
            setCollections(fetchedCollections);
        } else {
            setCollections([]);
        }
    }, [fetchedCollections]);

    if (isLoading) return <div>Loading...</div>;
    if (fetchError) return <div>An error occurred: {fetchError.message}</div>;


    const handleAddCollection = async (values: z.infer<typeof formSchema>) => {
        try {
            const platform = getPlatform(values.url);
            // Call createCollection to create a new collection for the current user
            const newCollection = await createCollection({
                url: values.url,
                platform: platform,
                userId: data.data.id // Assuming the user ID is passed in the data prop
            });

            if (newCollection) {
                // If the creation was successful, add the new collection to the state
                setCollections([...collections, newCollection]);
                // Refetch the collections to ensure we have the latest data
                refetch();
            } else {
                // If creation failed, set an error
                setError("Failed to create new collection");
            }
            setCollections([...collections, { id: Date.now().toString(), url: values.url, platform }]);
            form.reset();
            setError(null);
        } catch (err) {
            if (err instanceof z.ZodError) {
                setError(err.errors[0].message);
                toast.error(err.errors[0].message);
            } else {
                setError("An unexpected error occurred");
            }
        }
    };

    const handleEditCollection = (id: string, url: string) => {
        setEditingId(id);
        form.setValue('url', url);
        setError(null);
    };

    const handleSaveEdit = (id: string) => {
        try {
            const values = form.getValues();
            const platform = getPlatform(values.url);
            setCollections(collections.map(c =>
                c.id === id ? { ...c, url: values.url, platform } : c
            ));
            setEditingId(null);
            form.reset();
            setError(null);
        } catch (err) {
            if (err instanceof z.ZodError) {
                setError(err.errors[0].message);
            } else {
                setError("An unexpected error occurred");
            }
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        form.reset();
        setError(null);
    };

    const handleDeleteCollection = (id: string) => {
        setCollections(collections.filter(c => c.id !== id));
    };

    const getPlatform = (url: string): string => {
        if (url.includes('facebook')) return 'facebook';
        if (url.includes('tiktok')) return 'tiktok';
        return 'other';
    };

    const getPlatformIcon = (platform: string) => {
        switch (platform) {
            case 'facebook': return <Facebook size={14} />;
            case 'tiktok': return <Music size={14} />;
            default: return null;
        }
    };

    const truncateUrl = (url: string, maxLength: number = 30) => {
        return url.length > maxLength ? url.substring(0, maxLength) + '...' : url;
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-1 text-xl md:text-2xl font-phudu">
                        <File size={24} />
                        Bộ sưu tập
                    </div>
                    <span className="text-xs md:text-sm font-normal font-pathwayExtreme">Bạn sở hữu <span className="text-green-600 font-semibold">{collections.length}</span> nội dung sáng tạo</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex flex-col space-y-2">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleAddCollection)} className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                                <FormField
                                    control={form.control}
                                    name="url"
                                    render={({ field }) => (
                                        <FormItem className="flex-grow">
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Enter Facebook or TikTok URL"
                                                    className="text-sm"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="text-sm">
                                    <Plus size={14} className="mr-2" /> Add
                                </Button>
                            </form>
                        </Form>
                        {error && <p className="text-red-500 text-xs md:text-sm">{error}</p>}
                    </div>
                    {(!collections || collections.length === 0)
                        ? (
                            <div className="text-center text-gray-500 text-sm">
                                <p>Bạn chưa có nội dung sáng tạo nào.</p>
                                <p>Hãy thêm một nội dung sáng tạo cùng Carabao để bắt đầu.</p>
                            </div>
                        )
                        : (
                            <ul className="space-y-2">
                                {collections.map((collection) => (
                                    <li key={collection.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 bg-gray-100 rounded text-sm">
                                        {editingId === collection.id ? (
                                            <>
                                                <Input
                                                    {...form.register('url')}
                                                    className="mr-2 flex-grow mb-2 md:mb-0 text-sm"
                                                />
                                                <div className="flex space-x-2">
                                                    <Button onClick={() => handleSaveEdit(collection.id)} className="text-sm">
                                                        <Save size={14} />
                                                    </Button>
                                                    <Button onClick={handleCancelEdit} variant="outline" className="text-sm">
                                                        <X size={14} />
                                                    </Button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex items-center space-x-2 flex-grow mb-2 md:mb-0 justify-between">
                                                    <div className="flex items-center gap-1 w-full">
                                                        <Link size={14} />
                                                        <a href={collection.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 w-full hover:underline truncate text-sm">
                                                            {truncateUrl(collection.url)}
                                                        </a>
                                                    </div>
                                                    {getPlatformIcon(collection.platform)}
                                                </div>
                                                {/* <div className="flex space-x-2">
                                                    <Button onClick={() => handleEditCollection(collection.id, collection.url)} variant="outline" className="text-sm">
                                                        <Pencil size={14} />
                                                    </Button>
                                                    <Button onClick={() => handleDeleteCollection(collection.id)} variant="outline" className="text-red-500 text-sm">
                                                        <Trash2 size={14} />
                                                    </Button>
                                                </div> */}
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )
                    }

                </div>
            </CardContent>
        </Card>
    );
};

export default CollectionTab;
