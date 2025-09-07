import React from "react";

const ParallaxBackground = () => {
    return (
        <section className="absolute inset-0 bg-black/40"> 
        <div className="relative h-screen overflow-y-hidden">
            {/* Background Sky */}
            <div className="absolute inset-0 w-full h-screen -z-50" 
            style={{
                backgroundImage: "url(/assets/sky.jpg)",
                backgroundPosition: "bottom",
                backgroundSize: "cover"
            }}/>
            {/* Mountain Layer 3 */}
            <div className="absolute inset-0 w-full -z-40"
            style={{
                backgroundImage: "url(/assets/mountain-3.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover" 
            }}/>
            {/* Planets */}
            <div className="absolute inset-0 w-full -z-30"
            style={{
                backgroundImage: "url(/assets/planets.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover"
            }} />
            {/* Mountain Layer 2 */}
            <div className="absolute inset-0 w-full -z-20"
            style={{
                backgroundImage: "url(/assets/mountain-2.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover"
            }} />
            {/* Mountain Layer 1 */}
            <div />
        </div> 
        </section>
    )      
}