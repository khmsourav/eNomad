import React from 'react'
import MainLayout from "../components/common/MainLayout";
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';

const Home = () => {return <MainLayout>
    <Blogs />
    <Contact />
  </MainLayout>;
}

export default Home;

