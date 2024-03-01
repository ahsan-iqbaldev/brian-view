import React from "react";

const Viewers = () => {
  return (
    <>
      <div className="viewers-container">
        <div className="viewwers-wrap">
          <img src="/images/viewers-disney.png" alt="Viewers" />
         <video autoPlay loop muted playsInline preload="auto">
            <source src="/videos/1564674844-disney.mp4" />
          </video>
        </div>
        <div className="viewwers-wrap">
          <img src="/images/viewers-pixar.png" alt="Viewers" />
         <video autoPlay loop muted playsInline preload="auto">
            <source src="/videos/1564676714-pixar.mp4" />
          </video>
        </div>
        <div className="viewwers-wrap">
          <img src="/images/viewers-marvel.png" alt="Viewers" />
         <video autoPlay loop muted playsInline preload="auto">
            <source src="/videos/1564676115-marvel.mp4" />
          </video>
        </div>
        <div className="viewwers-wrap">
          <img src="/images/viewers-starwars.png" alt="Viewers" />
         <video autoPlay loop muted playsInline preload="auto">
            <source src="/videos/1608229455-star-wars.mp4" />
          </video>
        </div>
        <div className="viewwers-wrap">
          <img src="/images/viewers-national.png" alt="Viewers" />
         <video autoPlay loop muted playsInline preload="auto">
            <source src="/videos/1564676296-national-geographic.mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Viewers;
