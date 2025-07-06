import methods from '../services/phonebook.js'

const Persons = ({persons, setPersons, find}) => {

    const handleDelete = (id, name) => {
        if(window.confirm(`Delete ${name} ?`)) { 
            methods.remove(id)
            setPersons(persons.filter(person => person.id!==id))
        }
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