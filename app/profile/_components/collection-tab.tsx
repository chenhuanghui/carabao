"use client"
import { z } from "zod";
import { useState, useEffect } from "react";
import { Plus, File, Pencil, Trash2, Save, X, Link, Facebook, Music } from 'lucide-react';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Collection {
    id: string;
    url: string;
    platform: string;
}

const urlSchema = z.string().url().refine(
    (url) => url.includes('facebook.com') || url.includes('tiktok.com'),
    { message: "Only Facebook and TikTok URLs are allowed" }
);

const CollectionTab: React.FC = () => {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [newUrl, setNewUrl] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch collections from the backend
        // This is a placeholder, replace with actual API call
        const fetchCollections = async () => {
            // Simulated API call
            const response = await Promise.resolve([
                { id: '1', url: 'https://facebook.com/post/123456', platform: 'facebook' },
                { id: '2', url: 'https://tiktok.com/videos/123abc', platform: 'tiktok' },
            ]);
            setCollections(response);
        };

        fetchCollections();
    }, []);

    const handleAddCollection = () => {
        try {
            const validatedUrl = urlSchema.parse(newUrl);
            const platform = getPlatform(validatedUrl);
            setCollections([...collections, { id: Date.now().toString(), url: validatedUrl, platform }]);
            setNewUrl('');
            setError(null);
        } catch (err) {
            if (err instanceof z.ZodError) {
                setError(err.errors[0].message);
            } else {
                setError("An unexpected error occurred");
            }
        }
    };

    const handleEditCollection = (id: string, url: string) => {
        setEditingId(id);
        setNewUrl(url);
        setError(null);
    };

    const handleSaveEdit = (id: string) => {
        try {
            const validatedUrl = urlSchema.parse(newUrl);
            const platform = getPlatform(validatedUrl);
            setCollections(collections.map(c =>
                c.id === id ? { ...c, url: validatedUrl, platform } : c
            ));
            setEditingId(null);
            setNewUrl('');
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
        setNewUrl('');
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
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                            <Input
                                placeholder="Enter Facebook or TikTok URL"
                                value={newUrl}
                                onChange={(e) => setNewUrl(e.target.value)}
                                className="text-sm"
                            />
                            <Button onClick={handleAddCollection} className="text-sm">
                                <Plus size={14} className="mr-2" /> Add
                            </Button>
                        </div>
                        {error && <p className="text-red-500 text-xs md:text-sm">{error}</p>}
                    </div>
                    <ul className="space-y-2">
                        {collections.map((collection) => (
                            <li key={collection.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 bg-gray-100 rounded text-sm">
                                {editingId === collection.id ? (
                                    <>
                                        <Input
                                            value={newUrl}
                                            onChange={(e) => setNewUrl(e.target.value)}
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
                                        <div className="flex items-center space-x-2 flex-grow mb-2 md:mb-0">
                                            <Link size={14} />
                                            <a href={collection.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline truncate text-sm">
                                                {truncateUrl(collection.url)}
                                            </a>
                                            {getPlatformIcon(collection.platform)}
                                        </div>
                                        <div className="flex space-x-2">
                                            <Button onClick={() => handleEditCollection(collection.id, collection.url)} variant="outline" className="text-sm">
                                                <Pencil size={14} />
                                            </Button>
                                            <Button onClick={() => handleDeleteCollection(collection.id)} variant="outline" className="text-red-500 text-sm">
                                                <Trash2 size={14} />
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};

export default CollectionTab;
