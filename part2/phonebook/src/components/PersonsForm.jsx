import { useState } from 'react'
import methods from '../services/phonebook.js'

const PersonsForm = ({persons, setPersons, setAlert}) => {
    
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
                    .then(response => {
                        setPersons(persons.map(p => p.id !== personsId ? p : response))
                        setAlert({type: 'success', text: `Contact ${newName} is updated`})
                    })
                    .catch(() => {
                        setPersons(persons.filter(p => p.id !== personsId))
                        setAlert({type: 'error', text: `Information of ${newName} has already removed from server`})
                    })
            }
        } else {
            methods.create(newContact).then(response => setPersons(persons.concat(response)))
            setAlert({type: 'success', text: `Added ${newName}`})
        }
        setTimeout(() => {
          setAlert({type: null, text: null})
        }, 5000)
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