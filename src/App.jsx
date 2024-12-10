import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import axios from 'axios'

function App() {
  const [search,setSearch]=useState('')
  // const [status,setStatus]=useState(null)

  const [data,setData]=useState([])
  const getData=async()=>{
    console.log(search)
    if(search==''){
      const res=await axios.get('https://rickandmortyapi.com/api/character')
      setData(res.data.results)
    }
    else{
      const res=await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      setData(res.data.results)
    }
}

const getByStatus=async(status)=>{
  console.log(status)
  const res=await axios.get(`https://rickandmortyapi.com/api/character/?status=${status}`)
  setData(res.data.results)
}




useEffect(()=>{
    // getData()
    console.log(data)
},[search])

  return (
    <>
    <input type="text" onChange={(e)=>setSearch(e.target.value)}/>

    {search&&<select name="" id="" onChange={(e)=>{
      getByStatus(e.target.value)
      }}>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>}

    <div className="grid">
    {data&&data.map(d=>{
        return <Card 
        name={d.name} 
        status={d.status}
        type={d.type}
        lastKnownLocation={d.location.name}
        firstSeen={d.origin.name}
        img={d.image}
        />
      })}
    </div>

    </>
  )
}

export default App

// name (string): Character name
// status (string): Whether the character is alive
// type (string): Character type
// lastKnownLocation (string): Last known location
// firstSeen (string): First seen location
// img (string): Character image URL
