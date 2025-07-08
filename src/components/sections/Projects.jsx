import { RevealOnScroll } from "../RevealOnScroll";


export const Projects = () => {
    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Student Experience Story Archive Project</h3>
                        <p className="text-white/70 mb-4">
                            Developed a scalable full-stack platform for automated analysis and visualization of interview 
                            data from underserved EECS students.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Node.js", "Python", "C#"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                            href="https://github.com/Va11eF/SESAP_Render"
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                            View Project →
                            </a>
                        </div>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Spotify Service</h3>
                        <p className="text-white/70 mb-4">
                            Full-stack app with Spotify API integration for user login, album search, top tracks, 
                            personalized recommendations, and in-browser playback.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Node.js"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                            href="https://github.com/legion0820/spotifyAPI"
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                            View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">LeagueStats</h3>
                        <p className="text-white/70 mb-4">
                            Developed an Android mobile app in Kotlin that tracks League of Legends player stats using XML layouts and a multi-screen interface. 
                            Features include summoner search, game history, champion rotations, and region selection via a bottom navigation bar.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["XML", "Kotlin"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                            href="https://github.com/legion0820/LeagueStats"
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                            View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Small Shell</h3>
                        <p className="text-white/70 mb-4">
                            Developed a custom Unix shell in C, supporting command execution, I/O redirection, background processes, and signal handling, 
                            with built-in commands (exit, cd, status) and process ID expansion via $$.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["C"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                            href="https://github.com/legion0820/small-shell"
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                            View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Equipment Store Website</h3>
                        <p className="text-white/70 mb-4">
                            Developed an equipment store web application allowing users to browse products, view prices, add items to a cart, 
                            and place orders. The site includes pages for product types, user reviews, and order management.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["SQL", "JavaScript", "HTML", "CSS", "Handlebars"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                            href="https://github.com/legion0820/Equipment-Store"
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                            View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Coffee Maker</h3>
                        <p className="text-white/70 mb-4">
                            Developed a web application using HTML, CSS, JavaScript, Handlebars, and Express that helps users brew optimal coffee by providing detailed instructions and a built-in timer. 
                            The site offers brewing guides for various methods, factoring in ratios, grind size, and brew time to ensure a great cup every time.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "JavaScript", "HandleBars", "Express"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                            href="https://github.com/legion0820/final-project-coffee"
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                            View Project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};