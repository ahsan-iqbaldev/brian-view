import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getOriginalPost } from "../store/action/postingAction";
import { useDispatch, useSelector } from "react-redux";

const Original = () => {
  const dispatch = useDispatch();

  const { original_Posts, isLoading } = useSelector((state) => state.posting);

  useEffect(() => {
    dispatch(getOriginalPost());
  }, []);

  return (
    <div className="py-26 px-0 mb-10">
      <>
        <h4 className="font-semibold text-xl mb-3">{isLoading ? "" : "Original"}</h4>
        <div className="recomended-container">
          {original_Posts?.map((movie) => (
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

export default Original;
