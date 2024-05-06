import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useValue } from '../../context/contextProvider'
import { Close } from '@mui/icons-material'

const Login = () => {
    const {state:{openLogin}, dispatch} = useValue()
    const [title, setTitle] = useState('Login')
    const [isRegister, setIsRegister] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const handleClose = () => {
        dispatch({type:'CLOSE_LOGIN'})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <Dialog
    open={openLogin}
    onClose={handleClose}
    >
        <DialogTitle>
            {title}
            <IconButton
            sx={{
                position:'absolute',
                top:8,
                right:8,
                color:(theme)=>theme.palette.grey[500]
            }}
            onClick={handleClose}
            >
                <Close />
            </IconButton>
        </DialogTitle>
        <form onSubmit={handleSubmit}>
            <DialogContent dividers>
                <DialogContentText>
                    Please fill your information in the fields below:
                </DialogContentText>
                {isRegister &&
                <TextField
                autoFocus
                margin='normal'
                variant='standard'
                id='name'
                label='Name'
                type='text'
                fullWidth
                inputRef={nameRef}
                inputProps={{minLength:2}}
                required
                />
                }
                <TextField
                autoFocus={!isRegister}
                margin='normal'
                variant='standard'
                id='email'
                label='Email'
                type='text'
                fullWidth
                inputRef={nameRef}
                required
                />
            </DialogContent>
        </form>
    </Dialog>
  )
}

export default Login
