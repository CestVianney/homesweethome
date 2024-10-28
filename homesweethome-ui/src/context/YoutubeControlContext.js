import React, { createContext, useContext, useState } from "react";

const YoutubeControlContext = createContext();

export const YoutubePlayerProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videos, setVideos] = useState([]);  // Initialiser avec un tableau vide
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
    const [volume, setVolume] = useState(50);

    const play = (videoId) => {
        setIsPlaying(true);
    };

    const pause = () => setIsPlaying(false);
    
    const nextVideo = () => {
        setSelectedVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const previousVideo = () => {
        setSelectedVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    return (
        <YoutubeControlContext.Provider
            value={{
                isPlaying,
                play,
                pause,
                nextVideo,
                previousVideo,
                volume,
                setVolume,
                videos,
                setVideos,
                selectedVideoIndex
            }}
        >
            {children}
        </YoutubeControlContext.Provider>
    );
};

export const useYoutubeControl = () => useContext(YoutubeControlContext);