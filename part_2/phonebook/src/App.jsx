import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    // console.log(event.target)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log(event.target)
    const nameToAdd = {name: newName}
    console.log(nameToAdd)

    setPersons(persons.concat(nameToAdd)) //because of async nature of setPersons, 
                                          //console.log(persons) show the state before the
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name} style={{ margin: 0, padding: 0 }}>{person.name}</p>)}
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App