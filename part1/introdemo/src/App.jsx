import { useState } from 'react'
import IncDec from './components/IncDec'
import LeftRight from './components/LeftRight'
import Third from './components/Third'

const App = () => {

  return (
    <div>
      <IncDec />
      <br/>
      <LeftRight />
      <br/>
      <Third />
    </div>
    
  )
}

export default App