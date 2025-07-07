import { useState, useEffect } from 'react'
import methods from './services/phonebook'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import Alert from './components/Alert'

const App = () => {
  const [persons, setPersons] = useState([])
  const [find, changeFind] = useState('')
  const [newAlert, setAlert] = useState({type: null, text: null})
  const handleFind = (event) => changeFind(event.target.value)

  useEffect(()=>{
    methods
      .getAll()
      .then(response => setPersons(response))
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Alert message={newAlert}/>
      <Filter 
        find={find} 
        onChange={handleFind}
      />
      <h3>add a new</h3>
      <PersonsForm 
        persons={persons} 
        setPersons={setPersons} 
        setAlert={setAlert}
      />
      <h3>Numbers</h3>
      <Persons 
        persons={persons} 
        setPersons={setPersons} 
        find={find} 
        setAlert={setAlert}
      />
    </div>
  )
}

export default App