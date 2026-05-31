import { useState, useRef, useEffect } from "react";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Calling video.play()");
      ref.current.play();
    } else {
      console.log("Calling video.pause()");
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video controls={true} ref={ref} src={src} loop playsInline />;
}

export default function VideoWithUseEffect() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <hr />
      <h2>Video with useEffect</h2>
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </div>
    </>
  );
}
