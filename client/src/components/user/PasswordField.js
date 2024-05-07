import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordField = ({ id = 'password', label = 'Password', value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
    };

    return (
        <TextField
            margin='normal'
            variant='standard'
            id={id}
            label={label}
            type={showPassword ? 'text' : 'password'}
            fullWidth
            inputProps={{ minLength: 6 }}
            required
            autoComplete='on'
            value={value}
            onChange={onChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton
                            onClick={handleClick}
                            onMouseDown={handleMouseDown}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default PasswordField;
