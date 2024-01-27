import { useState } from "react";
import Container from "./container";

const Video = () => {
  const [playVideo1, setPlayVideo1] = useState(false);
  const [playVideo2, setPlayVideo2] = useState(false);

  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl flex">
        <div
          onClick={() => setPlayVideo1(!playVideo1)}
          className="relative bg-transparent cursor-pointer aspect-w-16 aspect-h-9 overflow-hidden flex-1 mr-4"
        >
          {playVideo1 ? (
            <iframe
              title="Video Player 1"
              src="https://player.vimeo.com/video/906950726?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ position: "absolute", top: 0, left: 0 }}
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
                <span className="sr-only">Play Video 1</span>
              </button>
            </div>
          )}
        </div>

        <div
          onClick={() => setPlayVideo2(!playVideo2)}
          className="relative bg-transparent cursor-pointer aspect-w-16 aspect-h-9 overflow-hidden flex-1 ml-4"
        >
          {playVideo2 ? (
            <iframe
              title="Video Player 2"
              src="URL_TO_YOUR_SECOND_VIDEO"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ position: "absolute", top: 0, left: 0 }}
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
                <span className="sr-only">Play Video 2</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Video;
