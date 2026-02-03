import { ReactNode, useRef } from "react";
import { animate, spring } from "animejs";

interface RunawayProps {
    containerRef: React.RefObject<HTMLElement | null>;
    children: ReactNode;
}

export default function RunawayWrapper({containerRef, children}: RunawayProps) {
    const buttonRef = useRef<HTMLDivElement>(null);

    const animateMove = (
        element: HTMLElement, 
        top: number, 
        left: number
    ) => {
        animate(element, {
            x: {
                to: left/2,
                ease: spring({
                    bounce: 0.4,
                    duration: 500
                })
            },
            y: {
                to: top/2,
                ease: spring({
                    bounce: 0.4,
                    duration: 500
                })
            }
        });
    };

    const run = () => {
        if (buttonRef.current == null || containerRef.current == null) {
            return;
        }

        const rect = containerRef.current.getBoundingClientRect();
        const top = getRandomNumber(rect.y * 1.5);
        const left = getRandomNumber(rect.x * 4);

        animateMove(buttonRef.current, top, left);
    };

    const getRandomNumber = (num: number) => {
        return (Math.random() * -1) * num
    };

    return (
        <div onMouseOver={() => run()} onClick={() => run()} ref={buttonRef}>
            {children}
        </div>
    )
}