import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="landing-backgrounds">
            <Header />
            <div className='white-mocks'>
                <div className="about-page">
                    <div className="food-content">
                        <br/>
                        <br/>
                        <div className='Home-Services' style={{ backgroundImage: `url('https://hfrr6gpmrtor7uxhfg3za2bxmuo7g3mqx2s5alzslcv4cjzxh7ma.arweave.net/OWMfGeyM3R_S5ym3kGg3ZR3zbZC-pdAvMlirwSc3P9g')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                            <h3>Offshore Company Services</h3>
                            <p >
                            XXXXXX emerges as a preeminent offshore service provider, specializing in international incorporations, corporate services, and compliance solutions across strategic locations, including Hong Kong, the Cayman Islands, and the British Virgin Islands (BVI), and the Seychelles .
                            </p>
                            <button>
                                Read more
                            </button>
                        </div>
                        <div className='Home-Block'>
                            
                            <div className='Home-inner-Block'>
                                <h3>Company Incorporation Services</h3>
                                <p>
                                Entrust your compliance needs to us, as we ensure meticulous adherence to local 
                                regulations. Our services include timely filing of annual reports, comprehensive 
                                compliance checks, and guidance on meeting international standards.
                                </p>
                                <span>read more</span>
                            </div>
                            <div className='Home-inner-Block'> 
                                <h3>Privacy and Confidentiality:</h3>
                                <p>
                                Safeguard your business interests with our privacy-centric solutions. Our nominee 
                                services ensure the confidentiality of directors and shareholders, preserving the 
                                anonymity of beneficial owners.
                                </p>
                            </div>
                        </div>
                        <div className='Home-Block'>
                            <div className='Home-inner-Block'>
                                <h3>Tax Considerations</h3>
                                <p>
                                Strategically position your business for optimal tax efficiency by capitalizing on 
                                jurisdictions with favorable corporate tax rates.
                                </p>
                            </div>
                            <div className='Home-inner-Block'>
                                <h3>Legal Advisory</h3>
                                <p>
                                Access our collaborative network of legal professionals, ensuring a robust foundation 
                                for your offshore endeavors. Our team is committed to navigating the complexities of 
                                international business regulations, guaranteeing compliance with all relevant laws.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}


export default Home