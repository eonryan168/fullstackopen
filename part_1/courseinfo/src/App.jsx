const App = () => {
  const course = 'Half Stack application development'
  const parts = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course} />
      <Content part={parts} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises1={10} exercises2={7} exercises3={14}/>
    </div>
  )
}

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Total = (props) => {
  console.log(props)
  return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
}

export default App