const Filter = ({value, onChange}) => {
  return <div>
    <p>Find contacts by name</p>
    <input value={value} onChange={onChange} />
  </div>
}

export default Filter;