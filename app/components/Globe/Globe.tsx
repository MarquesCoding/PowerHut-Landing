import React, { useState } from 'react';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../ui/tooltip';

interface Location {
    x: number;
    y: number;
    name: string | JSX.Element;
    showTooltip?: boolean;
}

interface MapProps {
    mapSrc: string;
    locations: Location[];
}

const MapComponent: React.FC<MapProps> = ({ mapSrc, locations }) => {

    return (
        <div className="w-full relative flex m-0 sm:m-24">
            <img alt="map" src={mapSrc} className="w-full h-full filter grayscale"/>
            {locations.map((location, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        left: `${location.x}%`,
                        top: `${location.y}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <TooltipProvider key={`tooltip-${index}`}>
                        <Tooltip open={location.showTooltip}>
                            <TooltipTrigger>
                                <span className="relative flex sm:h-4 sm:w-4 w-1 h-1">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D14] opacity-75"></span>
                                  <span className="relative inline-flex rounded-full w-1 h-1 sm:h-4 sm:w-4 bg-[#FF4D14]"></span>
                                </span>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{location.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            ))}
        </div>
    );
};

export default MapComponent;
