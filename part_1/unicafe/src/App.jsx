import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => { 
  return ( <button onClick={handleClick}>
    {text}
  </button> )
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

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {((good * 1) + (neutral * 0) + (bad * -1))/all}</p>
      <p>positive {(good/all) * 100} %</p>
    </div>
  )
}

export default App