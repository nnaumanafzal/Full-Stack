import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [find, changeFind] = useState('')
  const handleFind = (event) => changeFind(event.target.value)

  useEffect(()=>{
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter find={find} onChange={handleFind}/>
      <h3>add a new</h3>
      <PersonsForm persons={persons} setPersons={setPersons}/>
      <h3>Numbers</h3>
      <Persons persons={persons} find={find}/>
    </div>
  )
}

export default App