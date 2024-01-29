import Header from '../components/Header';
import Footer from '../components/Footer';

function FAQ() {
    return (
        <div className="landing-backgrounds">
            <Header />
            <div className='white-mocks'>
                <div className="about-page">
                    <div className="About-content">
                        <br/>
                        <br/>
                        <div className='FAQ-head'>
                            <h3>FAQs</h3>
                        </div>
                        <div className='FAQ-Block'>
                            <div>
                                <h3>1.How much time is typically required to complete the incorporation process for a company? </h3>
                                <p>A Company is formally incorporated upon the submission of incorporation documents to the Registrar of Companies. Subsequently, a Certificate of Incorporation is issued within 2-3 working days.</p>
                            </div>
                            <div>
                                <h3>2. What specific documents are necessary for the incorporation of a company?</h3>
                                <p>To initiate the process, completion of our Company Incorporation Request Form is necessary. Key details include the company's name, Directors (or general partner for limited partnerships), shareholders, and the funding source for incorporation fees. "Know Your Client" (KYC) information is also mandatory to verify the identity of Directors and shareholders.</p>
                            </div>
                            <div>
                                <h3>3. What constitutes KYC documents, and who is obligated to furnish these documents for due diligence?</h3>
                                <p>
                                Complying with the local and international anti-money laundering regulations, KYC documents are 
                                imperative. Documents are required for each Director and any shareholder holding 10% or more of the company's issued shares. Individuals must provide 
                                identity certification, address proof, and a reference letter. Entities necessitate certified copies of charter documents and registers.
                                </p>
                            </div>
                            <div>
                                <h3>4. What specific criteria must be met for KYC documents, and are items like ID cards, credit card bills, or driver’s licenses acceptable as proof of address? Who is authorized to issue a reference letter?</h3>
                                <p>ID cards, credit card bills, or driver's licenses are not acceptable as address proof. Recent utility bills (issued within the last 3 months) or bank statements meet the criteria.Passport or utility bill certification is authorized by lawyers or notarized by Notary Public. Reference letters can be issued by professionals such as lawyers, CPAs, or medical doctors, provided they have known the subject for a minimum of two years.</p>
                            </div>
                            <div>
                                <h3>5. What is the minimum number of directors and shareholders required for the incorporation of a company?</h3>
                                <p> A minimum of one shareholder and one director is mandatory.</p>
                            </div>
                            <div>
                                <h3>6.Is it mandatory to have Caymanian directors or shareholders, and are corporate entities eligible to act as directors or shareholders? </h3>
                                <p>
                                No requirement for Caymanian directors/shareholders. Corporate directors/shareholders are permissible.
                                </p>
                            </div>
                            <div>
                                <h3>7.Will the names and details of directors and shareholders be publicly accessible?</h3>
                                <p>
                                Names and addresses of directors and officers are filed with the Registrar of Companies but are not publicly accessible. Shareholder details are not required to be filed.
                                </p>
                            </div>
                            <div>
                                <h3>8. What address information is necessary for each shareholder and director during the incorporation process?</h3>
                                <p>Residential address for individuals, registered office or business address for entities.</p>
                            </div>
                            <div>
                                <h3>9. Can officers such as president, CEO, CFO, or secretary be appointed, and will their names be disclosed to the public?</h3>
                                <p>Officers like president, CEO, CFO, secretary can be appointed. Their details are filed with the Registrar of Companies but are not publicly searchable.</p>
                            </div>
                            <div>
                                <h3>10. Is it permissible to include Chinese names for Cayman companies, and are there specific requirements or considerations for such inclusion?</h3>
                                <p>Yes, Chinese names are permitted. If adopted during incorporation, a translation certificate from a certified translator is needed. A dual foreign name can be added post-incorporation with further details available upon inquiry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}


export default FAQ