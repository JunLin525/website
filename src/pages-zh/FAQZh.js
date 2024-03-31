import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import HeaderZH from '../components/Header-zh';
import FooterZH from '../components/Footer-zh';

function FAQZH() {
    const faqs = [
        {
            "question": "1. 成立公司的整個註冊過程通常需要多長時間？",
            "answer": "一家公司在提交註冊文件給公司註冊官後正式成立。隨後，在2-3個工作日內會發出公司登記證書。"
        },
        {
            "question": "2. 成立公司需要哪些特定文件？",
            "answer": "啟動過程需要完成我們的公司註冊表。相關細節包括公司名稱、董事（或有限合夥的一般合夥人）、股東以及支付註冊費用的資金來源。「KYC也是必須的，以驗證董事和股東的身份。"
        },
        {
            "question": "3. 什麼構成KYC文件，以及誰有義務提供這些文件進行盡職調查？",
            "answer": "為遵守地方和國際反洗錢規定，KYC文件是必須的。每位董事和持有公司發行股份10%或以上的股東都需要提供文件。個人必須提供身份證明、地址證明和推薦信。法人則需要提供章程文件和登記證明的認證副本。"
        },
        {
            "question": "4. KYC文件必須滿足哪些特定標準，身份證、信用卡賬單或駕駛執照作為地址證明是否可接受？誰有權發出推薦信？",
            "answer": "身份證、信用卡賬單或駕駛執照不可作為地址證明。近期的水電費賬單（過去三個月內有效）或銀行對賬單皆符合標準。護照或水電費賬單認證可以由律師授權或由公證人公證。推薦信可以由律師、註冊會計師或醫生等專業人士發出，前提是他們至少與您熟識超過兩年。"
        },
        {
            "question": "5. 成立公司最少需要多少董事和股東？",
            "answer": "至少需要一名股東和一名董事。"
        },
        {
            "question": "6. 是否必須有開曼人擔任董事或股東，公司實體是否可以擔任董事或股東？",
            "answer": "沒有要求開曼人擔任董事/股東。允許公司董事/股東。"
        },
        {
            "question": "7. 董事和股東的姓名和詳細信息是否會公開？",
            "answer": "董事和官員的姓名和地址會提交給公司登記官員，但不會公開。不需要提交股東詳情。"
        },
        {
            "question": "8. 在公司成立過程中，每位股東和董事需要提供哪些地址信息？",
            "answer": "個人的住宅地址，法人的註冊辦公室或商業地址。"
        },
        {
            "question": "9. 可以任命董事長、執行長、財務長、秘書長等幹部嗎？他們的名字會對外公開嗎？",
            "answer": "可以任命董事長、執行長、財務長、秘書長等幹部。他們的詳細信息會提交給公司登記官員，但不會公開搜尋。"
        },
        {
            "question": "10. 是否可以為開曼公司包含中文名稱，針對此類包含有沒有特定的要求或考慮？",
            "answer": "是的，中文名稱是被允許的。如果在成立時採用，需要一份來自認證翻譯人員的翻譯證書。成立後可以添加雙語外國名稱，更多細節可進一步查詢。"
        }
    ];

    return (
        <div className="landing-backgrounds">
            <HeaderZH />
            <div className='white-mocks'>
                <div className="about-page">
                    <div className="About-content">
                        <br/>
                        <br/>
                        <div className='FAQ-head'>
                            <h3>FAQs</h3>
                        </div>
                        <br/>
                        <div className='FAQ-Block'>
                            {faqs.map((faq, index) => (
                                <Accordion key={index} sx={{ my: 2, bgcolor: 'white' }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${index}-content`}
                                        id={`panel${index}-header`}
                                        sx={{ bgcolor: 'white', color: 'black'}}
                                    >
                                        <Typography>{faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ bgcolor: 'light-gray', color: 'black'}}>
                                        <Typography>{faq.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                </div>
                <FooterZH />
            </div>
        </div>
    );
}

export default FAQZH;
