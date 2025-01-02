import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/bicer-dover-video.mp4" // Video dosyasının yolu
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default BackgroundVideo;
