import React, { Component } from 'react'
import Test2 from './Test2'

export class Test1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Test1"
      }
    }

    greetParent = (args)=> {
        console.log(`Hello ${args}`)
    }
    
  render() {
    return (
      <div>
            <Test2 method={this.greetParent}/>
      </div>
    )
  }
}

export default Test1
