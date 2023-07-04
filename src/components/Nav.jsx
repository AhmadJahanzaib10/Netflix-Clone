import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/netflix.png'
const Nav = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="btn-container">
                    <button className="btn">Sign In</button>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    .container{
        width: 80%;
        display: flex;
        margin: 0px auto;
        justify-content: space-between;
        align-items: center;
        .logo{
            width: 150px;
            img{
                width: 100%;
            }
        }
        .btn-container{
            button{
                background-color: rgb(229,9,20);
                color: #fff;
                min-height: 2rem;
                padding: 0.25rem 1rem;
                border: 1px solid rgb(229,9,20);
                border-radius: 2px;
                font-size: 0.875rem;
                font-family: 'Poppins', sans-serif;
                font-weight: 600;
            }
        }
        @media screen and (max-width: 400px) {
                .logo{
                    width: 110px;
                }
            }
    }

`

export default Nav;