import { useState } from 'react'

const PersonsForm = ({persons, setPersons}) => {
    
      const [newName, setNewName] = useState('')
      const [newNumber, setNewNumber] = useState('')

      
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newId = Math.max(0, ...persons.map(p => p.id)) + 1;

    persons.some(p => p.name === newName) 
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({ name: newName, number: newNumber, id: newId}))

    setNewName('')
    setNewNumber('')
  }

    return (
        <form onSubmit={handleSubmit}>
            <div>name: <input value={newName} onChange={handleNameChange}/></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
            <div> <button type="submit">add</button></div>
        </form>
    )
}

export default PersonsForm;