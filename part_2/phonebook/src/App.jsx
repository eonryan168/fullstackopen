import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [notificationMsg, setNotificationMsg] = useState(null)

  useEffect(() => {
    // console.log("Effect start")
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })  
  }, [])
  // console.log(`after ${JSON.stringify(persons)}`)

  // filteredPersons changes everytime persons changed so that numbers rendered
  // are based on persons
  useEffect(() => {
    setFilteredPersons(persons)
  }, [persons])

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

  const handleDelete = (id) => {
    const person = persons.find(person => person.id === id)

    if (confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setFilteredPersons(filteredPersons.filter(person => person.id !== id))
      })
    }
  }
  
  const checkNumber = () => {
    const person = persons.find(person => {
      // console.log(`person.name ${person.name}`);
      // console.log(`newName ${newName}`);
      return person.name === newName; 
    });
    
    if (person.number === number) {
      return true
    } else {
      return false
    }
  }

  // check if the name is already in the phonebook
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

    if (checkDuplicate() === true && checkNumber() === true) {
      alert(`${newName} is already added to the phonebook`)
      setNewName("")
    } 

    else if (checkDuplicate() === true && checkNumber() === false) {
      if (confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)) {
        const findTheObj = persons.find(person => {
          if (person.name === newName) {
            return person
          } 
        });

        const whatsMyID = findTheObj.id
        // console.log(`whats my id ${JSON.stringify(whatsMyID)}`)
        personService
          .updatePerson(whatsMyID, {...detailsToAdd, id: whatsMyID})
          .then((updatedPerson) => {
            // replace the changed object to the one with the update number
            const updatedPersons = persons.map((person) =>
              person.id === whatsMyID ? updatedPerson : person
            );

            setPersons(updatedPersons)
            setFilteredPersons(updatedPersons)
            setNewName("")
            setNumber("")
            setNotificationMsg(
              `Updated the number`
            )
            setTimeout(() => {
              setNotificationMsg(null)
            }, 1500)
        })
      } 
    }

    else {
      personService
        .createPerson(detailsToAdd)
        .then(newPerson => {
          // console.log(` this is response ${JSON.stringify(response.data)}`)
          setPersons(persons.concat(newPerson)) //because of async nature of setPersons, 
                                                //console.log(persons) show the state before the     
          setNewName("")
          setNumber("")
          setNotificationMsg(
            `Added ${newName} to phonebook`
          )
          setTimeout(() => {
            setNotificationMsg(null)
          }, 1500)
        })

    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMsg} />
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
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete}/> 
      <div>debug: {newName} {number}</div>

    </div>
  )
}

export default App