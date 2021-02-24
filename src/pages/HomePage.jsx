import React from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
 import Questions from '../components/Questions'
import { useState, useEffect } from 'react'
const HomePage = () => {

  const [questions, GetQuestions] = useState([])

  const getQuestionsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Question/GetAllQuestions'
      
       
    )
    const response = resp.data
    GetQuestions(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
    
  } 

  useEffect(() => {
    
    getQuestionsFromApi()
  }, [])
  console.log(questions)


  return (
    <>
    <header>
  <NavBar />
  </header>
  <div>
    <ul>
    {questions.map(Que => {
      return <Questions
      z={Que.id} 
      title={Que.questionTitle}
      sring={Que.questionString}
      vote={Que.voteQuestion}   
      />
    })}
     </ul>
  </div>
  </> 
  )
}

export default HomePage
