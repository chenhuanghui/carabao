"use client"

import { useEffect } from "react";
import Header from "@/components/header";
import Section from "@/components/section";

export default function ExchangeClient() {
    useEffect(() => {
        console.log("ExchangeClient");
    }, []);

    return (
        <div className="profile-wrapper">
            <Header />
            <Section className="bg-[#eee] min-h-screen font-pathwayExtreme">
                Exhange page
            </Section>
        </div>
    )
}