import HeaderZH from '../components/Header-zh';
import FooterZH from '../components/Footer-zh';

function AboutZH() {
    return (
        <div className="landing-backgrounds">
            <HeaderZH />
            <div className='white-mocks'>
                <div className="about-page">
                    <div className="About-content">
                        <br/>
                        <br/>
                        <div className='Home-Services'>
                            <h3>關於我們- 離岸公司服務</h3>
                        </div>
                        <div className='Home-Block'>
                            <div>
                                <div>
                                XXXXXX 成為了一個領先的海外服務提供商，專門提供國際公司註冊、企業服務和合規方案，服務地點涵蓋香港、開曼群島、英國維爾京群島（BVI）以及塞席爾。
                                </div>
                                <div>
                                    利用我們對這些地區法律體系和監管環境的熟悉，我們的專業範圍擴展到提供全面的海外公司成立服務，以及為商業公司、有限合夥和分隔投資組合公司（SPCs）量身打造的合規解決方案。
                                </div>
                                <div>
                                通過細致的研究、對法律和稅務影響的細緻理解，以及與信譽良好的服務提供商的合作，我們賦能企業在遵守不斷變化的規章和國際標準的同時茁壯成長。
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='centered-title'>我們的服務區域</h2>
                            <div className='Home-Block'>
                                <div className='Home-inner-Block'>
                                    <h3>開曼群島</h3>
                                </div>
                                <div className='Home-inner-Block'>
                                    <h3>英屬維京群島</h3>
                                </div>
                            </div>
                            <div className='Home-Block'>
                                <div className='Home-inner-Block'>
                                    <h3>香港</h3>
                                </div>
                                <div className='Home-inner-Block'>
                                    <h3>塞席爾</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterZH />
            </div>
        </div>
    )
}

export default AboutZH