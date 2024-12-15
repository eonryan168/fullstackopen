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
    </div>
  )
}

export default App