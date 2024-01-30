import Header from '../components/Header';
import Footer from '../components/Footer';

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
                        <div>
                            <button><a href="/Company-Incorporation-Services">Company Incorporation Services</a> </button>
                        </div>
                        <div>
                            <button><a href="/Post-Incorporation-Support-Services">Post Incorporation Support Services</a></button>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}


export default Services