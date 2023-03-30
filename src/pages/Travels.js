import React from 'react'
import MainLayout from "../components/common/MainLayout";
import Travels from '../components/Travels';
import Explore from '../components/Explore';
import Blogs from '../components/Blogs';

const Home = () => {return <MainLayout>
    <Explore />
    <Travels />
    <Blogs />
  </MainLayout>;
}

export default Home;

