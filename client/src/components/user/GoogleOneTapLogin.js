import { Google } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const GoogleOneTapLogin = () => {
  return (
    <Button
    variant='outlined'
    startIcon={<Google sx={{color:'red'}} />}
    >
        Login with Google
    </Button>
  )
}

export default GoogleOneTapLogin
