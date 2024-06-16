import React from 'react';
export interface GameCardProps {
    imageSrc?: string
}

const GameCard: React.FC<GameCardProps> = ({ imageSrc }) => {
    return (
        <div className="w-auto min-w-72 relative hover:-translate-y-1 duration-300 group rounded-2xl">
            <div
                className="w-full min-w-96 absolute bg-dot-white/[0.13] rounded-2xl z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            <div className="w-full h-full absolute bg-gradient-to-t to-[#FF4D14]/20 rounded-2xl from-transparent group-hover:opacity-0 duration-300">

            </div>
            {imageSrc && (
                <img src={imageSrc} className={"w-72 h-96 bg-zinc-800 rounded-xl"} alt='image'/>
            )}
            {!imageSrc && (
                <div className="w-72 h-96 bg-zinc-800 rounded-xl flex items-center justify-center">
                    <p className="text-4xl font-semibold">+ more!</p>
                </div>
            )}
        </div>
    );
};

export default GameCard;