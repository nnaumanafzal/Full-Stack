import { useState } from 'react'
import axios from'axios'
import methods from '../services/phonebook.js'

const PersonsForm = ({persons, setPersons}) => {
    
    const baseUrl = 'http://localhost:3001/persons' 
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

      
    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        const newContact = { name: newName, number: newNumber};

        if(persons.some(p => p.name === newName)) {
            const personsId = persons.find(p => p.name === newName).id
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                methods
                    .update(personsId, newContact)
                    .then(response => setPersons(persons.map(p => p.id !== personsId ? p : response)))
            }
        } else {
            methods.create(newContact).then(response => setPersons(persons.concat(response)))
        }
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