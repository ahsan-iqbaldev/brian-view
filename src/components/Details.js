import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost } from "../store/action/postingAction";

const Detail = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { single_Post, isLoading } = useSelector((state) => state.posting);

  console.log(single_Post);

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, []);

  return (
    <div className="details-container">
      {isLoading ? (
        <div className="flex justify-center align-middle mt-9">
          <svg
            aria-hidden="true"
            role="status"
            class="inline mr-3 w-8 h-8 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            ></path>
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          <div className="details-container_background">
            <img alt={single_Post?.title} src={single_Post?.backgroundImg} />
          </div>

          <div className="details-image_title">
            <img alt={single_Post?.title} src={single_Post?.outherimage} />
          </div>
          <div className="details-content_meta max-w-[874px]">
            <div className="details-controls">
              <Link to={`/video-player/${single_Post?.id}`}>
                <button className="details-player">
                  <img src="/images/play-icon-black.png" alt="" />
                  <span>Play</span>
                </button>
              </Link>
              <Link to={`/video-player/${single_Post?.id}`}>
                <div className="details-trailer">
                  <img src="/images/play-icon-white.png" alt="" />
                  <span>Trailer</span>
                </div>
              </Link>
              <div className="details-add_list">
                <span />
                <span />
              </div>
              <div className="details-group_watch">
                <div>
                  <img src="/images/group-icon.png" alt="" />
                </div>
              </div>
            </div>
            <div className="details-subTitle">{single_Post?.subtitle}</div>
            <div className="details-description">
              {single_Post?.description}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
