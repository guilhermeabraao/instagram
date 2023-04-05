import Image from "next/image";
import logo from '../../assets/logo.svg';
import chatIcon from '../../assets/chatIcon.svg';

export default function LogoAndChat() {
    return (
        <div className="logoChatDiv">
            <Image src={logo} alt="logo" width={156} />
            <Image src={chatIcon} alt="chatIcon" width={32} />

            <style jsx>{`
            .logoChatDiv{
                height:5vh;
                padding: 0 1.2rem;
                display:flex;
                align-items: center;
                justify-content: space-between;
            }
            `}</style>
        </div>
    )
}