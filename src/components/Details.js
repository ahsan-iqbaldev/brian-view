import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

const Detail = (props) => {
  const { id } = useParams();

  const detailData = data.movies[id];    
  console.log(detailData);

  return (
    <div className="details-container">
      <div className="details-container_background">
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </div>

      <div className="details-image_title">
        <img alt={detailData.title} src={detailData.titleImg} />
      </div>
      <div className="details-content_meta max-w-[874px]">
        <div className="details-controls">
          <button className="details-player">
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </button>
          <div className="details-trailer">
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </div>
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
        <div className="details-subTitle">{detailData.subTitle}</div>
        <div className="details-description">{detailData.description}</div>
      </div>
    </div>
  );
};

export default Detail;
