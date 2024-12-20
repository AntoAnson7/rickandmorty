import { css } from "../styled-system/css"


export const gridStyle = css({
    width:'98vw',
    placeItems:'center',
    '2xl':{
        display:'grid',
        gridTemplateColumns: 'repeat(3,1fr)'
    },
    lg:{
        display:'grid',
        gridTemplateColumns: 'repeat(2,1fr)'
    },
    sm: {
        display:"flex",
        gap:"30px"
    }
})

export const searchInputStyles = css({
    height:"40px",
    width: "350px",
    borderRadius: "8px",
    marginLeft: "75px",
    padding: "10px",
    outline: "none",
    marginTop: "30px",
    border:"none",
    marginRight: "20px",
    backgroundColor:'black'
})