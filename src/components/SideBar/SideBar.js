import React from "react";
import Suggestions from "../Suggestions/Suggestions";
import User from "./User"

export default function SideBar() {
    const [userSrc, setUserSrc] = React.useState("assets/img/catanacomics.svg");
    const [userName, setUserName] = React.useState("catanacomics");

    return <div className="sidebar">
        <User src={userSrc} userName={userName} setName={setUserName} setSrc={setUserSrc}/>

        <Suggestions />

        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
        </div>

        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
}