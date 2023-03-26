import React from 'react'

function Test2(props) {
  return (
    <div>
      <button onClick = {()=>props.method('payal')}>Greet Parent</button>
    </div>
  )
}

export default Test2
