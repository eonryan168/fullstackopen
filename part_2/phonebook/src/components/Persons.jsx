const Persons = ({filteredPersons}) => {
  return (
    <>
      {filteredPersons.map((person) => (
        <p key={person.name} style={{ margin: 0, padding: 0 }}>
          {person.name} {person.number}
        </p>
      ))}  
    </>
  )
}

export default Persons