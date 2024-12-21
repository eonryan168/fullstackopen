import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  useEffect(() => {
    // console.log("Effect start")
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setFilteredPersons(initialPersons) //filteredPersons is initialized with the same data as persons after fetching
      })  
  }, [])
  // console.log(`after ${JSON.stringify(persons)}`)

  const handleNameChange = (event) => {
    // console.log(event.target)
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    // console.log(event.target)
    setNumber(event.target.value)
  }

  const handleFilter = (e) => {
    const filterValue = e.target.value.toLowerCase();
    if (filterValue === '') {
      setFilteredPersons(persons);
      // console.log(persons)
    } else {
      setFilteredPersons(
        persons.filter((person) =>
          person.name.toLowerCase().includes(filterValue)
        )
      );
    }
  };

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
    // console.log(detailsToAdd)
    // console.log(persons)

    if (checkDuplicate() === true) {
      alert(`${newName} is already added to the phonebook`)
      setNewName("")
    } else {
      
      personService
        .createPerson(detailsToAdd)
        .then(newPerson => {
          // console.log(` this is response ${JSON.stringify(response.data)}`)
          setPersons(persons.concat(newPerson)) //because of async nature of setPersons, 
                                                //console.log(persons) show the state before the     
          setNewName("")
          setNumber("")
        })

    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm 
        newName={newName}
        number={number}
        addDetails={addDetails}
        handleNameChange={handleNameChange}
        handleNumber={handleNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
      <div>debug: {newName} {number}</div>

    </div>
  )
}

export default App