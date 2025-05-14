import './LoadingScreen.css';

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
                        onComplete(); 
                    }, 1000);
                    return prev;
                }
                return prev + 1;
            });
        }, 80); // speed of animation

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="loading-container">
            <p className="loading-text">Loading ...</p>
            <div className="loading-bar-container">
                {[...Array(totalBars)].map((_, i) => (
                    <div
                        key={i}
                        className={`bar ${i < filledBars ? "bar-filled" : "bar-empty"}`}
                    />
                ))}
            </div>
        </div>
    );
};