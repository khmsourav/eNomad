import React from 'react'
import MainLayout from "../components/common/MainLayout";
import Hero from  "../components/Hero"
import Discover from  "../components/Discover"
import Adventures from  "../components/Adventures"
import Stories from  "../components/Stories"
import Explore from  "../components/Explore"
import Travels from  "../components/Travels"
import Blog from  "../components/Blogs"
import Contact from "../components/Contact"

const Home = () => {return <MainLayout>
    <Hero />
    <Discover />
    <Adventures />
    <Stories />
    <Explore />
    <Travels />
    <Blog />
    <Contact />
  </MainLayout>;
}

export default Home;
