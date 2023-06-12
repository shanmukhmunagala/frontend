import React from 'react'
import Demo from './Demo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import  Navigation from './components/Navigation'
class App extends React.Component{
  state={
    companyName:"codegnan",
    address:"opposite to PB Siddartha College"
  }
  render(){
    return(
       <div>
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      {/* // <h1>good afternoon</h1>
      // <p>value is {this.state.companyName}</p>
      // <p>{this.state.address}</p>
      // {/* <Demo name="Shannu" age="19" /> }
      // <Demo name="Anu" age="25"/> */}
      </div>
    )
  }
}
export default App