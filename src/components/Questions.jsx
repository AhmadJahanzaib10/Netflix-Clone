import React, {useState} from 'react';
import styled from "styled-components";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
const Questions = ({question}) => {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <div className="ques" onClick={()=> setOpen(!open)}>
                <h4>{question.ques}</h4>
                {open? <AiOutlineMinus className='icon'/> :<AiOutlinePlus className='icon'/>}
            </div>
            <div className={open? "ans active": "ans"}>
                <h4>{question.ans}</h4>
            </div>
        </Container>
    );
}
const Container = styled.section`
    margin-bottom: 10px;
    .ques{
        width: 100%;
        padding: 1.5rem 1rem;
        background-color: rgb(45,45,45);
        /* background-color: rgb(82, 62, 62); */
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border-bottom: 1px solid black;
        h4{
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: calc(8px + 1rem);
            font-weight: 400;
            margin-bottom: 0rem;
        }
        .icon{
            color: #fff;
            font-size: 40px;
        }
    }
    .ans{
        width: 100%;
        padding: 1.5rem 1rem;
        background-color: rgb(45,45,45);
        display:none;
        h4{
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: calc(8px + 1rem);
            font-weight: 400;
        }
    }
    .active{
        display: block;
    }
    @media screen and (max-width:650px) {
            .ques{
                padding: 2rem 1rem;
                h4{
                    font-size: calc(8px + 0.5rem);
                }
                .icon{
                    color: #fff;
                    font-size: 25px;
                }
            }
            .ans{
                padding: 1.5rem 1rem;
                h4{
                    font-size: calc(8px + 0.5rem);
                }
            }
        }
`
export default Questions;
