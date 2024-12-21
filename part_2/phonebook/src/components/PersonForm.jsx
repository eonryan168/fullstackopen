const PersonForm = ({newName, number, addDetails, handleNameChange, handleNumber}) => {
  return (
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
  )
}

export default PersonForm