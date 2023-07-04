import React from 'react';
import styled from "styled-components";
import Questions from './Questions'
const FAQs = () => {
    const questions =[
        {
            ques: "What is Netflix",
            ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        },
        {
            ques: "How much does Netflix costs?",
            ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts."
        },
        {
            ques: "How do I cancel?",
            ans: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            ques: "Wher can I watch on Netflix?",
            ans: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
    ]
    return (
        <Wrapper>
            <h2>Frequently Asked Questions</h2>
            <div className="questions">
                {questions.map((question, index) => {
                    return <Questions key={index} question={question}/>
                })}
            </div>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="email">
                <input type="email" placeholder='Email address'/>
                <button className='btn'>Get Started &#x3e; </button>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 1rem;
    border-bottom: 15px solid rgb(35 35 35);
    h2{
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-size: calc(14px + 1.6rem);
        margin-bottom: 2rem;
        font-weight: 800;
        text-align:center;
    }
    .questions{
        width: 90%;
        margin-bottom: 3rem;
    }
    h4{
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-size: calc(10px + 0.7rem);
        margin-bottom: 2rem;
        font-weight: 500;
        text-align:center;
    }
    .email{
        input{
            width: 400px;
            padding: 16px 10px;
            background-color: rgba(0,0,0,0.5);
            border-radius: 6px;
            border: 1px solid;
            color: #fff;
            font-size: 14px;
            font-family: 'Poppins', sans-serif;
        }
        button{
            padding: 16px 10px;
            font-size: 18px;
            font-weight: 700;
            border-radius: 3px;
            background:  rgb(229,9,20);
            border: 1px solid rgb(229,9,20);
            margin-left: 2rem;
            font-family: 'Poppins', sans-serif;
            color: #fff;
        }
    }
    @media screen and (max-width: 650px) {
            h2{
                font-size: calc(8px + 1.4rem)
            }
            h4{
                font-size: calc(8px + 0.6rem)
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
            .questions{
                width: 100%;
            }
        }
`;
export default FAQs;
