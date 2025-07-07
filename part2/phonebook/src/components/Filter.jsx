const Filter = ({find, onChange}) => {
    return (
        <div>filter shown with: <input value={find} onChange={onChange}/></div>
    )
}

export default Filter;