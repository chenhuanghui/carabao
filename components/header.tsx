"use client"

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
                <span className="text-xl font-bold">Carabao Việt Nam</span>
            </div>
            <div className="flex items-center space-x-4">
                {/* <span>English</span>
                <span>U</span> */}
                <Button className="font-pathwayExtreme rounded-full bg-green-700">
                    Truy cập tài khoản
                    <Image
                        src="/assets/icons/carabao-logo.svg"
                        alt="Carabao Logo"
                        width={30}
                        height={30}
                        className='ml-2'
                    />
                </Button>
            </div>
        </header>
    );
};

export default Header;
