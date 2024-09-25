"use client"

import { useState } from "react";
import { UserCog, Image } from 'lucide-react';

import Section from "@/components/section";
import Header from '@/components/header';

import ProfileTab from "./_components/profile-tab";
import CollectionTab from "./_components/collection-tab";

const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'profile' | 'collection'>('collection');

    return (
        <div className="profile-wrapper">
            <Header />
            <Section className="bg-[#eee] min-h-screen font-pathwayExtreme">
                <div className="profile-content flex h-full">
                    {/* Left column: Navigation */}
                    <div className="profile-nav w-1/4 pr-4 border-r-2 border-gray-300">
                        <button
                            className={`flex items-center w-full text-left p-2 ${activeTab === 'collection' ? 'bg-gray-200' : ''}`}
                            onClick={() => setActiveTab('collection')}
                        >
                            <Image className="mr-2" size={18} />
                            Bộ sưu tập sáng tạo
                        </button>
                        <button
                            className={`flex items-center w-full text-left p-2 mb-2 ${activeTab === 'profile' ? 'bg-gray-200' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <UserCog className="mr-2" size={18} />
                            Thông tin cá nhân
                        </button>
                    </div>

                    {/* Right column: Content */}
                    <div className="profile-content w-3/4 pl-4">
                        {activeTab !== 'profile' ? (
                            <div className="creative-collection">
                                <CollectionTab />
                                {/* Add your list of social links here */}
                            </div>

                        ) : (
                            <div className="edit-profile">
                                <ProfileTab />
                                {/* Add your profile editing form here */}
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default ProfilePage;