import { useMediaQuery } from "@mui/material"

export default function DesktopWarning() {

    const screenSize = useMediaQuery(`(max-width: 520px)`, { noSsr: true })

    return (
        <div className={!screenSize ? 'desktop' : 'mobile'}>
            <h1>CHANGE TO MOBILE RESOLUTION TO SEE THE LAYOUT</h1>
            <h2>recommended 414x896</h2>
            <style jsx>{`
            .desktop{
                width: 100vw;
                height:100vh;
                background: black;
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: absolute;
                z-index: 3;
                font-size: 5rem;
                text-align: center;
                overflow-y: hidden;
            }

            .mobile{
                display: none;
            }
            `}</style>
        </div>
    )
}