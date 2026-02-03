"use client"

import { useState } from "react";

interface ComplainingProps {
    defaultText: string;
}

export default function ComplainingWrapper({defaultText}: ComplainingProps) {
    const texts = ["Please??", "Halp Police!", "Get away from me!", "Hey, stop chasing me!", "Someone stop this crazy lady!"]
    const [currentText, setText] = useState(defaultText)

    const changeText = () => {
        setText(texts[Math.floor(Math.random() * texts.length)])
    }

    return (
        <div onClick={() => changeText()} onMouseOver={() => changeText()}>
            {currentText}
        </div>
    )
}