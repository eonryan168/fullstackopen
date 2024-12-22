const Persons = ({filteredPersons, handleDelete}) => {
  return (
    <>
      {filteredPersons.map((person) => (
        <p key={person.id} style={{ margin: 0, padding: 0 }}>
          {person.name} {person.number}
        <button onClick={() => handleDelete(person.id)}>delete</button> 
        </p>
      ))}  
    </>
  )
}

export default Persons