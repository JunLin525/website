import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


// import AdbIcon from '@mui/icons-material/Adb';

function Header() {
    // // let { user, logoutUser } = useContext(Authcontext)
    const navigate = useNavigate();
    // // const [userData, setUserData] = useState([])
    // // const [anchorElNav, setAnchorElNav] = useState(null);
    // // const BASE_URL = "https://junlin5525.dev/api"

    // // ... [略去fetchUserName和useEffect的部分]

    // // const handleOpenNavMenu = (event) => {
    // //     setAnchorElNav(event.currentTarget);
    // // };
    // // const handleCloseNavMenu = () => {
    // //     setAnchorElNav(null);
    // // };

    const pages = [
        { name: 'Home', action: () => navigate('/') },
        { name: 'About Us', action: () => navigate('/About-us') },
        { name: 'Services', action: () => navigate('/Services') },
        { name: 'FAQs', action: () => navigate('/FAQs') },
        { name: 'Contact us', action: () => navigate('/Contact-Us') },

    ];
    return(
        <div className="header-container">
        {pages.map((page, index) => (
            <button
                key={page.name}
                onClick={page.action}
                className="header-button"
                style={{ 
                        gridColumn: `${4 + index} / span 1` , 
                        color: 'black', 
                        display: 'block' 
                      }}
            >
                {page.name}
            </button>
        ))}
        </div>
    )
    
}

export default Header;