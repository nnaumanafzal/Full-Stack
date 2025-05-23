import { useState } from 'react'

const LeftRight = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    const newLeft = clicks.left + 1
    setClicks({ ...clicks, left: newLeft })
    setAll(allClicks.concat('L'))
    setTotal(newLeft + clicks.right)
  }
  const handleRightClick = () => {
    const newRight = clicks.right + 1
    setClicks({ ...clicks, right: newRight })
    setAll(allClicks.concat('R'))
    setTotal(clicks.left + newRight)
  }

  const handleReset = () => {
    setClicks({ left: 0, right: 0 })
    setAll([])
    setTotal(0)
  }

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

  const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

  return (
    <div>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        {clicks.left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {clicks.right}
        <br /><br />
        <History allClicks = {allClicks} />
        <b>Total Clicks:</b> {total}
        <br /><br />
        <Button onClick={handleReset} text='Reset'/>
      </div>
    </div>
    
  )
}

export default LeftRight