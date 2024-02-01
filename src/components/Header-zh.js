import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import LanguageIcon from '@mui/icons-material/Language'; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';


function HeaderZH() {
    const navigate = useNavigate();
    const [anchorElLang, setAnchorElLang] = useState(null);

    const pages = [
        { name: '首頁', action: () => navigate('/Home-zh') },
        { name: '關於我們', action: () => navigate('/About-us-zh') },
        { name: '相關服務', action: () => navigate('/Services-zh') },
        { name: 'FAQs', action: () => navigate('/FAQs-zh') },
        { name: '聯絡我們', action: () => navigate('/Contact-Us-zh') },
    ];

    const handleOpenLangMenu = (event) => {
        setAnchorElLang(event.currentTarget);
    };

    const handleCloseLangMenu = () => {
        setAnchorElLang(null);
    };

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
                <IconButton 
                    size="large" 
                    aria-label="select language" 
                    aria-controls="menu-lang"
                    aria-haspopup="true"
                    onClick={handleOpenLangMenu}
                    color="inherit"
                >
                    <LanguageIcon />
                </IconButton>
                <Menu
                    id="menu-lang"
                    anchorEl={anchorElLang}
                    keepMounted
                    open={Boolean(anchorElLang)}
                    onClose={handleCloseLangMenu}
                >
                    <MenuItem onClick={() => navigate('/')}>English</MenuItem>
                    <MenuItem onClick={() => navigate('/Home-zh')}>中文</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderZH;
