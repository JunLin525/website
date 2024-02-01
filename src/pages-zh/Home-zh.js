import HeaderZH from '../components/Header-zh';
import FooterZH from '../components/Footer-zh';

function HomeZH() {
    return (
        <div className="landing-backgrounds">
            <HeaderZH />
            <div className='white-mocks'>
                <div className="about-page">
                    <div className="food-content">
                        <br/>
                        <br/>
                        <div className='Home-Services'>
                            <h3>離岸公司服務</h3>
                            <p>
                            XXXXXX 已成為一家卓越的離岸服務提供商，專注於跨戰略地點（包括香港、開曼群島、英屬維京群島 (BVI) 和塞席爾）的國際註冊、企業服務和合規解決方案。                            </p>
                            <button>
                                更多
                            </button>
                        </div>
                        <div className='Home-Block'>
                            
                            <div className='Home-inner-Block'>
                                <h3>公司註冊服務</h3>
                                <p>
                                將您的合規需求委託給我們，因為我們確保嚴格遵守當地法規 法規。 我們的服務包括及時提交年度報告、全面的 合規性檢查以及滿足國際標準的指導。
                                </p>
                                <span>更多</span>
                            </div>
                            <div className='Home-inner-Block'> 
                                <h3>隱私和保密</h3>
                                <p>
                                透過我們以隱私為中心的解決方案保護您的商業利益。 我們的提名人 服務確保董事和股東的機密性，保護 受益所有人的匿名性。
                                </p>
                            </div>
                        </div>
                        <div className='Home-Block'>
                            <div className='Home-inner-Block'>
                                <h3>稅務考慮</h3>
                                <p>
                                透過利用以下優勢對您的業務進行策略定位，以實現最佳稅收效率具有優惠企業稅率的司法管轄區。
                                </p>
                            </div>
                            <div className='Home-inner-Block'>
                                <h3>法律諮詢</h3>
                                <p>
                                造訪我們的法律專業人士協作網絡，確保奠定堅實的基礎 為了您的離岸事業。 我們的團隊致力於解決複雜的問題 國際商業法規，保證遵守所有相關法律。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterZH />
            </div>
        </div>
    )
}


export default HomeZH