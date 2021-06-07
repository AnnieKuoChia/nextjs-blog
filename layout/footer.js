const Footer = () => {
    return(
        <div className="footer">
            <div className="footerLink container">
                <div className="footerBlock">
                    <h3 className="footerTitle">條款說明</h3>
                    <a href="#" className="footerLink commingSoon">服務條款</a>
                    <a href="#" className="footerLink commingSoon">隱私權政策</a>
                </div>
                <div className="footerBlock">
                    <h3 className="footerTitle">品牌介紹</h3>
                    <a href="#" className="footerLink">關於我們</a>
                </div>
                <div className="footerBlock">
                    <h3 className="footerTitle">追蹤我們</h3>
                    <a href="#" className="footerLink">Facebook</a>
                    <a href="#" className="footerLink">Instagram</a>
                </div>
                <div className="footerBlock">
                    <h3 className="footerTitle">聯絡我們</h3>
                    <a href="#" className="footerLink">service@artogo.tw</a>
                </div>
            </div>
            <div className="footerCopyright">
                <p>© 2021 ARTOGO. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;