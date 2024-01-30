import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PostInc() {
    return (
        <div className="landing-backgrounds">
            <Header />
            <div className='white-mocks'>
                <div className="about-page">
                    <div className="About-content">
                        <br/>
                        <br/>
                        <div className='FAQ-head'>
                            <h3>Post Incorporation Support Services</h3>
                        </div>
                        <div className='FAQ-Block'>
                        <div>
                            <button><a href="/Corporate-Secretary">Corporate Secretary</a></button>
                        </div>
                        <div>
                            <button><a href="/Accouting-Auditing-Tax-Filing">Accounting, Auditing & Tax Filing</a></button>
                        </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}


export default PostInc