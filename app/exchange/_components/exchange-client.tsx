"use client"

import { useEffect } from "react";

export default function ExchangeClient() {
    useEffect(() => {
        console.log("ExchangeClient");
    }, []);

    return (
        <div>
            <h1>Exchange Client</h1>
        </div>
    )
}