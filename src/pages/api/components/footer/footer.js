import Image from "next/image";
import homeIcon from '../../assets/homeIcon.svg';
import searchIcon from '../../assets/searchIcon.svg';
import addIcon from '../../assets/addIcon.svg';
import activityIcon from '../../assets/activityIcon.svg';
import avatarBg from '../../assets/avatarBg.svg';

export default function Footer() {

    const options = [homeIcon, searchIcon, addIcon, activityIcon, avatarBg]
    return (
        <div className="footer">
            {options.map((option) => (
                <Image src={option} alt='option' width={32} height={32} />
            ))}

            <style jsx>{`
        .footer{
            width: 100vw;
            height: 7.5vh;
            padding: 1.6rem 4rem;
            position: fixed;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            border-top: 0.1rem solid #e4d5d552;
            background: black;
        }
        
        `}</style>
        </div>
    )
}