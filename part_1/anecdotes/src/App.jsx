import { useState } from 'react'

// The range of possible values is [0, max - 1]
const getRandomInt = (max) => Math.floor(Math.random() * max); 

const VoteButton = ({handleVote}) => {
  return (
    <button onClick={handleVote}>vote</button>
  )
}

const NextButton = ({handleNextButton}) => {
  return (
    <button onClick={handleNextButton}>next anecdote</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })

  const handleNextButton = () => setSelected(getRandomInt(anecdotes.length))
  
  const copy = { ...points }
  const handleVote = (anecdoteIndex) => {
    copy[anecdoteIndex] += 1
    setPoints(copy)
  }
  
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <div>
        <p>has {points[selected]} votes</p>
        <VoteButton handleVote={() => handleVote(selected)} />
        <NextButton handleNextButton={handleNextButton} />
        <p>debug: {JSON.stringify(points)}</p>
      </div>
    </div>
  )
}

export default App