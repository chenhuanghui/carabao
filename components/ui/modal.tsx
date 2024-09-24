"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle
} from "@/components/ui/dialog"
import { ScrollArea, ScrollBar } from "./scroll-area"

export const Modal = ({
    title,
    description,
    isOpen,
    onClose,
    className,
    children
}: {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    className?: any;
    children: React.ReactNode;
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    return (
        // <div className='w-full md:max-w-4xl mx-auto p-8 md:p-0'>
            <Dialog open={isOpen} onOpenChange={onChange}>
                <DialogContent className={`w-[95vw] mx-auto md:h-auto ${className} pb-6 pt-0 p-0 bg-white`}>
                    <DialogHeader className="px-5 pt-5 pb-2">
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="max-h-[90vh] p-5">
                        {children}
                        <ScrollBar orientation="vertical" />
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        // </div>
    )
}