import React, {useEffect, useState} from "react";
import {fetchAllDiscoverData} from "../utils/rest.js";

const Discover = () => {
  const [allDiscoverData, setAllDiscoverData] = useState([]);

  useEffect(() => {
    fetchAllDiscoverData().then(res =>setAllDiscoverData(res?.posts))
  }, [])
  
  return (
    <section className="discover section-wrapper">
      <div className="heading-wrapper">
        <h2 className="section-heading">Discover The World</h2>
        <img src="/heading-logo.png" alt="heading-img" />
      </div>
      <div className="discover-item-wrapper">
        {allDiscoverData?.map(discover => {
          return (
            <div className="discover-item" key={Math.random()}>
              <img src="/discover-2.jpg" alt="discover-img" />
              <button className="discover-btn">{discover?.title}</button>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Discover;
