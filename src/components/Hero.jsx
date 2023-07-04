import React from 'react';
import Nav from './Nav'
import Main from './Main'
import banner from '../assets/banner.jpg'
const Hero = () => {
    const style = {
        background: `radial-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${banner})`,
        backgroundPosition: "center",
        height: "100vh",
        borderBottom: "15px solid rgb(35 35 35)",
    }
    return (
            <div style={style}>
                <Nav/>
                <Main/>
            </div>
    );
}

export default Hero;
