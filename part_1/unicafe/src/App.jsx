import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => { 
  return ( <button onClick={handleClick}>
    {text}
  </button> )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = ((props.good * 1) + (props.neutral * 0) + (props.bad * -1))/all
  const positive = (props.good/all) * 100

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return ( 
    <>
      <table>
      <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positive} %`}/>
      </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodFeedback = () => setGood(good + 1) 
  const handleNeutralFeedback = () => setNeutral(neutral + 1) 
  const handleBadFeedback = () => setBad(bad + 1) 

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGoodFeedback} text="good" />
      <Button handleClick={handleNeutralFeedback} text="neutral" />
      <Button handleClick={handleBadFeedback} text="bad" />
      <Header text="statistics" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App