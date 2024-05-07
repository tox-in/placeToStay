import React, { useEffect, useRef, useState } from 'react';
import { useValue } from '../../context/contextProvider';
import { Close, Send } from '@mui/icons-material';
import PasswordField from './PasswordField';
import GoogleOneTapLogin from './GoogleOneTapLogin';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField,
} from '@mui/material';

const Login = () => {
    const { state: { openLogin }, dispatch } = useValue();
    const [title, setTitle] = useState('Login');
    const [isRegister, setIsRegister] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();

    const handleClose = () => {
        dispatch({ type: 'CLOSE_LOGIN' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //testing Loading
        dispatch({type:'START_LOADING'});

        setTimeout(() => {
            dispatch({ type: 'END_LOADING' });
        }, 6000)

        //checking the userInput
        console.log('Name value:', name);
        console.log('Email value:', email);
        console.log('Password value:', password);
        console.log('Confirm password value:', confirmPassword);

        //testing Notification
        if (password !== confirmPassword) {
            dispatch({
                type: 'UPDATE_ALERT',
                payload: { open: true, severity: 'error', message: 'Passwords don\'t match!' },
            });
            console.log("passwords mismatch!")
            return;
        }
    };

    useEffect(() => {
        if (isRegister) {
            setTitle('Register');
        } else {
            setTitle('Login');
        }
    }, [isRegister]);

    return (
        <Dialog open={openLogin} onClose={handleClose}>
            <DialogTitle>
                {title}
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: (theme) => theme.palette.grey[500],
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
                    {isRegister && (
                        <TextField
                            autoFocus
                            margin="normal"
                            variant="standard"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            inputProps={{ minLength: 2 }}
                            inputRef={nameRef}
                            required
                        />
                    )}
                    <TextField
                        autoFocus={!isRegister}
                        margin="normal"
                        variant="standard"
                        id="email"
                        label="Email"
                        type="text"
                        fullWidth
                        value={email}
                        inputRef={emailRef}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <PasswordField
                        id="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {isRegister && (
                        <PasswordField
                            id="confirmPassword"
                            label="Confirm Password"
                            passwordRef={confirmPassword}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    )}
                </DialogContent>
                <DialogActions sx={{ px: '19px' }}>
                    <Button type="submit" variant="contained" endIcon={<Send />}>
                        Submit
                    </Button>
                </DialogActions>
            </form>
            <DialogActions sx={{ justifyContent: 'left', p: '5px 24px' }}>
                {isRegister ? 'Do you have an account? ' : 'Don\'t have an account? '}
                <Button onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? 'Sign in now' : 'Sign up now'}
                </Button>
            </DialogActions>
            <DialogActions sx={{ justifyContent: 'center', py: '24px' }}>
                <GoogleOneTapLogin />
            </DialogActions>
        </Dialog>
    );
};

export default Login;