import React, {useEffect, useState} from "react";
import {fetchAllStoriesData} from "../utils/rest";

const Stories = () => {
  const [allStoriesData, setAllStoriesData] = useState([]);
  useEffect(() => {
    fetchAllStoriesData().then(res =>setAllStoriesData(res?.posts))
  }, [])

  return (
    <section className="storiesForm section-wrapper">
      <div className="heading-wrapper">
        <img src="/heading-logo.png" alt="heading-img" />
        <h2 className="section-heading">Stories From The Road</h2>
      </div>
      <div className="storiesForm-item-wrapper">
        {allStoriesData?.map(stories => {
          return (
            <div className="storiesForm-item" key={Math.random()}>
              <img src="/storiesForm-2.png" alt="discover-img" />
              <p>{stories?.title}</p>
            </div>
          )
        })}
        <div className="storiesForm-item">
          <button className="storiesForm-btn">View More</button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
