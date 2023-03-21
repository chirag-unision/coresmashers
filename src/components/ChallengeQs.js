import React from 'react';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { Alert, AlertTitle } from '@mui/material';
;

const ChallengeQs = ({selected, question,setAnswer,userId, answers }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(selected);

    return (
        <div>
            <Alert severity="info">
            <AlertTitle>Problem:</AlertTitle>
                {question.question}
            </Alert>
            {/* <div className={"m-4  rounded py-3 px-2" } style={{border:"solid lightgrey 1px",fontWeight:"300"}}>
                {question}
            </div> */}

            {[question.option_one,question.option_two,question.option_three,question.option_four].map((answer) => (
                <div className={"m-1"}>
            <ToggleButton
                color = "success"
                fullWidth={true}
                value= {answer}
                selected={selectedAnswer?selectedAnswer===answer:false}
                onChange={() => {
                    setSelectedAnswer(answer);
                    setAnswer(answer);
                }}
            >
                {answer}
            </ToggleButton></div>))
            }
        </div>
    );
}
export default ChallengeQs;