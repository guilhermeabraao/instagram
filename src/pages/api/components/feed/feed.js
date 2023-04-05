import avatarBg from '../../assets/avatarBg.svg';
import menuIcon from '../../assets/menuIcon.svg';
import activityIcon from '../../assets/activityIcon.svg';
import commentIcon from '../../assets/commentIcon.svg';
import sendIcon from '../../assets/sendIcon.svg';
import slider from '../../assets/slider.svg';
import saveIcon from '../../assets/saveIcon.svg';
import Image from 'next/image';

export default function Feed() {
    return (
        <div className='feed'>
            <div className='avatarMenuDiv'>
                <div className='avatarUsernameDiv'>
                    <Image alt='avatar' src={avatarBg} width={44} height={44} />
                    <div className='strongSpanDiv'>
                        <strong>UserName</strong>
                        <span>City, Country</span>
                    </div>
                </div>
                <Image alt='menu' src={menuIcon} width={28} />
            </div>
            <div className='photos'>
                <div className='photoCount'>1/8</div>
            </div>
            <div className='postInfos'>
                <div className='postIconsDiv'>
                    <div className='interactIcons'>
                        <Image alt='like' src={activityIcon} width={32} />
                        <Image alt='comment' src={commentIcon} width={32} />
                        <Image alt='send' src={sendIcon} width={32} />
                    </div>
                    <Image alt='slider' src={slider} height={8} />
                    <div className='saveIconDiv'>
                        <Image alt='save' src={saveIcon} height={32} />
                    </div>
                </div>
                <div className='photoAbout'>
                    <div className='likesDiv'>
                        <strong className='likesDivStrong'>8,888 likes</strong>
                    </div>
                    <div className='photoSubtitle'>
                        <span><strong>UserName</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
                    </div>
                    <div className='commentsDiv'>
                        <span className='spanComment'>View all 30 comments</span>
                        <div className='hourTranslation'>
                            <span className='spanHour'>12 hours ago • </span><span className='spanTranslation'>See translation</span>
                        </div>
                    </div>
                </div>
            </div>



            <style jsx>{`
           
            .avatarMenuDiv{
                height: 7vh;
                padding: 0 1.4rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .avatarUsernameDiv{
                display:flex;
                gap: 1rem;
            }
            .strongSpanDiv{
                display: flex;
                flex-direction: column;
            }
            .strongSpanDiv strong{
                font-weight: 500;
                font-size: 1.75rem;
                line-height: 2.4rem;
            }
            .strongSpanDiv span{
                font-weight: 400;
                font-size: 1.5rem;
                line-height: 1.4rem;
                letter-spacing: 0.034rem;
            }
            .photos{
                height: 44vh;
                background: #262626;
            }
            .photoCount{
                height: 3.6rem;
                width: 6.15rem;
                background: rgba(44, 44, 44, 0.8);
                border-radius: 36px;
                font-weight: 500;
                font-size: 2rem;
                line-height: 2.4rem;
                display:flex;
                align-items: center;
                justify-content: center;
                position: relative;
                align-self: right;
                left: 83vw;
                top: 1.5vh;
            }
            .postIconsDiv{
                width: 100vw;
                height: 6.4rem;
                padding: 1.6rem;
                display: flex;
                align-items:center;
                justify-content: space-between;
            }
            .interactIcons{
                display:flex;
                gap: 1rem;
            }
            .saveIconDiv{
                width: 11.6rem;
                display:flex;
                justify-content: flex-end;
            }
            .photoAbout{
                margin: 0 1.6rem;
            }
            .likesDivStrong{
                font-weight: 500;
                font-size: 1.8rem;
                line-height: 2rem;
            }
            .photoSubtitle span{
                font-size: 1.6rem;
                
            }
            .commentsDiv{
                color: #9C9C9C;
            }
            .spanComment{
                font-size: 1.5rem;
                font-weight: 400;
            }
            .spanHour{
                font-size: 1.2rem;
            }
            .spanTranslation{
                font-size: 1.2rem;
                color: white;
            }

            
            `}</style>
        </div>
    )
}