import CustomButton from "@/components/customButton";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-200 bg-[url(/nice-website/hearts.png)] bg-auto">
        <div className="flex-col items-center min-h-full justify-center"> 
            <div> Question here </div>
            <div className="flex flex-wrap items-center gap-5 md:flex-row">
                <CustomButton> 
                    ❤️YES!!!
                </CustomButton>
                <CustomButton> 
                    👎No...
                </CustomButton>
            </div>
        </div>
    </div>
  );
}
