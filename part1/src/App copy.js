import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
       <p> Number of total exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>

  )
}

const Part = (props)=> {
  return (
    <div>
      <p> There are {props.exercise} exercises in section of {props.part}</p>
    </div>
  ) 
  
}

const Content = (props) => {
  
  return (
  <div> 
    <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
    <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
    <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    
  </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercise1 = 10
  // const part2 ='Using props to pass data'
  // const exercise2 = 7
  // const part3 = 'State of a component'
  // const exercise3 = 14
  
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercise: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercise: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercise: 14
  // }
 
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
  
export default App;