import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setcount]=useState(0);

 const add=() =>{
    console.log("add btn clicked")
    setcount(count+1)

 }
 const sub=() =>{
    console.log("sub btn clicked")
    setcount(count-1)
 }
  return (
    <div>
         <Typography variant="h4">count</Typography>
         <Button onClick={add} variant='contained' color='success'>+</Button>
         <Button onClick={sub} variant='contained' color='error'>-</Button>
    </div>
  )
}

export default Counter