import { Button } from "@/components/ui/button"
import { ReactNode } from "react"
 
interface CustomButtonProps {
    children: ReactNode
}

export default function CustomButton({children}: CustomButtonProps): ReactNode {
    return (
        <Button variant="outline" className="hover:bg-red-300 border-red-300 bg-stone-100">
            {children}
        </Button>
    )
}