import styles from "./footer.module.css";
import appLogo from "../../assets/appleStore.svg";
import playLogo from "../../assets/googlePlay.svg";
import { FaFacebookSquare, FaYoutube, FaInstagram  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import jioIcon from "../../assets/jioLogo.png";

export default function Footer() {

    return (
        <>
            <footer  className={styles.footer}>
                
                <div className={styles.container1}>
                    
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <h2>JioCinema</h2>
                            <div className={styles.para}>
                                <a>For You</a>
                            </div>
                            <div className={styles.para}>
                                <a>Sports</a>
                            </div>
                            <div className={styles.para}>
                                <a>Movies</a>
                            </div>
                            <div className={styles.para}>
                                <a>TV Shows</a>
                            </div>
                        </div>

                        <div className={styles.link}>
                            <h2>Support</h2>
                            <div className={styles.para}>
                                <a>Help Center</a>
                            </div>
                            <div className={styles.para}>
                                <a>Terms of Use</a>
                            </div>
                            <div className={styles.para}>
                                <a>Privacy Policy</a>
                            </div>
                            <div className={styles.para}>
                                <a>Content Complaints</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.social}>

                        <div className={styles.SocialLinks}>

                            <h2>Connect with us</h2>

                            <div className={styles.SocialLink}>
                                <div className={styles.icons}>
                                    <FaFacebookSquare className={styles.icon} />
                                </div>
                                <div className={styles.icons}>
                                    <FaSquareXTwitter className={styles.icon} />
                                </div>
                                <div className={styles.icons}>
                                    <FaInstagram className={styles.icon} /> 
                                </div>
                                <div className={styles.icons}>
                                    <FaYoutube className={styles.icon} />
                                </div>
                            </div>
                        </div>

                        <div className={styles.SocialLinks}>

                            <h2>Download the App</h2>

                            <div className={styles.imgLink}>
                                <div>
                                    <img src={playLogo} alt="Play store"/>
                                </div>
                                <div>
                                    <img src={appLogo} alt="App store"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container2}>

                    <div className={styles.copyright}>
                        <h5>Copyright © 2025 by Sandeep Mishra. All rights reserved.</h5>
                    </div>

                    <div className={styles.logo}>
                        <img className={styles.userIcon} src={jioIcon} alt="userIcon"/>
                    </div>
                </div>
            </footer>
        </>
    )
}
