import React from "react";
import mepic from '/images/mepic.png';
import "./Home.css";

export const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-container">
                <div className="profile-container">
                    <img 
                        src={mepic} 
                        alt="Profile" 
                        className="profile-image" 
                    />
                </div>
                
                <div className="bio-container">
                    <h1 className="bio-title">Hi! I'm Elena!</h1>
                    <div className="bio-content">
                        <p className="bio-description">
                        I’m a third-year Computer Science student 
                    at California State University, Fullerton 
                    and a 2025 Microsoft SWE intern!
                        </p>
                        <p className="bio-hobbies">
                            My hobbies include going to concerts, traveling to new places, thrifting, 
                            taking pictures, and spending time with my friends and family.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};