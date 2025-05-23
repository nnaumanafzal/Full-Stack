import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const IncDec = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text={"Inc"} />
      <Button onClick={setToZero} text={"Zero"} />
      <Button onClick={decreaseByOne} text={"Dec"} />
    </div>
    
  )
}

export default IncDec