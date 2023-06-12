import React ,{useState} from 'react'
import axios from 'axios'
function Home() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
        function save(e){
            setUsername(e.target.value)
        }
        function show(){
            console.log(username,password)
            axios.post("https://backend-9wfu.onrender.com/add",{name:username,passcode:password})
            .then((res)=>{
              console.log(res)
            })
            setPassword("")
            setUsername("")
        }
  return (
    <div>
      <p><input value={username}placeholder='enetr a name' onChange={save}/></p>
      <p><input value={password}placeholder='enetr password' onChange={(e)=>setPassword(e.target.value)}/></p>
        <button onClick={show}>Submit</button>
    </div>
  )
}
export default Home