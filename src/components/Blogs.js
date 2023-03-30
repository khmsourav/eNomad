import React, {useEffect, useState} from "react";
import {fetchAllBlogsData} from "../utils/rest";

const Blogs = () => {
  const [allBlogsData, setAllBlogsData] = useState([]);

  useEffect(() => {
    fetchAllBlogsData().then(res =>setAllBlogsData(res?.posts))
  }, [])
  return (
    <section className="blog section-wrapper">
      <div className="heading-wrapper">
        <img src="/heading-logo.png" alt="heading-img" />
        <h2 className="section-heading">The Best Of The Blog</h2>
      </div>
      <div className="blog-item-wrapper">
        {allBlogsData?.map((blogs, index) => {
          return (
            <div className="storiesForm-item" key={Math.random()}>
              <img src="/Blog-2.png" alt="discover-img" />
              <p>{blogs?.title}</p>
            </div>
          )
        })}
        
      </div>
    </section>
  );
};

export default Blogs;
