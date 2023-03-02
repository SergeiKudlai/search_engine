import './Footer.scss';

import darkLogo from './img/rss.jpg';
import gitHub from './img/github.svg';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-wrapper container">
                <div className="main-block">
                    <div className="main-block-tittle">
                        <div className="footer-name-logo">RSJobs</div>
                        <div className="footer-logo">
                            <img className="footerlogo" src={darkLogo} alt="dark logo" />
                        </div>
                    </div>

                    <div className="links">
                        <div className="rs">
                            <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
                                <img src="https://rs.school/images/rs_school_js.svg" alt="rsschool" />
                            </a>
                        </div>

                        <div className="github">
                            <a href="https://github.com/SergeiKudlai" target="_blank" rel="noreferrer">
                                <img src={gitHub} alt="github" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="desk">
                    <div className="descCompany">© 2023 Группа компаний HeadHunter</div>
                </div>
            </div>
        </footer>
    );
}
