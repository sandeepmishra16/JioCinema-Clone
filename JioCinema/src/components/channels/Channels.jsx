import styles from "./channels.module.css";
import channel1 from "../../assets/channel1.jpg";
import channel2 from "../../assets/channel2.png";
import channel3 from "../../assets/channel3.jpg";
import channel4 from "../../assets/channel4.png";
import channel5 from "../../assets/channel5.jpg";
import channel6 from "../../assets/channel6.jpg";
import channel7 from "../../assets/channel7.jpg";
import channel8 from "../../assets/channel8.jpg";
import channel9 from "../../assets/channel9.png";
import channel10 from "../../assets/channel10.png";
import channel11 from "../../assets/channel11.jpg";

export default function Channels() {
    return (
        <>
            <div className={styles.channels}>

                <img src={channel4} alt="channel4" />
                <img src={channel10} alt="channel10" />
                <img src={channel9} alt="channel9" />
                <img src={channel1} alt="channel1" />
                <img src={channel2} alt="channel2" />
                <img src={channel3} alt="channel3" />
                <img src={channel8} alt="channel8" />
                <img src={channel11} alt="channel11" />  
                <img src={channel5} alt="channel5" />
                <img src={channel6} alt="channel6" />
                <img src={channel7} alt="channel7" />     
            </div>
        </>
    )
}
