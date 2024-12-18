import { useState } from 'react'

const Header = ({text}) => <h2>{text}</h2>

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

const Anecdote = ({index, votes, anecdotes}) => {
  return (
    <div>
      <p>{anecdotes[index]}</p>
      <p>has {votes} votes</p>
    </div>
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

  const maxValue = Math.max(...Object.values(points))
  const indexOfMaxAnecdote = Number(Object.keys(points).find(key => points[key] === maxValue));
  
  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote index={selected} votes={points[selected]} anecdotes={anecdotes} />
      <div>
        <VoteButton handleVote={() => handleVote(selected)} />
        <NextButton handleNextButton={handleNextButton} />
      </div>
      <Header text="Anecdote with most votes wins" />
      <Anecdote index={indexOfMaxAnecdote} votes={maxValue} anecdotes={anecdotes} />
    </div>
  )
}

export default App