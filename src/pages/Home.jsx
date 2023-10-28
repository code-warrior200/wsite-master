import React from 'react';
import Introduction from "../components/Introduction";
//import About from "../components/About";
import Features from "../components/Features"
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Introduction/>
        {/* <About/> */}
        <Features/>
        <Footer/>
    </div>
  )
}

export default Home;