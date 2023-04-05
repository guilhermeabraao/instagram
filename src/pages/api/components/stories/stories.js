import FollowersStories from "./followersStories";
import YourStories from "./yourStories";

export default function Stories() {
    return (
        <div className="stories">
            <YourStories />
            <FollowersStories />

            <style jsx>{`
            .stories{
                margin-top:10vh;
                padding-left: 2.3rem;
                height:14vh;
                max-height: fit-content;
                overflow-x:auto;
                display:flex;
                gap:1rem;
                align-items: center;
            }
            
            `}</style>
        </div>
    )
}