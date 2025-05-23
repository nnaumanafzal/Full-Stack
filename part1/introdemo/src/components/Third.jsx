import { useState } from 'react'

const Display = props => <div>{props.value}</div>
const Button = props => <button onClick={props.onClick}>{props.text}</button>

const Third = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default Third