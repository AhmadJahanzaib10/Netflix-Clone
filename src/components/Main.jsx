import React from 'react';
import styled from 'styled-components'
const Main = () => {
    return (
        <Wrapper>
            <h2>Unlimited movies, TV shows, and more</h2>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="email">
                <input type="email" placeholder='Email address'/>
                <button className='btn'>Get Started &#x3e; </button>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h2, h4{
        text-align: center;
        color: #fff;
        margin-bottom: 1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
        font-size: calc(12px + 0.6rem);
    }
    h2{
        font-size: calc(14px + 2rem);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 700;
    }
    .email{
        margin-top: 2rem;
        input{
            width: 400px;
            padding: 16px 10px;
            background-color: rgba(0,0,0,0.5);
            border-radius: 6px;
            color: #fff;
            font-size: 14px;
            border: 1px solid;
        }
        button{
            padding: 16px 10px;
            font-size: 18px;
            font-weight: 700;
            border-radius: 3px;
            background:  rgb(229,9,20);
            border: 1px solid rgb(229,9,20);
            margin-left: 2rem;
            color: #fff;
        }
    }
    @media screen and (max-width: 650px) {
            h2{
                font-family: 'Poppins', sans-serif;
                font-size: calc(8px + 1.2rem)
            }
            h4{
                font-family: 'Poppins', sans-serif;
                font-size: calc(8px + 0.5rem)
            }
            .email{
                width:100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                input{
                    width: 80%;
                }
                button{
                    margin-top: 2rem;
                    margin-left: 0;
                }
            }
        }
`

export default Main;
