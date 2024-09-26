"use client"

import { useEffect, useState } from "react";
import { UserCog, Image } from 'lucide-react';

import Section from "@/components/section";
import Header from '@/components/header';

import ProfileTab from "./profile-tab";
import CollectionTab from "./collection-tab";


export default function ProfileClient({
    user
}: {
    user: any
}) {
    const [activeTab, setActiveTab] = useState<'profile' | 'collection'>('collection');
    useEffect(() => {
        console.log("ProfileClient");
    }, []);

    return (
        <div className="profile-wrapper">
            <Header />
            <Section className="bg-[#eee] min-h-screen font-pathwayExtreme">
                <div className="profile-content flex flex-col md:flex-row h-full">
                    {/* Navigation: Top on mobile, Left column on desktop */}
                    <div className="profile-nav w-full md:w-1/4 md:pr-4 md:border-r-2 md:border-gray-300">
                        <div className="flex md:flex-col">
                            <button
                                className={`flex items-center justify-center w-1/2 md:w-full text-left p-2 ${activeTab === 'collection' ? 'bg-gray-200' : ''}`}
                                onClick={() => setActiveTab('collection')}
                            >
                                <div className={`p-2 rounded-full ${activeTab === 'collection' ? 'bg-green-500 text-white' : ''}`}>
                                    <Image size={18} />
                                </div>
                                <span className="ml-2 hidden md:inline">Bộ sưu tập sáng tạo</span>
                            </button>
                            <button
                                className={`flex items-center justify-center w-1/2 md:w-full text-left p-2 mb-2 ${activeTab === 'profile' ? 'bg-gray-200' : ''}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                <div className={`p-2 rounded-full ${activeTab === 'profile' ? 'bg-green-500 text-white' : ''}`}>
                                    <UserCog size={18} />
                                </div>
                                <span className="ml-2 hidden md:inline">Thông tin cá nhân</span>
                            </button>
                        </div>
                    </div>

                    {/* Content: Below navigation on mobile, Right column on desktop */}
                    <div className="profile-content w-full md:w-3/4 md:pl-4 mt-4 md:mt-0">
                        {activeTab !== 'profile' ? (
                            <div className="creative-collection">
                                <CollectionTab data={user}/>
                                {/* Add your list of social links here */}
                            </div>

                        ) : (
                            <div className="edit-profile">
                                <ProfileTab data={user}/>
                                {/* Add your profile editing form here */}
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    )
}