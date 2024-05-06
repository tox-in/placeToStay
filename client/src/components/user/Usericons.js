import { IconButton, Box, Badge, Tooltip, Avatar } from '@mui/material'
import { Mail, Notifications } from '@mui/icons-material'
import React from 'react'
import { useValue } from '../../context/contextProvider'

const UserIcons = () => {
    const {state:{currentUser}} = useValue()
  return (
    <Box>
        <IconButton size='large' color='inherit'>
            <Badge color='error' badgeContent={5}>
                <Mail />
            </Badge>
        </IconButton>
        <IconButton size='large' color='inherit'>
            <Badge color='error' badgeContent={20}>
                <Notifications />
            </Badge>
        </IconButton>
        <Tooltip title='open User profile'>
            <IconButton>
                <Avatar src={currentUser?.photoUrl} alt={currentUser?.name}> 
                    {currentUser?.name?.charAt(0).toUpperCase()}
                </Avatar>
            </IconButton>
        </Tooltip>
    </Box>
  )
}

export default UserIcons
