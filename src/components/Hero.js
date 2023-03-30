import React from "react";

const Hero = () => {
  return (
    <section className="hero-section section-wrapper">
      <div className="section-content-area">
        <h1 className="title">Adventures Of A Young Wanderer</h1>
        <div className="story-area">
          <a href="/">
            <img src="/story.png" alt="story-img" />
          </a>
          <h5>watch my story</h5>
        </div>
      </div>
      <div className="section-img-area">
        <img src="/banner.png" alt="banner-img" />
        <h4>
          Here’s to a lifetime of wanderlust and adventures around the world
        </h4>
      </div>
    </section>
  );
};

export default Hero;
