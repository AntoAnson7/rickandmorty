import { css } from "../styled-system/css";

export const CharCardStyles = css({
    width:"600px",
    backgroundColor: "#3d3f45",
    borderRadius: "10px",
    display: "flex",
    margin: "10px",
    overflow: "hidden",
    boxShadow: "3px 3px 10px rgba(0,0,0,0.2)"
})

export const Right = css({
    flex: "6",
    padding: "8px",
    display: "flex",
    flexDirection: "column"  
})

export const subMenuInfo = css({
    display: "flex",
    flexDirection: "column",
    paddingTop: "17px"
})

export const tag = css({
    color:"#9E9E93"
})

export const statusType = css({
    display:"flex",
    alignItems:"center",
    gap:"10px"
})

export const rightPara = css({
    margin:"0"
})