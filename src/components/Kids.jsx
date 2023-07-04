import React from 'react';
import styled from "styled-components"
import kids from '../assets/kids.png'
const Kids = () => {
    return (
        <Wrapper>
            <div className="col-2">
                <img src={kids} alt="Netflix" id="tv"/>
            </div>
            <div className="col-1">
                <div>
                <h2>Create profiles for kids</h2>
                <h4>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h4>
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
        align-items: start;
        flex-direction: column;
        flex: 50%;
        div{
            width: 60%;
        }
        h2{
            color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: calc(14px + 1.6rem);
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
        align-items: end;
        flex-direction: column;
        position: relative;
        img{
            width: 80%;
            z-index: 1;
        }
    }
    @media screen and (max-width: 900px){
        flex-direction: column;
        .col-1, .col-2{
            flex: 100%;
            align-items: center;
        }
        .col-1{
            padding: 1rem 0px 3rem 0px;
            div{
                width: 90%;
            }
            h2{
                font-size: calc(8px + 1.4rem);
                font-family: 'Poppins', sans-serif;
            }
            h4{
                font-size: calc(8px + 0.7rem);
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
            }
        }
        .col-2{
            padding: 3rem 0px 1rem 0px;
        }
    }
`
export default Kids;
