import { Button } from "@/components/ui/button"
import { ReactNode } from "react"
 
interface NiceButtonProps {
    children: ReactNode;
    onClick?: () => void
}

export default function NiceButton({children, onClick}: NiceButtonProps): ReactNode {
    return (
        <Button onClick={onClick} variant="outline" className="hover:bg-red-300 border-red-300 bg-stone-100 font-nice text-md lg:text-2xl p-3 lg:p-5">
            {children}
        </Button>
    )
}