"use client"

import NiceButton from "@/components/niceButton";
import NiceText from "@/components/niceText";
import RunawayWrapper from "@/components/runawayWrapper";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRef } from "react";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex h-screen items-center justify-center bg-stone-200 bg-auto bg-[url(/nice-website/hearts.png)]" ref={containerRef}>
            <div className="flex flex-col lg:gap-y-10 gap-y-5 bg-stone-200"> 
                <NiceText> Will you be my Valentine?? </NiceText>
                <div className="flex items-center justify-center gap-x-10">
                    <Dialog>
                        <DialogTrigger asChild>
                            <NiceButton> 
                                ❤️YES!!!
                            </NiceButton>
                        </DialogTrigger>
                        <DialogContent className="bg-red-300 border-transparent shadow-none duration-800" showCloseButton={false}>
                            <div className="flex justify-center animate-bounce text-9xl">
                                💖
                            </div>
                            <div className="flex justify-center text-7xl whitespace-nowrap">
                                <NiceText>
                                    💐YAYYYYYY!!! <span className="scale-x-[-1]"> 💐 </span>
                                </NiceText>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <RunawayWrapper containerRef={containerRef}> 
                        <NiceButton> 
                            👎No...
                        </NiceButton>
                    </RunawayWrapper>
                </div>
            </div>
        </div>
    );
}
