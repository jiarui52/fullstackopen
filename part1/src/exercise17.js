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

const All = (props) =>{
  return (
    <div>all {props.good + props.bad + props.neutral}</div>
  )
}

const Average = (props) =>{
  return (
    <div>average {(props.good + props.bad * -1 )/(props.good + props.neutral + props.bad)}</div>
  )
}

const Positive = (props) =>{
  return (
    <div>positive {(props.good)/(props.good + props.neutral + props.bad)}</div>
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
      <All good={good} neutral={neutral} bad={bad}/>
      <Average good={good} neutral={neutral} bad={bad}/>
      <Positive good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App