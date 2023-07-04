import React from 'react';
import styled from "styled-components"
import mobile from '../assets/mobile.jpg'
import small from '../assets/small.png'
import download from '../assets/download.gif'
const Download = () => {
    return (
        <Wrapper>
            <div className="col-2">
                <img src={mobile} alt="Netflix" id="tv"/>
                <div className="downloader">
                    <img src={small} alt="" />
                    <div>
                        <h4>Stranger Things</h4>
                        <p>Downloading...</p>
                    </div>
                    <img src={download} alt="" />
                </div>
            </div>
            <div className="col-1">
                <div>
                <h2>Download your shows to watch offline</h2>
                <h4>Save your favorites easily and always have something to watch.</h4>
                </div>
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
        .downloader{
            border: 3px solid rgb(35 35 35);
            border-radius: 5px;
            width: 50%;
            background: black;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100px;
            position: absolute;
            bottom: 100px;
            z-index: 2;
            img{
                width: 60px;
            }
            h4{
                color: #fff;
                font-size: calc(8px + .8rem);
                font-family: 'Poppins', sans-serif;
                margin-bottom: 5px;
                font-weight: 400;
            }
            p{
                color: #3172f2;
                font-family: 'Poppins', sans-serif;
                font-size: calc(7px + .4rem);
            }
        }
    }
    @media screen and (max-width: 900px){
        flex-direction: column;
        .col-1, .col-2{
            flex: 100%;
        }
        .col-1{
            div{
                width: 90%;
            }
            text-align: center ;
            padding: 2rem 0px 3rem 0px;
            h2{
                font-family: 'Poppins', sans-serif;
                font-size: calc(10px + 1.4rem);
                font-weight: 700;
            }
            h4{
                font-family: 'Poppins', sans-serif;
                font-size: calc(8px + 0.7rem);
                font-weight: 400;
            }
        }
        .col-2{
            padding: 3rem 0px 2rem 0px;
            img{
                width: 90%;
            }
            .downloader{
                width: 80%;
                height: inherit;
                bottom: 30px;
            }
            @media screen and (max-width:400px) {
                .downloader{
                    width: 80%;
                    height: inherit;
                    bottom: 20px;
                    img{
                        width: 50px;
                    }
                    h4{
                        font-size: 11px;
                    }
                }
               
            }
        }
    }
`
export default Download;
