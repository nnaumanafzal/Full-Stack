const Persons = ({persons, find}) => {
    return (
        <div>
            {
                persons.filter(p => p.name.toLowerCase().includes(find.toLowerCase()))
                    .map(person => <span key={person.id}>{person.name} {person.number}<br/></span>)
            }
        </div>
    )
}

export default Persons;