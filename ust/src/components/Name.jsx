import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var[val,setval]=useState()

    const react=() =>{
        console.log("react clicked")
        setval("react")
    }
    const angular=() =>{
        console.log("angular clicked")
        setval("angular")
    }
    const next=() =>{
        console.log("next clicked")
        setval("next")
    }
    
    useEffect(()=>{
        angular()
    },[])
  return (
    <div>
        <Typography variant='h6'>
            welcome {val}
        </Typography>
        <Button onClick={react} variant="contained" >React</Button>
        <Button onClick={angular} variant="contained" >angular</Button>
        <Button onClick={next} variant="contained" >Next</Button>
    </div>
  )
}

export default Name