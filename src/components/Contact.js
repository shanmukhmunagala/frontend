import React, { Component } from 'react'
import axios from 'axios'
export default class Contact extends Component {
  state={
    users:[]
  }
  componentDidMount(){
    axios.get("https://backend-9wfu.onrender.com/retrieve")
      .then((res)=>{
        console.log(res.data)
        this.setState({
          users:res.data
        })
      })
  }
  render() {
    return (
      <div>
        {
          this.state.users.map((pr)=>(
            <div key={pr._id}>
              <p>{pr.name}</p>
              <p>{pr.passcode}</p>
            </div>
          ))
        }
        
      </div>
    )
  }
}
