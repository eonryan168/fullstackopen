import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => { 
  return ( <button onClick={handleClick}>
    {text}
  </button> )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = ((props.good * 1) + (props.neutral * 0) + (props.bad * -1))/all
  const positive = (props.good/all) * 100

  return ( 
    <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
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
  let all = good + neutral + bad

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