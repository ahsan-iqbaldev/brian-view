import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideo } from "../store/action/postingAction";


const VideoPlayer = () => {

    const dispatch = useDispatch()
    const {id} =  useParams()
    const {video} = useSelector((state) => state.posting)


    useEffect(() => {
     dispatch(getVideo(id))
    }, [])
    

  return (
    <div>
      <ReactPlayer
        url={video}
        controls={true}
        playing={true}
        width="100%" 
        height="100vh"
      />
    </div>
  );
};

export default VideoPlayer;
