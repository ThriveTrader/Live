import { useState } from "react";
import Container from "./container";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl relative">
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="relative bg-transparent cursor-pointer aspect-w-16 aspect-h-9 overflow-hidden"
        >
          {playVideo ? (
            <iframe
              title="Video Player"
              src="https://player.vimeo.com/video/906950726?h=ca75fc5c00"
              width="640"
              height="564"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 lg:w-28 lg:h-28 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Play Video</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Video;
