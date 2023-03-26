import React, { Component } from 'react'

 class Greet extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {  
    
    const data = this.props.data.map((element, index) => {
        console.log("index is "+ index + "element is "+ element);
       return <li key= {index}>{element} </li>;
    });
    
            return (
                <div>
                    <ul>{ data }</ul>
                </div>
            )      
  }
}

export default Greet
