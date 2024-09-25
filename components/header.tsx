"use client"

import React from 'react';
import Image from 'next/image';
import { auth, useUser } from '@cabin-id/nextjs';

import UserNav from '@/components/user-nav';
import AccessButton from '@/components/ui/access-button';
import Link from 'next/link';

const Header: React.FC = () => {
    const { user, isSignedIn, signOut } = useUser();

    return (
        <header className="w-full flex justify-between items-center p-4 bg-green-800">
            <Link href="/" className='flex items-center space-x-2 justify-center'>
                <Image
                    src="/assets/icons/carabao-logo.svg"
                    alt="Carabao Logo"
                    width={50}
                    height={50}
                />
                <span className="text-xl font-bold text-white font-phudu hidden md:block">Carabao Việt Nam</span>
            </Link>
            <div className="flex items-center space-x-4">
                {/* <span>English</span>
                <span>U</span> */}
                {/* <Button 
                    className="font-phudu rounded-full bg-green-700 text-xs font-light"
                    onClick={() => {
                        window.location.href = `https://carabao.cabinid.dev/sign-in?redirect_uri=${window.location.href}`
                    }}
                >
                    Truy cập Tài Khoản
                    <Image
                        src="/assets/icons/carabao-logo.svg"
                        alt="Carabao Logo"
                        width={30}
                        height={30}
                        className='ml-2'
                    />
                </Button> */}
                {user && isSignedIn
                    ? (
                        <UserNav />
                    )
                    : (
                        <AccessButton />
                    )}
            </div>
        </header>
    );
};

export default Header;
