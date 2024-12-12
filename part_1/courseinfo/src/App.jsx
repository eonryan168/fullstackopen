const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]
  
  return (
    <div>
      <Header course={course} />
      <Content part={parts} exercises={exercises} />
      <Total exercises1={exercises[0]} exercises2={exercises[1]} exercises3={exercises[2]}/>
    </div>
  )
}

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({part, exercises}) => {
  return (
    <>
      <Part part={part[0]} exercises={exercises[0]} />
      <Part part={part[1]} exercises={exercises[1]} />
      <Part part={part[2]} exercises={exercises[2]} />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
}

export default App