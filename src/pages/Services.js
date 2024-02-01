import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'; // 如果您使用 React Router

function Services() {
    return (
        <div className="landing-backgrounds">
            <Header />
            <div className='white-mocks'>
                <div className="about-page">
                    <div className="About-content">
                        <br/>
                        <br/>
                        <div className='FAQ-head'>
                            <h3>Services</h3>
                        </div>
                        <div className='FAQ-Block'>
                            <Box sx={{ minWidth: 275 }}>
                                <Typography variant="h5" component="div">
                                    Services We Offer
                                </Typography>
                                <Card variant="outlined">
                                    <CardContent>

                                        <br />
                                        <Typography variant="body2">
                                            <Link to="/Company-Incorporation-Services">Company Incorporation Services</Link>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                                <Card variant="outlined">
                                    <CardContent>

                                        <br />
                                        <Typography variant="body2">
                                            <Link to="/Post-Incorporation-Support-Services">Post Incorporation Support Services</Link>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Services;
