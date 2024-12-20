import React, { useEffect } from 'react'
import './Card.css'
import { css } from './styled-system/css'
import { CharCardStyles,Right,statusType,subMenuInfo,tag,rightPara } from './PandaStyles/CardStyles'

function Card({name,status,type,lastKnownLocation,firstSeen,img}) {
  return (
    <div className={CharCardStyles}>
        <div className={css({flex:"4",bgSize:"contain"})} style={{
            backgroundImage:`url(${img})`
        }}>
        </div>
        <div className={Right}>
            <p className={css({fontSize:"25px",fontWeight:"bold"})}>{name}</p>
            <p className={statusType}> 
            <span
                className={css({
                    width:'10px',
                    height:'10px',
                    borderRadius:'50%',
                    backgroundColor: status=='Alive'?'green':status=='Dead'?'red':'orange'
                })}
            >
            </span> 
            {status} - {type}</p>

            <p className={subMenuInfo}>
                <span className={tag}>Last Known location:</span>
                <span className={css({fontSize:"20px"})}>{lastKnownLocation}</span>
            </p>

            <p className={subMenuInfo}>
                <span className={tag}>First Seen in:</span>
                <span className={css({fontSize:"20px"})}>{firstSeen}</span>
            </p>
        </div>
    </div>
  )
}

export default Card

