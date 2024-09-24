"use client"
import { useState } from "react"

import Hero from "@/components/hero"
import HowToJoin from "@/components/how-to-join"
import Introduce from "@/components/introduce"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import { SocialPostModal } from "@/components/modal/social-post-modal"

export const HomeClient = () => {
    const [isOpenSocialPostModal, setIsOpenSocialPostModal] = useState(false)

    return (
        <div className="home-client-wrapper">
            <Hero onOpenSocialPostModal={() => setIsOpenSocialPostModal(true)} />
            <HowToJoin />
            <Introduce />
            <FAQ />
            <Footer />
            <SocialPostModal 
                isOpen={isOpenSocialPostModal} 
                onClose={() => setIsOpenSocialPostModal(false)} 
                onSuccess={() => console.log("success")}
            />
        </div>
    )
}