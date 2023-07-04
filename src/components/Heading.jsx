import React from 'react';
import styled from "styled-components"
const Heading = () => {
    return (
        <Wrapper>
            <div className="col-1">
               <div>
               <h2>Watch everywhere</h2>
                <h4>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
               </div>
            </div>
            <div className="col-2"></div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: start; */
    background-color: black;
    border-bottom: 15px solid rgb(35 35 35);
    .col-1{
        flex: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem 0px;
        div{
            width: 60%;
        }
        h2{
            color: #fff;
            font-size: calc(14px + 1.6rem);
            font-weight: 800;
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        h4{
            color: #fff;
            font-size: calc(8px + 1rem);
            font-weight: 500;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin-top: 2rem;
            text-align: center;
        }
    }
    .col-2{
        flex: 50%
    }
    @media screen and (max-width: 900px) {
        flex-direction: column;
        .col-1{
            flex: 100%;
            div{
                width: 90%;
            }
            h2{
                font-size: calc(8px + 1.3rem);
                font-family: 'Poppins', sans-serif;
            }
            h4{
                font-size: calc(8px + 0.6rem);
                font-family: 'Poppins', sans-serif;
            }
        }
    }
`

export default Heading;
