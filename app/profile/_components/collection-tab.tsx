"use client"

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Save, X, Link, Instagram, Twitter, Facebook, Youtube, Music, Globe } from 'lucide-react';

interface Collection {
    id: string;
    url: string;
    platform: string;
}

const CollectionTab: React.FC = () => {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [newUrl, setNewUrl] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        // Fetch collections from the backend
        // This is a placeholder, replace with actual API call
        const fetchCollections = async () => {
            // Simulated API call
            const response = await Promise.resolve([
                { id: '1', url: 'https://instagram.com/user', platform: 'instagram' },
                { id: '2', url: 'https://twitter.com/user', platform: 'twitter' },
            ]);
            setCollections(response);
        };

        fetchCollections();
    }, []);

    const handleAddCollection = () => {
        if (newUrl) {
            const platform = getPlatform(newUrl);
            setCollections([...collections, { id: Date.now().toString(), url: newUrl, platform }]);
            setNewUrl('');
        }
    };

    const handleEditCollection = (id: string, url: string) => {
        setEditingId(id);
        setNewUrl(url);
    };

    const handleSaveEdit = (id: string) => {
        setCollections(collections.map(c => 
            c.id === id ? { ...c, url: newUrl, platform: getPlatform(newUrl) } : c
        ));
        setEditingId(null);
        setNewUrl('');
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setNewUrl('');
    };

    const handleDeleteCollection = (id: string) => {
        setCollections(collections.filter(c => c.id !== id));
    };

    const getPlatform = (url: string): string => {
        if (url.includes('instagram')) return 'instagram';
        if (url.includes('twitter')) return 'twitter';
        if (url.includes('facebook')) return 'facebook';
        if (url.includes('youtube')) return 'youtube';
        if (url.includes('tiktok')) return 'tiktok';
        return 'other';
    };

    const getPlatformIcon = (platform: string) => {
        switch (platform) {
            case 'instagram': return <Instagram size={16} />;
            case 'twitter': return <Twitter size={16} />;
            case 'facebook': return <Facebook size={16} />;
            case 'youtube': return <Youtube size={16} />;
            case 'tiktok': return <Music size={16} />;
            default: return <Globe size={16} />;
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="flex flex-col items-start gap-1">
                    <h1 className="text-2xl font-phudu">Bộ sưu tập</h1>
                    <span className="text-sm font-normal">Bạn sở hữu <span className="text-green-600 font-semibold">{collections.length}</span>  nội dung sáng tạo</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex space-x-2">
                        <Input
                            placeholder="Enter URL"
                            value={newUrl}
                            onChange={(e) => setNewUrl(e.target.value)}
                        />
                        <Button onClick={handleAddCollection}>
                            <Plus size={16} className="mr-2" /> Add
                        </Button>
                    </div>
                    <ul className="space-y-2">
                        {collections.map((collection) => (
                            <li key={collection.id} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                                {editingId === collection.id ? (
                                    <>
                                        <Input
                                            value={newUrl}
                                            onChange={(e) => setNewUrl(e.target.value)}
                                            className="mr-2 flex-grow"
                                        />
                                        <Button onClick={() => handleSaveEdit(collection.id)} className="mr-2">
                                            <Save size={16} />
                                        </Button>
                                        <Button onClick={handleCancelEdit} variant="outline">
                                            <X size={16} />
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center space-x-2 flex-grow">
                                            <Link size={16} />
                                            <a href={collection.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline truncate">
                                                {collection.url}
                                            </a>
                                            {getPlatformIcon(collection.platform)}
                                        </div>
                                        <div>
                                            <Button onClick={() => handleEditCollection(collection.id, collection.url)} variant="outline" className="mr-2">
                                                <Pencil size={16} />
                                            </Button>
                                            <Button onClick={() => handleDeleteCollection(collection.id)} variant="outline" className="text-red-500">
                                                <Trash2 size={16} />
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
