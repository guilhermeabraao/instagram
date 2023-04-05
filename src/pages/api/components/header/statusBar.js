import Image from 'next/image';
import signalIcon from '../../assets/signalIcon.svg';
import wifiIcon from '../../assets/wifiIcon.svg';
import batteryIcon from '../../assets/batteryIcon.svg';

export default function StatusBar() {



    return (
        <div className="statusBar">
            <span className="time">12:00</span>
            <div className="statusIcons">
                <Image src={signalIcon} alt='signalIcon' width={30} />
                <Image src={wifiIcon} alt='wifiIcon' width={30} />
                <Image src={batteryIcon} alt='batteryIcon' width={30} />
            </div>

            <style jsx>{`
            .statusBar {
                height:5vh;
                width: 100vw;
                padding: 0px 1.2rem;
                display:flex;
                align-items: center;
                justify-content: space-between;
            }
            .time {
                color: #FFFFFF;
                font-weight: 700;
                font-size: 2rem;
                line-height: 4.8rem;
            }
            .statusIcons{
                gap: 0.8rem;
                display:flex;
            }
            `}
            </style>
        </div>
    )
}