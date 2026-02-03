import { ReactNode } from "react"

interface NiceTextProps {
    children: ReactNode
}

export default function NiceText({children}: NiceTextProps): ReactNode {
    return (
        <div className="flex justify-center font-nice text-2xl lg:text-5xl animate-bounce"> {children} </div>
    )
}