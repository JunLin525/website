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
        { name: '首頁', action: () => navigate('/') },
        { name: '關於我們', action: () => navigate('/About-us') },
        { name: '相關服務', action: () => navigate('/Services') },
        { name: 'FAQs', action: () => navigate('/FAQs') },
        { name: '聯絡我們', action: () => navigate('/Contact-Us') },
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
