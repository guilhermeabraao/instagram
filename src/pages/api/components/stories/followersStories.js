import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avatarBg from '../../assets/avatarBg.svg'

export default function FollowersStories() {

    const users = [{
        id: 0,
        name: "user1",
        profileImage: avatarBg
    },
    {
        id: 1,
        name: "user2",
        profileImage: avatarBg
    },
    {
        id: 2,
        name: "user3",
        profileImage: avatarBg
    },
    {
        id: 3,
        name: "user4",
        profileImage: avatarBg
    },
    ]

    const imageSize = {
        width: '75px',
        height: '75px',
        background: 'none',
        backgroundColor: '#262626'
    }

    const border = {
        border: '0.3rem solid #262626',
        borderRadius: '50%',
        padding: '0.5rem',
        marginBottom: '1rem'
    }
    return (
        <>
            <Stack direction="row" spacing={`1rem`}>
                {users.map((user) => (
                    <div className='storyDiv' key={user.id}>
                        <div style={border}>
                            <Avatar alt={user.name} src={user.profileImage.src} style={imageSize} />
                        </div>
                        <p>{user.name}</p>
                    </div>
                ))}
            </Stack>

            <style jsx>{`
        
        p{
            font-size: 1.6rem;
        }
        .storyDiv{
            margin-top: 1.5rem;
            display:flex;
            flex-direction: column;
            align-items:center;
            margin-bottom: 1.5rem;
            
        }
        `}</style>
        </>
    );
}