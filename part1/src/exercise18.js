import { useState } from 'react'

const DisplayGood =(props)=>{
  return (
    <div>
      good {props.good}
  
    </div>
  )
}

const DisplayNeutral =(props)=>{
  return (
    <div>
      neutral {props.neutral}
  
    </div>
  )
}

const DisplayBad =(props)=>{
  return (
    <div>
      bad {props.bad}
  
    </div>
  )
}

const Statistics =(props)=>{
  return (
    
    <div>
      <div>all {props.good + props.bad + props.neutral}</div>
      <div> average {(props.good + props.bad * -1 )/(props.good + props.neutral + props.bad)}</div>
      <div> positive {(props.good)/(props.good + props.neutral + props.bad)}</div>
    
    </div>
    )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick =()=> setGood(good+1)
  const handleNeutralClick =()=> setNeutral(neutral+1)
  const handleBadClick =()=> setBad(bad+1)

  
    
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {handleGoodClick}> good </button>
      <button onClick = {handleNeutralClick}> neutral</button>
      <button onClick = {handleBadClick}> bad</button>

      <h1>statistic</h1>

      <DisplayGood good={good} />
      <DisplayNeutral neutral={neutral} />
      <DisplayBad bad={bad} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
      

    </div>
  )
}

export default App