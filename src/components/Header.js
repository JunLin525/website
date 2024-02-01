import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

function Header() {
    const navigate = useNavigate();

    const pages = [
        { name: 'Home', action: () => navigate('/') },
        { name: 'About Us', action: () => navigate('/About-us') },
        { name: 'Services', action: () => navigate('/Services') },
        { name: 'FAQs', action: () => navigate('/FAQs') },
        { name: 'Contact Us', action: () => navigate('/Contact-Us') },
    ];

    return (
        <AppBar position="static" sx={{ bgcolor: 'black' }}>
            <Toolbar>
                <AdbIcon sx={{ mr: 2, color: 'white' }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                    Your Logo Here
                </Typography>
                {pages.map((page) => (
                    <Button 
                        key={page.name} 
                        color="inherit"
                        onClick={page.action}
                        sx={{ color: 'white' }}
                    >
                        {page.name}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
