import React from 'react';
import styled from "styled-components";
import {BsGlobe} from "react-icons/bs"
const Footer = () => {
    return (
        <Wrapper>
            
            <div className="row">
                <span>Questions? Contact us.</span>
                <div>
                    <div className="col">
                        <span>FAQ</span>
                        <span>Media Center</span>
                        <span>Ways to Watch</span>
                        <span>Cookie Preferences</span>
                        <span>Speed Test</span>
                    </div>
                    <div className="col">
                        <span>Help Center</span>
                        <span>Investor Relations</span>
                        <span>Terms of Use</span>
                        <span>Corporate Information</span>
                        <span>Legal Notices</span>
                    </div>
                    <div className="col">
                        <span>Account</span>
                        <span>Jobs</span>
                        <span>Privacy</span>
                        <span>Contact Us</span>
                        <span>Only on Netflix</span>
                    </div>
                </div>
                <div className="select">
                    <BsGlobe className='icon'/>
                    <select name="lang" id="lang">
                        <option value="eng">English</option>
                    </select>
                </div>
                <span style={{marginTop: "2rem", textDecoration:"none"}}>Netflix Pakistan</span>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    padding: 4rem 0px;
    background: black;
    
    .row{
        width: 80%;
        margin: 0px auto;
        span{
            color: rgba(255, 255, 255, 0.7);
            text-decoration: underline;
            margin-bottom: 1rem;
            font-family: 'Poppins', sans-serif;
        }
        .select{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 140px;
            flex-direction: row;
            margin-bottom: 2rem;
            border: 1px solid #fff;
            border-radius: 5px;
            .icon{
                color: #fff;
            }
            #lang{
                font-family: 'Poppins', sans-serif;
                padding: 5px 15px;
                background-color: black;
                color: #fff;
                border: none;
                border-radius: 5px;
                font-size: 15px; 
            }
        }
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            .col{
                flex: 33%;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                span{
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: underline;
                    margin-bottom: 1rem;
                    font-family: 'Poppins', sans-serif;
                } 
            }
            @media screen and (max-width:800px){
                flex-direction: column;
                align-items: flex-start;
                .col{
                    flex: 100%;
                }
            }
        }
    }
`
export default Footer;
