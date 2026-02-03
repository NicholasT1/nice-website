"use client"

import { useState } from "react";

interface ComplainingProps {
    defaultText: string;
    success: boolean;
}

export default function ComplainingWrapper({defaultText, success}: ComplainingProps) {
    const texts = [
        "🥹Please??", 
        "Halp Police!", 
        "🫵Click yes!", 
        "✋Stop chasing me!", 
        "Stop this crazy lady!", 
        "I'll bite you!", 
        "With your injured foot?",
        "🫲🥴🫱67",
    ]
    const [currentText, setText] = useState(defaultText)

    const successText = "Harh! Sucker...Giving up already?"

    const changeText = () => {
        let next_text = texts[Math.floor(Math.random() * texts.length)]

        while (currentText == next_text) {
            next_text = texts[Math.floor(Math.random() * texts.length)]
        }
        
        setText(next_text)
    }

    return (
        <div onClick={() => changeText()} onMouseOver={() => changeText()}>
            {success? successText: currentText}
        </div>
    )
}