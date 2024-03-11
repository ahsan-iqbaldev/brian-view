import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingPost } from "../store/action/postingAction";

const Trending = () => {
  const dispatch = useDispatch();

  const { trending_Posts, isLoading } = useSelector((state) => state.posting);

  useEffect(() => {
    dispatch(getTrendingPost());
  }, []);

  return (
    <div className="py-26 px-0 mb-10">
      <>
        <h4 className="font-semibold text-xl mb-3">{isLoading ? "" : "Trending"}</h4>
        <div className="recomended-container">
          {trending_Posts?.map((movie) => (
            <div key={movie?.title} className="recomended-card_image">
              <Link to={`/details/${movie?.id}`}>
                {isLoading ? (
                  ""
                ) : (
                  <img src={movie?.thumbnail} alt={movie?.title} />
                )}
              </Link>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Trending;
