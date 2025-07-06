import { useState, useEffect } from 'react'
import methods from './services/phonebook'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [find, changeFind] = useState('')
  const handleFind = (event) => changeFind(event.target.value)

  useEffect(()=>{
    methods
      .getAll()
      .then(response => setPersons(response))
  },[])


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter find={find} onChange={handleFind}/>
      <h3>add a new</h3>
      <PersonsForm persons={persons} setPersons={setPersons}/>
      <h3>Numbers</h3>
      <Persons persons={persons} setPersons={setPersons} find={find}/>
    </div>
  )
}

export default App