import { useState, useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const frontendSkills = [
        "React", 
        "TypeScript", 
        "TailwindCSS",
    ];

    const backendSkills = [
        "Node.js", 
        "Python", 
        "MySQL",
        "Javascript",
        "Kotlin",
    ];

    const slides = [
        {
            img: "/leon-img/img1.jpg",
            text: "I am a first generation graduated and I am also a recent new grad looking for a full time job in IT, Front-end Development, and Software Engineering."
        },
        {
            img: "/leon-img/img2.jpg", 
            text: "I graduated from Oregon State University with a Bachelor of Science degree, focusing on Front-End Development and Data Analytics. I'm passionate about building intuitive and data-driven web experiences."
        },
        {
            video: "/leon-img/IMG_5575.mp4",
            text: "Outside of tech, I enjoy working out. Strength training helps me stay disciplined and motivated — hitting new PRs in bench press, squats, and deadlifts is always rewarding."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    {/* Only show current slide */}
                    <div className="slide-show">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            {/* Left Arrow */}
                            <button
                                onClick={prevSlide}
                                className="bg-black/80 hover:bg-black/90 text-white p-3 rounded-full shadow-lg border-2 border-white/20 hover:border-white/40 transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            {/* Image/Video */}
                            {slides[currentSlide].img ? (
                                <img 
                                    src={slides[currentSlide].img} 
                                    alt="Leon" 
                                    className="w-150 h-190 object-cover rounded-xl"
                                />
                            ) : (
                                <video 
                                    src={slides[currentSlide].video}
                                    className="w-150 h-190 object-cover rounded-xl"
                                    controls 
                                    autoPlay 
                                    loop 
                                    muted
                                />
                            )}
                            
                            {/* Right Arrow */}
                            <button
                                onClick={nextSlide}
                                className="bg-black/80 hover:bg-black/90 text-white p-3 rounded-full shadow-lg border-2 border-white/20 hover:border-white/40 transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-white-300 mb- mx-auto">
                            {slides[currentSlide].text}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(56,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-al">
                        <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                        <ul className="list-disc list-inside text-white-300 space-y-2">
                            <li>
                                <strong> B.S in Computer Science</strong> - Oregon State University 
                                (2021-2025)
                            </li>
                            <li>
                                Relevant Coursework: Data Structures, Algorithms, Operating Systems, Web Development, Database Management System, 
                                Adv. Web Development, Mobile Development, Computer Networks
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-al">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-white-300">
                            <div>
                                <h4 className="font-semibold">Undergraduate Learning Assistant (2024-2025) </h4>
                                <p>
                                    Provide technical support to students by assisting with Python programming, helping debug code,
                                     understand core concepts, and develop problem-solving skills
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};