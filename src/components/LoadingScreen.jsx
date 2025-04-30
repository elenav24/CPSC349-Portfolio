import { useEffect, useState } from "react";

export const StylizedLoadingBar = ({ onComplete }) => {
    const totalBars = 20;
    const [filledBars, setFilledBars] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFilledBars((prev) => {
            if (prev >= totalBars) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete?.(); // optional callback
                }, 1000);
                return prev;
            }
        return prev + 1;
        });
    }, 100); // speed of animation

    return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-pink-200">
            <p className="mb-2 font-bold text-gray-700 text-2xl">Loading ...</p>
                <div className="flex border-2 border-black p-1 gap-[2px] bg-white overflow-hidden">
                    {[...Array(totalBars)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-4 h-8 transform -skew-x-12 border border-black ${
                            i < filledBars ? "bg-pink-400" : "bg-white"
                            }`}
                        />
                    ))}
                </div>
        </div>
    );
};