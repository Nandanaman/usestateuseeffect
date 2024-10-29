import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar color='secondary'> 
            <Toolbar>
                <Typography varients='h6'>MY APP</Typography>
                &nbsp;
                <Link to='/s'>
                <Button variant='contained'>state</Button>
                </Link>
                &nbsp;
                <Link to='/c'>
                <Button variant='contained'>counter</Button>
                </Link>
            </Toolbar>
        </AppBar>


    </div>
  )
}

export default Navbar
