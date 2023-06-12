import React from 'react'
class Demo extends React.Component{
    state={
        city:"Mangalagiri"
    }
    display=()=>{
        this.setState({
            city:"Bankok"
        })
    }
    render(){
        return(
            <div>
            <h1>{this.state.city}</h1>
            <p>Name:{this.props.name}</p>
            <p>Age:{this.props.age}</p>
            <button onClick={this.display}>click</button>
            </div>
        )
    }

}
export default Demo