import React, { useEffect } from 'react'
import axios from 'axios'
import './Card.css'
import './App.css'

function Card({name,status,type,lastKnownLocation,firstSeen,img}) {
    useEffect(()=>{
        console.log(img)
    },[])
  return (
    <div className='char-card'>
        <div className="left-img" style={{
            backgroundImage:`url(${img})`
        }}>
            {/* <img src={img} className='char-img' alt="" /> */}
        </div>
        <div className="right">
            <p className="name">{name}</p>
            <p className="status-type">{status} - {type}</p>

            <p className='last'>
                <span>Last Known location:</span>
                <span>{lastKnownLocation}</span>
            </p>

            <p className="firstseen">
                <span>First Seen in:</span>
                <span>{firstSeen}</span>
            </p>
        </div>
    </div>
  )
}

export default Card

