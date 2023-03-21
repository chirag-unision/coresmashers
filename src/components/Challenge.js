import React from 'react';
import { useState, useEffect } from 'react';
import ChallengeQS from './ChallengeQs';

const Challenge = ({challengeId, userid}) => {
    const [questions, setQuestions] = useState([{
        id:1,
        question:"1In free convection heat transfer transition from laminar to turbulent flow is governed by the critical value of the",
        option_one:" Reynold's number",
        option_two:"Grashoff's number",
        option_three:"Reynold's number, Grashoff's number",
        option_four:"Prandtl number, Grashoff's number",
    },
    {
        id:2,
        question:"In a refrigerating machine, heat rejected is __________ heat absorbed.",
        option_one:"equal to",
        option_two:"less than",
        option_three:"greater than",
        option_four:"none",
    },
    {
        id:3,
        question:"A heat pump working on a reversed Carnot cycle has a C.O.P. of 5. It works as a refrigerator taking 1 kW of work input. The refrigerating effect will be",
        option_one:"1kW",
        option_two:"2kW",
        option_three:"3kW",
        option_four:"4kW",
    },
    {
        id:4,
        question:"4In free convection heat transfer transition from laminar to turbulent flow is governed by the critical value of the",
        option_one:" Reynold's number",
        option_two:"Grashoff's number",
        option_three:"Reynold's number, Grashoff's number",
        option_four:"Prandtl number, Grashoff's number",
    },

    ]);
    const [question, setQuestion] = useState(questions[0]);
    const [answers, setAnswers] = useState({});
    const [challenge, setChallenge] = useState({
        id:123,
        name:"Challenge Mech #123",

    });


        
    

    const getQuestions = async () => {
        const response = await fetch(`https://core-smashers-api.onrender.com/api/challenge/${challengeId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "authtoken": sessionStorage.getItem('authtoken'),
                }
            })
        const data = await response.json()
        setQuestions(data.data.challenge.questions);
        setQuestion(data.data.challenge.questions[0]);
        setChallenge(data.data.challenge);
        // data.data.challenge.id
        // data.data.challenge.name
        // data.data.challenge.questions
        // data.data.challenge.questions[0].id
        // data.data.challenge.questions[0].question
        // data.data.challenge.questions[0].difficulty
        // data.data.challenge.questions[0].topic
        // data.data.challenge.questions[0].option_one
        // data.data.challenge.questions[0].option_two
        // data.data.challenge.questions[0].option_three
        // data.data.challenge.questions[0].option_four
        // data.data.challenge.total_marks
        // data.data.challenge.start_time
        // data.data.challenge.end_time
        // data.data.challenge.type

        setQuestions({});
    };
    const submitAnswer = async (ans,qid,cid) => {
        console.log(ans,qid,cid);
        // const response = await fetch(`https://core-smashers-api.onrender.com/api/challenge/${cid}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //
        //     },
        //     body: {userid:userid, answer:ans,challengeId:cid,questionId:qid}
        // });
        // const data = await response.json();
        //
        // if( data.status === "success") {
        //     console.log("Answer Submitted");
        // }else {
        //     console.log("Network Error");
        // }
    }

    // useEffect(() => {
    //     getQuestions()
    // }, []);
    return (
        <div style={{position:"absolute",width:"100%",height:"100%",display:"flex"}}>
            <div style={{borderRight:"lightgrey 1px solid",width:"33%",paddingTop:"50px",height:"100%"}}>
                {questions && questions.map((qs) => (
                    <div style={{fontWeight:(qs.id===question.id)?"600":"500", width:"100%",height:"50px",borderBottom:"lightgrey 1px solid",boxShadow:""}} onClick={()=>{setQuestion(qs)}}>
                        {qs.question.substring(0,20)+"..."}
                    </div>))
                }
            </div>
            <div style={{width:"67%",height:"100%"}}>
                <div style={{borderBottom:"lightgrey 1px solid",width:"100%",height:"50px",display:"flex"}}>
                    <div className={"m-auto"}>{challenge.name}</div>
                </div>
                <div style={{width:"100%",height:"calc(100% - 50px)"}}>
                <ChallengeQS userId={userid} selected={question?.selected} question={question} setAnswer={(ans)=>{setAnswers({...answers,[question.id]:ans}); submitAnswer(ans,question.id,challengeId) } }  answers={question.answers}/>
                    {/* <ChallengeQS userId={1232} selected={{}} question={"The C.O.P. of an absorption type refrigerator is given by (where T1 = Temperature at which the working substance receives heat, T2 = Temperature of cooling water, and T3 = Evaporator temperature)?"} setAnswer={(ans)=>{setAnswers({...answers,5:ans}); submitAnswer(ans,5,6) } }  answers={["a","b","c","d"]}/> */}
                    {/* {questions.map((question) => (
                        <ChallengeQS userId={userid} selected={question?.selected} question={question.question} setAnswer={(ans)=>{setAnswers({...answers,[question.id]:ans}); submitAnswer(ans,question.id,challengeId) } }  answers={question.answers}/>
                        ))} */}
                </div>
            </div>
        </div>
    )
}
export default Challenge;