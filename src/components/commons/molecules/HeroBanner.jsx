import React from "react";
import { useNavigate } from "react-router-dom";
import DoubleCurvedText from "../atoms/DoubleCurvedText";
import CardMedium from "../atoms/CardMedium";

function HeroBanner() {
    const navigate = useNavigate();
    return (
        <section className="relative h-[460px] w-full rounded-b-4xl">
            <img
                src="/images/bg-1.jpg"
                className="h-full w-full rounded-4xl object-cover shadow-md"
            />
            <div className="absolute -bottom-18 left-1/2 h-32 w-32 -translate-x-1/2 transform rounded-full bg-(--bg-primary-cray)" />
            <div
                className="absolute -bottom-16 left-1/2 flex h-28 w-28 -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center gap-2 rounded-full bg-(--bg-secondary-cray) shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => {
                    window.location.href =
                        "mailto:your_email@example.com?subject=Subject&body=message%20goes%20here";
                }}
            >
                <div className="absolute top-1 left-1/2 flex h-27 w-27 -translate-x-1/2 transform flex-col items-center justify-center gap-2 rounded-full">
                    <DoubleCurvedText type="top" />
                </div>

                <i className="fa fa-arrow-up mb-2 rotate-45 text-xl text-white"></i>

                <div className="absolute top-1 left-1/2 flex h-27 w-27 -translate-x-1/2 transform flex-col items-center justify-center gap-2 rounded-full">
                    <DoubleCurvedText type="bottom" />
                </div>
            </div>

            <div className="absolute right-4 bottom-4 flex flex-col gap-4 max-md:bottom-14">
                <CardMedium
                    title="About"
                    bgImg={'/images/about.jpg'}
                    onClick={() => navigate("/about")}
                />
                <CardMedium
                    title="Skill"
                    bgImg={'/images/skills.jpg'}
                    onClick={() => navigate("/skills")}
                />
            </div>
        </section>
    );
}

export default HeroBanner;
