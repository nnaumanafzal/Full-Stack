import { useState } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [find, changeFind] = useState('')
  const handleFind = (event) => changeFind(event.target.value)


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