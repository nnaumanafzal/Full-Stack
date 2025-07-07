import methods from '../services/phonebook.js'

const Persons = ({persons, setPersons, find, setAlert}) => {

    const handleDelete = (id, name) => {
        if(window.confirm(`Delete ${name} ?`)) { 
            methods
                .remove(id)
                .then( () => setAlert({type: 'success', text: `Removed ${name}`}))
                .catch( () => setAlert({type: 'error', text: `Information of ${name} has alreadt removed from server`}))
            setPersons(persons.filter(person => person.id!==id))
        }
        setTimeout(() => {
          setAlert({type: null, text: null})
        }, 5000)
    }

    return (
        <div>
            {
                persons.filter(p => p.name.toLowerCase().includes(find.toLowerCase()))
                    .map(person => 
                    <div key={person.id}>
                        {person.name}{' '}
                        {person.number}{' '}
                        <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
                        <br/>
                    </div>)
            }
        </div>
    )
}

export default Persons;