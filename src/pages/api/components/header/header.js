import LogoAndChat from "./logoChat";
import StatusBar from "./statusBar";

export default function Header() {
    return (
        <div className="header">
            <StatusBar />
            <LogoAndChat />

            <style jsx>{`
            .header{
                width:fit-content;
                height: 10vh;
                position: fixed;
                top:0px;
                background:black;
                z-index:2;
            }
            `}</style>
        </div>
    )
}