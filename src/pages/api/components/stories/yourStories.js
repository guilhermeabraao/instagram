import React from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import catProfile from '../../assets/catProfile.jpg';
import badgeIcon from '../../assets/badgeIcon.svg'

export default function YourStories() {

    const imageSize = {
        width: '7.5rem',
        height: '7.5rem',
    }
    const border = {
        border: '0.3rem solid #262626',
        borderRadius: '50%'
    }
    const paddingMargin = {
        padding: '0.5rem',
        marginBottom: '1rem',
    }
    return (

        <div className='storyDiv'>
            <div style={paddingMargin}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <Avatar alt='addStory' src={badgeIcon.src} sx={{ height: 24, width: 24 }} />
                    }
                >
                    <Avatar alt="Your Stories" src={catProfile.src} style={imageSize} />
                </Badge>
            </div>

            <p>Your Story</p>

            <style jsx>{`
            p{
                font-size: 1.6rem;
            }
            .storyDiv{
                display:flex;
                flex-direction: column;
                align-items: center;
            }
            `}</style>
        </div >

    )
}