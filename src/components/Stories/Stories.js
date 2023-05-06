import Storie from "./Storie";
import { IonIcon } from "@ionic/react"
import { chevronForwardCircleOutline } from 'ionicons/icons';

const stories = [{src: "assets/img/9gag.svg", user: "9gag"},
                {src: "assets/img/meowed.svg", user: "meowed"},
                {src: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
                {src: "assets/img/respondeai.svg", user: "respondeai"},
                {src: "assets/img/filomoderna.svg", user: "filomoderna"},
                {src: "assets/img/wawawicomics.svg", user: "wawawicomics"},
                {src: "assets/img/memeriagourmet.svg", user: "memeriagourmet"},
                {src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_20.jpg", user: "Aphelios"}];
                
export default function Stories() {
    return (
        <div className="stories">
            {stories.map(e => <Storie key={e.user} src={e.src} user={e.user} />)}

            <div className="setinha">
                <IonIcon icon={chevronForwardCircleOutline}></IonIcon>
            </div>
        </div>);
}