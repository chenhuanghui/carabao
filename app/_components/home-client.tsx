"use client"
import { useState } from "react"

import Hero from "@/components/hero"
import HowToJoin from "@/components/how-to-join"
import Introduce from "@/components/introduce"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import PullRing from "@/components/pull-ring"
import { SocialPostModal } from "@/components/modal/social-post-modal"

export const HomeClient = () => {
    const [isOpenSocialPostModal, setIsOpenSocialPostModal] = useState(false)

    return (
        <div className="home-client-wrapper">
            <PullRing />
            <Hero onOpenSocialPostModal={() => setIsOpenSocialPostModal(true)} />
            <HowToJoin onOpenSocialPostModal={() => setIsOpenSocialPostModal(true)} />
            <Introduce/>
            <FAQ onOpenSocialPostModal={() => setIsOpenSocialPostModal(true)} />
            <Footer />
            <SocialPostModal 
                isOpen={isOpenSocialPostModal} 
                onClose={() => setIsOpenSocialPostModal(false)} 
                onSuccess={() => console.log("success")}
            />
        </div>
    )
}