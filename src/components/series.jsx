import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import tv from '../assets/tv.png'
import video from "../assets/video.mp4";
const Series = () => {
    // const [videoSize, setvideoSize] = useState("0px");
    // useEffect(()=>{
    //     let size = document.getElementById("tv").clientWidth - 150;
    //     setvideoSize(size + "px")
    // },[])
    // useEffect(() => {
    //     function handleResize() {
    //         let size = document.getElementById("tv").clientWidth - 100;
    //         setvideoSize(size + "px");
    //     }
    
    //     window.addEventListener('resize', handleResize);
    //   })
    return (
        <Wrapper>
            <div className="col-1">
                <div>
                <h2>Enjoy on your TV</h2>
                <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
                </div>
            </div>
            <div className="col-2">
                <img src={tv} alt="Netflix" id="tv"/>
                <video src={video} autoPlay loop></video>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    background: black;
    display: flex;
    border-bottom: 15px solid rgb(35 35 35);
    .col-1{
        padding: 5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 50%;
        div{
            width: 60%;
        }
        h2{
            color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: calc(14px + 1.4rem);
            margin-bottom: 2rem;
            font-weight: 800;
        }
        h4{
            color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: calc(10px + 0.8rem);
            font-weight: 500;
        }
    }
    .col-2{
        padding: 5rem 0;
        flex: 50%;
        /* object-fit: contain; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        img{
            width: 80%;
            z-index: 1;
        }
        video{
            width: 60%;
            position: absolute;
            z-index: 0;
            object-fit: contain;
            overflow : hidden;
            /* transform: translate(-2px, -9px); */
        }
    }
    @media screen and (max-width: 900px){
        flex-direction: column;
        .col-1, .col-2{
            flex: 100%;
        }
        .col-1{
            div{
                width: 80%;
            }
            h2{
                font-family: 'Poppins', sans-serif;
                font-size: calc(10px + 1.4rem);
                font-weight: 700;
            }
            h4{
                font-family: 'Poppins', sans-serif;
                font-size: calc(8px + 0.6rem);
                font-weight: 400;
            }
            padding: 3rem 0px 2rem 0px;
        }
        .col-2{
            padding: 2rem 0px 3rem 0px;
        }
    }
`
export default Series;
