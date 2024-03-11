import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getBrianPost } from "../store/action/postingAction";
import { useDispatch, useSelector } from "react-redux";

const NewBrianView = () => {
  const dispatch = useDispatch();

  const { brian_Posts, isLoading } = useSelector((state) => state.posting);

  useEffect(() => {
    dispatch(getBrianPost());
  }, []);

  return (
    <div className="py-26 px-0 mb-10">
      <>
        <h4 className="font-semibold text-xl mb-3">{isLoading ? "" : "New Brian-View"}</h4>
        <div className="recomended-container">
          {brian_Posts?.map((movie) => (
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

export default NewBrianView;
