import React from "react";
import { Carousel } from 'react-responsive-carousel';

const Explore = () => {
  return (
    <section className="explore section-wrapper">
      <div className="heading-wrapper">
        <h2 className="section-heading">Explore By Country</h2>
        <img src="/heading-logo.png" alt="heading-img" />
      </div>
      <div
        className="explore-item-wrapper"
        style={{ background: "url(/explore-bg.png)" }}
      >
        <Carousel
          repeat={false}
          autoPlay={true}
          centerMode={true}
          infiniteLoop={true}
          emulateTouch={true}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          interval={3000}
          stopOnHover={true}
          showThumbs={false}
        >
          <div className="explore-item">
            <h3>France</h3>
            <h5>
              Fall in love with the beauty, food, and fashion of the classy French
              cities
            </h5>
          </div>
          <div className="explore-item">
            <h3>France</h3>
            <h5>
              Fall in love with the beauty, food, and fashion of the classy French
              cities
            </h5>
          </div>
          <div className="explore-item">
            <h3>France</h3>
            <h5>
              Fall in love with the beauty, food, and fashion of the classy French
              cities
            </h5>
          </div>
      </Carousel>
      </div>
    </section>
  );
};

export default Explore;
