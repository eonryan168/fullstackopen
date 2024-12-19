import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')

  const handleNameChange = (event) => {
    // console.log(event.target)
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    // console.log(event.target)
    setNumber(event.target.value)
  }

  const checkDuplicate = () => {
    const duplicateTrue = persons.some(person => {
      // console.log(`person.name ${person.name}`);
      // console.log(`newName ${newName}`);
      return person.name === newName; 
    });
    // console.log(`duplicateTrue ${duplicateTrue}`);
    return duplicateTrue;
  };

  const addDetails = (event) => { 
    event.preventDefault()
    // console.log(event.target)
    // console.log(`newName ${newName}`)
    const detailsToAdd = {name: newName, number: number}
    console.log(detailsToAdd)
    // console.log(persons)

    if (checkDuplicate() === true) {
      alert(`${newName} is already added to the phonebook`)
      setNewName("")
    } else {
      setPersons(persons.concat(detailsToAdd)) //because of async nature of setPersons, 
                                              //console.log(persons) show the state before the
      setNewName("")
      setNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addDetails}> 
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input type='tel' value={number} onChange={handleNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name} style={{ margin: 0, padding: 0 }}>{person.name} {person.number}</p>)}
      <div>debug: {newName} {number}</div>

    </div>
  )
}

export default App