import { useState } from 'react'

const Statistics =(props)=>{
  return (
    <div>
      <StatisticLine label="good"  value = {props.feedback.good}  />
      <StatisticLine label="neutral"  value = {props.feedback.neutral}  />
      <StatisticLine label="bad"  value = {props.feedback.bad}  />
      <div>
        <StatisticLine label="all"  value = {props.feedback.good+props.feedback.bad+props.feedback.neutral}  />
        <StatisticLine label="average"  value = {props.feedback.good-props.feedback.bad+props.feedback.neutral}  />
        <StatisticLine label="positive"  value = {props.feedback.good+props.feedback.bad+props.feedback.neutral}  />
      </div>
      {/* TODO: formula to be reviewed */}
    </div>
    )
}

const StatisticLine = (props) => {
 return (
   <div>
   {props.label}:
   {props.value}
   </div>
 )
}

const Button =(props)=>{
  return (
    <button onClick = {props.handleClick} >
     {props.label}
    </button>
  )
}

const App = () => {
  const [feedback, setFeedback]= useState ({
    good: 0,
    neutral: 0,
    bad: 0
  })
  
  const handleGoodClick = () => {
    const newFeedback = {
      ...feedback,
      good: feedback.good + 1,
    }
    setFeedback(newFeedback)
  }

  const handleNeutralClick = () => {
    const newFeedback = {
      ...feedback,
      neutral: feedback.neutral + 1,
    }
    setFeedback(newFeedback)
  }

  const handleBadClick = () => {
    const newFeedback = {
      ...feedback,
      bad: feedback.bad + 1,
    }
    setFeedback(newFeedback)
  }
    
  return (
    <div>
      <h1>give feedback</h1>
      <Button label='Good' handleClick = {handleGoodClick}/>
      <Button label='Neutral' handleClick = {handleNeutralClick}/>
      <Button label='Bad' handleClick = {handleBadClick}/>

      <h1>statistic</h1>

      <Statistics feedback = {feedback} />
            
      

    </div>
  )
}

export default App