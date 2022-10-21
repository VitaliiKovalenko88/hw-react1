const Filter = () => {
  return <div>
    <p>Find contacts by name</p>
    <input value={this.filter} onChange={this.changeFilter} />
  </div>
}

export default Filter;