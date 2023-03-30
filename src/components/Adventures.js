import React from "react";

const Adventures = () => {
  return (
    <section className="adventures">
      <div className="adventures-hero">
        <img src="/adventure-hero.png" alt="adventures-img" />
      </div>
      <div className="adventures-item">
        <h2 className="section-heading">Adventures Await</h2>
        <ul className="adventures-item-list">
          <li>
            Reminisce childhood on The Lord Of The Rings set in New Zealand
          </li>
          <li>
            Indulge in beautiful sunsets & tropical food on Bali’s beaches
          </li>
          <li>Watch the stunning Northern Lights dance in the Alaskan skies</li>
        </ul>
      </div>
    </section>
  );
};

export default Adventures;
