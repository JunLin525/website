import React from 'react';
import HeaderZH from '../components/Header-zh';
import FooterZH from '../components/Footer-zh';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'; 

function ServicesZH() {
    return (
        <div className="landing-backgrounds">
            <HeaderZH />
            <div className='white-mocks'>
                <div className="about-page">
                    <div className="About-content">
                        <br/>
                        <br/>
                        <div className='FAQ-head'>
                            <h3>相關服務</h3>
                        </div>
                        <div className='FAQ-Block'>
                            <Box sx={{ minWidth: 275 }}>
                                <Typography variant="h5" component="div">
                                    我們提供的服務
                                </Typography>
                                <Card variant="outlined">
                                    <CardContent>

                                        <br />
                                        <Typography variant="body2">
                                            <Link to="/Company-Incorporation-Services">公司註冊與登記服務</Link>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">瞭解更多</Button>
                                    </CardActions>
                                </Card>
                                <Card variant="outlined">
                                    <CardContent>

                                        <br />
                                        <Typography variant="body2">
                                            <Link to="/Post-Incorporation-Support-Services">公司維運支援服務</Link>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">瞭解更多</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </div>
                    </div>
                </div>
                <FooterZH />
            </div>
        </div>
    )
}

export default ServicesZH;
