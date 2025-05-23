import { useState } from 'react'
import IncDec from './components/IncDec'
import LeftRight from './components/LeftRight'
import ThirdExample from './components/ThirdExample'

const App = () => {

  return (
    <div>
      <IncDec />
      <br/>
      <LeftRight />
      <br/>
      <ThirdExample />
    </div>
    
  )
}

export default App