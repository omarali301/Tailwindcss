import React from 'react';
import Navbar from '../Navbar/Navbar';
import TopSection from '../Navbar/TopSection/TopSection';
import About from '../AboutUs/About';
import Manage from '../Manage/Manage';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navbar/>
     <TopSection/>
     <About/>
     <Manage/>
     <Blog/>
     <Contact/>
        </div>
    );
};

export default Home;