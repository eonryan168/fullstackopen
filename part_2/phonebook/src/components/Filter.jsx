const Filter = ({handleFilter}) => {
  return (
    <form>
      <div>
        filter shown with <input onChange={(e) => handleFilter(e)}/>
      </div>
    </form>
  )
}

export default Filter