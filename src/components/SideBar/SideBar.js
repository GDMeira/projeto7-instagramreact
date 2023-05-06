import Suggestions from "../Suggestions/Suggestions";
import User from "./User"

let userSrc = "assets/img/catanacomics.svg";
let userName = "catanacomics";

export default function SideBar() {
    return <div className="sidebar">
        <User src={userSrc} userName={userName}/>

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