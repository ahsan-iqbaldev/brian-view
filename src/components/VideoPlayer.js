import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";

const VideoPlayer = () => {
  const { single_Post } = useSelector((state) => state.posting);

  return (
    <div>
      <ReactPlayer
        url={single_Post?.video}
        controls={true}
        playing={true}
        width="100%"
        height="100vh"
      />
    </div>
  );
};

export default VideoPlayer;
