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
            <img
              src="/T1.png"
              alt="Thumbnail for Video 1"
              className="absolute inset-0 object-cover w-full h-full"
            />
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
            <img
              src="/T2.png"
              alt="Thumbnail for Video 2"
              className="absolute inset-0 object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Video;
