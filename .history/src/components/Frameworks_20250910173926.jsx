import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
    const skills = [
        "java",         // core language
        "spring",       // Java framework
        "django",       // Python framework
        "python",       // AI / scripting language
        "mysql",        // DB
        "postgresql",   // DB
        "mongodb",      // DB
        "sqlite",       // DB
        "aws",          // cloud
        "linux",        // system
        "git",          // version control
        "github",       // collaboration
        "html5",        // frontend core
        "css3",         // frontend styling
        "tailwindcss",  // modern styling
        "react",        // frontend framework
    ];

    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
            <OrbitingCircles iconSize={40}>
                {skills.map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {skills.reverse().map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);