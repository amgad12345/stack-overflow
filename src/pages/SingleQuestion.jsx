import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Answers from '../components/Answers'
const SingleQuestion = props => {

  const [question, GetSingleQuestion] = useState([])
  const [answerss, GetAnswers] = useState([])
  const [awnString, SetawnString] = useState('')
  const [vote, SetVote] = useState(0)

  const getSingleQuestionApi = async () => {
    console.log('question id ' + props.match.params.id)
    const resp = await axios.get(
      `https://localhost:5001/api/Question/getQuest-Answer/${props.match.params.id}`
    )
    console.log(resp.data.answers)
    GetSingleQuestion(resp.data)
    GetAnswers(resp.data.answers)
    
  }


  useEffect(() => {
    getSingleQuestionApi()
  }, [])

  const sendtAnswerToApi = async () => {
    console.log("sending an answer to question id :" + props.match.params.id)
  const resp = await axios.post(
    'https://localhost:5001/api/Answer',
    {
      answerString: awnString,
      voteAnswer: vote,
      questionId: parseInt(props.match.params.id),
    }
  )
  window.location.reload();
  }
  return (
    <>
    <div>
    <h1 >{question.questionTitle}</h1>
    <h1 >{question.questionString}</h1>
    </div>
    <div>
     <ul>
     {answerss.map(ans => {
      return <Answers
      aid={ans.id} 
      astring={ans.answerString}
      avite={ans.voteAnswer}  
      />
    })}
     </ul>
    </div>
    <div>
      <h1>Your Answer</h1>
      <input
       className="inp"
       type="text"
       className="patient_info"
       placeholder="Answer"
       value={awnString}
      onChange={e => SetawnString(e.target.value)}
      />
    </div>
    <button
     id = "button"
     className="post_Answer"
     onClick={sendtAnswerToApi}
    >post your Answer
    </button>
</>
  )
}

export default SingleQuestion