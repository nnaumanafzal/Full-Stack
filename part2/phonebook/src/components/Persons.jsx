const Persons = ({persons, find}) => {
    return (
        <div>
            {find === ''
            ? persons.map(person => <span key={person.id}>{person.name} {person.number}<br/></span>)
            : persons.filter(p => p.name.toLowerCase().includes(find.toLowerCase()))
            .map(person => <span key={person.id}>{person.name} {person.number}<br/></span>)
            }
        </div>
    )
}

export default Persons;