import { useState,useEffect } from 'react'
import Card from './Card'
import {useQuery} from '@apollo/client'
import {GET_ALL_CHARACTERS} from './operations/queries/GET_ALL_CHARACTERS'
import {css} from './styled-system/css'
import { gridStyle,searchInputStyles } from './PandaStyles/AppStyles'

function App() {
  const [search,setSearch]=useState('')

  const {loading,error,data,refetch} = useQuery(GET_ALL_CHARACTERS,{
    variables:{
      page:2,
    }
  })

  console.log(data)

  if(loading) return <p>Loading...</p>

  return (
    <>
    {/* <p className={css({fontSize:"2xl",color:"orange",margin:'10px',fontWeight:"bold",marginLeft:"75px"})}>Rick and Morty</p> */}
    <input className={searchInputStyles} type="text" onChange={(e)=>refetch({
        page:3,
        filters:{
          name:e.target.value
        }
      
    })}/>

    {search&&<select className='status-input' name="" id="" onChange={(e)=>{
      getByStatus(e.target.value)
      }}>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>}

    <div className={gridStyle}>
    {data&&data.characters.results.map(d=>{
        return <Card 
        name={d.name} 
        status={d.status}
        type={d.species}
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

