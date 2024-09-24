"use client"

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AccessButton from '@/components/ui/access-button';
const Header: React.FC = () => {
    return (
        <header className="w-full flex justify-between items-center p-4 bg-black">
            <div className="flex items-center space-x-2 justify-center">
                <Image
                    src="/assets/icons/carabao-logo.svg"
                    alt="Carabao Logo"
                    width={50}
                    height={50}
                />
                <span className="text-xl font-bold font-phudu hidden md:block">Carabao Việt Nam</span>
            </div>
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
                <AccessButton/>
            </div>
        </header>
    );
};

export default Header;
